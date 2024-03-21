import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationService } from '../services/notification.service';
export const getListNotification = createAsyncThunk(
  'getListNotification',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await notificationService.getListNotification();
      return res;
    }catch(err){
      return rejectWithValue(err);
    }
  }
);
export const updateNotification = createAsyncThunk(
  'updateNotification',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await notificationService.updateSeenNotification(params);
    }catch(err){
      return rejectWithValue(err);
    }
  }
);