import { jwtDecode } from 'jwt-decode';
import { LocalStorage } from '../../utils/LocalStorage';
import axios, { AxiosResponse } from 'axios';

// const getTokenExpiration = (token: any) => {
//   console.log(typeof token);

//   const decodedToken = jwtDecode(token) || {};
//   return (decodedToken.exp ?? 0) * 1000; // Convert seconds to milliseconds
// };

const defaultHeader = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
// for multiple requests
let isRefreshing = false;
let failedQueue: any = [];

const processQueue = (error: any, token = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const baseURL: string = process.env.REACT_API_ENDPOINT || "";
const baseURL: string = String(process.env.REACT_APP_API_ENDPOINT) || '';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: baseURL,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = LocalStorage.getAccessToken();
    console.log(token);

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    return handleResponse(response);
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        try {
          const token = await new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          });
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return await axiosClient.request(originalRequest);
        } catch (err) {
          return await Promise.reject(err);
        }
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = LocalStorage.getRefreshToken();

      return new Promise(function (resolve, reject) {
        axios
          .post(
            `${process.env.REACT_APP_API_ENDPOINT}/auth/refresh-token`,
            { refreshToken },
            {
              headers: {
                ...defaultHeader,
                Authorization: 'Bearer ' + LocalStorage.getAccessToken(),
              },
            }
          )
          .then((res) => {
            const { data } = res.data;

            // 1) put token to LocalStorage
            LocalStorage.setToken(data);

            // 2) Change Authorization header
            axios.defaults.headers.common['Authorization'] =
              'Bearer ' + data.accessToken;
            originalRequest.headers['Authorization'] =
              'Bearer ' + data.accessToken;

            processQueue(null, data.accessToken);

            // 3) return originalRequest object with Axios
            resolve(axiosClient.request(originalRequest));
          })
          .catch((err) => {
            const { status, data } = err.response;

            if (status === 404) {
              // console.log("err.status === 404")
              clearAuthToken();
            }
            if (data && data.error === true) {
              clearAuthToken();
            }

            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
            LocalStorage.clearToken();
          });
      });
    }
    // const tokenExpiration = getTokenExpiration(
    //   LocalStorage.getAccessToken()?.toString()
    // );
    // const currentTime = new Date().getTime();
    // console.log("🚀 ~ file: axiosClient.ts:182 ~ currentTime:", currentTime);

    // if (tokenExpiration && tokenExpiration < currentTime) {
    //   // Token is expired, refresh it
    //   refreshTokenAndRetry(originalRequest);
    // } else {
    //   // Token is still valid, refresh after 5 minutes
    //   const refreshTimeout = tokenExpiration - currentTime - 5 * 60 * 1000;
    //   setTimeout(refreshTokenAndRetry, refreshTimeout);
    // }

    return Promise.reject(handleError(error));
  }
);

const handleResponse = (res: AxiosResponse<any>) => {
  if (res && res.data) {
    return res.data;
  }

  return res;
};

const handleError = (error: { response: { data: any } }) => {
  const { data } = error.response;

  console.error(error);

  return data;
};

const clearAuthToken = () => {
  LocalStorage.clearToken();
};

export default axiosClient;
