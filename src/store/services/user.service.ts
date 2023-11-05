import axiosClient from "./axiosClient";
export const userService = {
  userSetting: (params: any) => {
    return axiosClient.put(`user/info`, params);
  },
  getProvince: (params: any) => {
    return axiosClient.get(`address/province?code=${params}`);
  },
  getDistrict: () => {
    return axiosClient.get(`address/district`);
  },
  getSubjects: () => {
    return axiosClient.get(`subjects`);
  },
  getCategory: () => {
    return axiosClient.get(`category`);
  },
  getSubjetsGroup: () => {
    return axiosClient.get(`subjects/group`);
  },
};
