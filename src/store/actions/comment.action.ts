import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentService } from '../services/comment.service';
export const getComments = createAsyncThunk(
  'comment/getCommnets',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await commentService.getComment(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const postComment = createAsyncThunk(
  'comment/postComment',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await commentService.postComment(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getCommentsCourse = createAsyncThunk(
  'comment/getCommentsCourse',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await commentService.getCommentCourse(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getAllCommentTeacherCourse = createAsyncThunk(
  'comment/getAllCommentTeacherCourse',
  async(params:any,{dispatch, getState, rejectWithValue})=>{
    try{
      const res = await commentService.getAllCommentTeacherCourse(params);
      return res;
    }catch(err){
      return rejectWithValue(err);
    }
  }
);