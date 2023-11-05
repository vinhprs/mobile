import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../services/user.service";
export const userSetting = createAsyncThunk(
  "user/userSetting",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await userService.userSetting(params);
      return res;
    } catch (err) {
      rejectWithValue(err);
      return err;
    }
  }
);
export const getProvince = createAsyncThunk(
  "user/getProvince",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await userService.getProvince(params);
      return res;
    } catch (err) {
      rejectWithValue(err);
      return err;
    }
  }
);
export const getDistrict = createAsyncThunk(
  "user/getDistrict",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await userService.getDistrict();
      return res;
    } catch (err) {
      rejectWithValue(err);
      return err;
    }
  }
);
export const getSubjects = createAsyncThunk(
  "user/getSubjects",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await userService.getSubjects();
      return res;
    } catch (err) {
      rejectWithValue(err);
      return err;
    }
  }
);
export const getCategory = createAsyncThunk(
  "user/getCategory",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await userService.getCategory();
      return res;
    } catch (err) {
      rejectWithValue(err);
      return err;
    }
  }
);
export const getSubjetsGroup = createAsyncThunk(
  "user/getSubjetsGroup",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await userService.getSubjetsGroup();
      return res;
    } catch (err) {
      rejectWithValue(err);
      return err;
    }
  }
);
