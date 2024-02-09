import { getUserInfo, userSetting } from '../actions/user.action';
import { RootState } from './rootReducers';
import { createSlice } from '@reduxjs/toolkit';
interface Auth {
  userId: object;
  isLogged: boolean;
  accessToken?: string;
  userRole: string;
  userInfo: object;
}
const initialState: Auth = {
  userId: {},
  userRole: '',
  isLogged: false,
  accessToken: '',
  userInfo: {},
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateUserId(state, actions) {
      state.userId = actions.payload;
    },
    updateIsLogged(state, actions) {
      state.isLogged = actions.payload;
    },
    updateAccessToken(state, actions) {
      state.accessToken = actions.payload;
    },
    updateUserRole(state, actions) {
      state.userRole = actions.payload;
    },
    updateUserInfo(state, actions) {
      state.userInfo = actions.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, actions) => {
      state.userInfo = actions.payload.data;
    });
  },
});
export const {
  updateUserId,
  updateAccessToken,
  updateIsLogged,
  updateUserRole,
  updateUserInfo,
} = authSlice.actions;
export default authSlice.reducer;
export const selectAuthUserId = (state: RootState) => state.auth.userId;
export const selectAuthToke = (state: RootState) => state.auth.accessToken;
export const selectIsLogged = (state: RootState) => state.auth.isLogged;
export const selectUserRole = (state: RootState) => state.auth.userRole;
export const selectUserInfo = (state: RootState) => state.auth.userInfo;
