import { getListPersonChat, getPersonChatDetail } from '../actions/chat.actions';
import { RootState } from './rootReducers';
import { createSlice } from '@reduxjs/toolkit';
const intiState={
  getListPersonChat:{},
  getPersonChatDetail:{},
  inputMess:{}
};
const chatSlice = createSlice({
  name:'chat',
  initialState:intiState,
  reducers:{
    updateMess: (state,action)=>{
      state.inputMess = action.payload;
    }
  },
  extraReducers:(buider)=>{
    buider.addCase(getListPersonChat.fulfilled,(state,actions)=>{
      state.getListPersonChat = actions.payload.data;
    });
    buider.addCase(getPersonChatDetail.fulfilled,(state,actions)=>{
      state.getPersonChatDetail = actions.payload.data;
    });
  }
});
export default chatSlice.reducer;
export const {updateMess} = chatSlice.actions;
export const selectInputMess = (state:RootState)=>state.chat.inputMess;
export const selectListChatPerson = (state:RootState)=>state.chat.getListPersonChat;
export const selectPersonChat = (state:RootState)=>state.chat.getPersonChatDetail;