import axiosClient from './axiosClient';
export const blogService = {
  createBlog: (params: any) => {
    return axiosClient.post('blog/create', params);
  },
  getListBlog:(params:any)=>{
    return axiosClient.get(`blog/my-blog?${params.toString()}`);
  },
  getLists:(params:any)=>{
    return axiosClient.get(`blog/list?${params.toString()}`);
  },
  getDetailBlog:(params:any)=>{
    return axiosClient.get(`blog/detail/${params.toString()}`);
  },
  updateBlog:(id:any,params:any)=>{
    return axiosClient.patch(`blog/update/${id}`, params);
  },
  deleteBlog:(params:any)=>{
    return axiosClient.delete(`blog/delete/${params}`);
  },
  approveBlog:(params:any)=>{
    return axiosClient.post('blog/approve', params);
  }
};
