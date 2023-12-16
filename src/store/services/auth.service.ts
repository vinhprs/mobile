import axiosClient from "./axiosClient";
export const authService = {
  login: (params: any) => {
    return axiosClient.post(`auth/login`, params);
  },
  signup: (params: any) => {
    return axiosClient.post(`auth/register`, params);
  },
  verifyEmail: (params: any) => {
    return axiosClient.post(`auth/verify-email`, params);
  },
  forgetPassword: (params: any) => {
    return axiosClient.post(`auth/forgot-password`, params);
  },
  resetPassword: (params: any) => {
    return axiosClient.post(`auth/reset-password`, params);
  },
  resendOTP: (params: any) => {
    return axiosClient.post(`auth/resend-email`, params);
  },
  changePassword: (params: any) => {
    return axiosClient.post(`/auth/change-password`, params);
  },
};
