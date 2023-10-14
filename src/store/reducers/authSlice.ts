import { RootState } from "./rootReducers";
import { createSlice } from "@reduxjs/toolkit";
interface Auth {
  userId: string;
  isLogged: boolean;
  accessToken?: string;
}
const initialState: Auth = {
  userId: "",
  isLogged: false,
  accessToken: "",
};
const authSlice = createSlice({
  name: "auth",
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
  },

  extraReducers: (builder) => {},
});
export const { updateUserId, updateAccessToken, updateIsLogged } =
  authSlice.actions;
export default authSlice.reducer;
export const selectAuthUserId = (state: RootState) => state.auth.userId;
export const selectAuthToke = (state: RootState) => state.auth.accessToken;
export const selectIsLogged = (state: RootState) => state.auth.isLogged;
