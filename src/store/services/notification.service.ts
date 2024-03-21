import axiosClient from './axiosClient';
export const notificationService = {
  getListNotification:()=>{
    return axiosClient.get('noti/my-noti');
  },
  updateSeenNotification:(params:any)=>{
    return axiosClient.patch(`noti/my-noti/${params}`);
  }
};