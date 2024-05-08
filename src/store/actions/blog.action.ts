import { createAsyncThunk } from '@reduxjs/toolkit';
import { blogService } from '../services/blog.service';
export const createBlogAction = createAsyncThunk(
  'blog/create',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await blogService.createBlog(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getBlogAction = createAsyncThunk(
  'blog/get',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await blogService.getListBlog(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getListBlogAction = createAsyncThunk(
  'blog/get',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await blogService.getLists(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getDetailAction = createAsyncThunk(
  'blog/get',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await blogService.getDetailBlog(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const updateBloglAction = createAsyncThunk(
  'blog/update',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await blogService.updateBlog(params.id,params.params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteBloglAction = createAsyncThunk(
  'blog/delete',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await blogService.deleteBlog(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const approveBlogAction = createAsyncThunk(
  'blog/approve',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await blogService.approveBlog(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);