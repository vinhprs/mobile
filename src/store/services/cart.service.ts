import axiosClient from "./axiosClient";
export const cartService = {
  addToCart: (params: any) => {
    return axiosClient.post(`cart/add-to-cart`, params);
  },
  getMyCart: () => {
    return axiosClient.get(`cart/my-cart`);
  },
  deleteCart: (params: any) => {
    return axiosClient.delete(`cart/${params}`);
  },
};
