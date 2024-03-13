import { createAsyncThunk } from '@reduxjs/toolkit';
import { chatService } from '../services/chat.service';
export const getListPersonChat = createAsyncThunk(
  'getListPersonChat',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await chatService.getListPersonChat();
      return res;
    }catch(err){
      return rejectWithValue(err);
    }
  }
);
export const getPersonChatDetail = createAsyncThunk(
  'getPersonChatDetail',
  async(params:any,{dispatch, getState, rejectWithValue})=>{
    try{
      const res = await chatService.getPersonChatDetail(params);
      return res;
    }catch(err){
      return rejectWithValue(err);
    }
  }
);