import axiosClient from './axiosClient';
export const chatService = {
  getListPersonChat: ()=>{
    return axiosClient.get('chat/my-chat');
  },
  getPersonChatDetail:(params:any)=>{
    return axiosClient.get(`chat/detail/${params}`);
  }
}; 