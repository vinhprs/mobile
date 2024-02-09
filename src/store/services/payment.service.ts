import axiosClient from './axiosClient';
export const paymentService = {
  checkout: (params: any) => {
    return axiosClient.post('payment/checkout', params);
  },
};
