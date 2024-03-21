import { getListNotification } from '../actions/notification.action';
import { RootState } from './rootReducers';
import { createSlice } from '@reduxjs/toolkit';
const initState = {
  getListNotification:{},
  notification:{}
};
const notificationSlice = createSlice({
  name:'notification',
  initialState:initState,
  reducers:{
    updateNotication:(state,actions)=>{
      state.notification = actions.payload;
    }
  },
  extraReducers:(builders)=>{
    builders.addCase(getListNotification.fulfilled,(state,actions)=>{
      state.getListNotification = actions.payload.data;
    });
  }
});

export default notificationSlice.reducer;
export const {updateNotication} = notificationSlice.actions;
export const selectNotificationList = (state:RootState)=>state.notification.getListNotification;
export const selectNoti = (state:RootState)=>state.notification.notification;