import { createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "../services/auth.service";
import { LocalStorage } from "../../utils/LocalStorage";

export const login = createAsyncThunk(
  "auth/login",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await authService.login(params);
      console.log(res);
      const { data } = res;
      console.log(data);

      if (data && data.token) {
        LocalStorage.setToken(data.token);
        LocalStorage.setRefreshToken(data.refreshToken);
      }
      return res;
    } catch (err) {
      return rejectWithValue(err);
      // return err;
    }
  }
);
export const signup = createAsyncThunk(
  "auth/signup",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await authService.signup(params);
      return res;
    } catch (err) {
      return err;
    }
  }
);
export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await authService.verifyEmail(params);
      return res;
    } catch (err) {
      return err;
    }
  }
);
export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await authService.forgetPassword(params);
      return res;
    } catch (err) {
      return err;
    }
  }
);
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await authService.resetPassword(params);
      return res;
    } catch (err) {
      return err;
    }
  }
);
export const resendOTP = createAsyncThunk(
  "auth/resendOTP",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await authService.resendOTP(params);
      return res;
    } catch (err) {
      return err;
    }
  }
);
