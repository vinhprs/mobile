import axiosClient from './axiosClient';
export const adminService = {
  getListAccount: (params: any) => {
    return axiosClient.get(`/admin/users?${params.toString()}`);
  },
  createTeacherAccount: (params: any) => {
    return axiosClient.post('/admin/teachers', params);
  },
  changeStatus: (params: any) => {
    return axiosClient.patch('/admin/users', params);
  },
};
