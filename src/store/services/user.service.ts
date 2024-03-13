import axiosClient from './axiosClient';
export const userService = {
  userSetting: (params: any) => {
    return axiosClient.put('user/info', params);
  },
  getProvince: () => {
    return axiosClient.get('address/province');
  },
  getDistrict: (params:any) => {
    return axiosClient.get(`address/district?${params.toString()}`);
  },
  getSubjects: () => {
    return axiosClient.get('subjects');
  },
  getCategory: () => {
    return axiosClient.get('category');
  },
  getSubjetsGroup: () => {
    return axiosClient.get('subjects/group');
  },
  getCategoryById: (params: any) => {
    return axiosClient.get(`category/categoryId?${params.toString()}`);
  },
  getUserInfo: () => {
    return axiosClient.get('user/current-user');
  },
};
