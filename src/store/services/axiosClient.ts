import { LocalStorage } from "../../utils/LocalStorage";
import axios, { AxiosResponse } from "axios";

const defaultHeader = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  Accept: "application/json",
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

// @ts-ignore
// const baseURL: string = process.env.REACT_API_ENDPOINT || "";
const baseURL: string = "https://staging.primeedu.io.vn/api/v1";

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
      config.headers["Authorization"] = "Bearer " + token;
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
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return axiosClient.request(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = LocalStorage.getRefreshToken();

      return new Promise(function (resolve, reject) {
        axios
          .post(
            `http://localhost:4000/auth/refresh-token`,
            { refreshToken },
            {
              headers: defaultHeader,
            }
          )
          .then((res) => {
            const { data } = res.data;

            // 1) put token to LocalStorage
            LocalStorage.setToken(data);

            // 2) Change Authorization header
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + data.accessToken;
            originalRequest.headers["Authorization"] =
              "Bearer " + data.accessToken;

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
            if (data && data.error.errorCode === "REFRESH_TOKEN_INVALID") {
              clearAuthToken();
            }

            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

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
