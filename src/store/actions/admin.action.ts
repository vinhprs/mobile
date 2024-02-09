import { createAsyncThunk } from '@reduxjs/toolkit';
import { adminService } from '../services/admin.service';
export const getAccountList = createAsyncThunk(
  'admin/getAccountList',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await adminService.getListAccount(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const createTeacherAccount = createAsyncThunk(
  'admin/createTeacherAccount',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await adminService.createTeacherAccount(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const changeStatus = createAsyncThunk(
  'admin/changeStatus',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await adminService.changeStatus(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
