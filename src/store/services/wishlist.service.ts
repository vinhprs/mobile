// eslint-disable-next-line quotes
import axiosClient from "./axiosClient";
export const wishlistService = {
  postWishList: (params: any) => {
    return axiosClient.post('/bookmark', params);
  },
  getWistList: () => {
    return axiosClient.get('/bookmark/my-list');
  },
};
