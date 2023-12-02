import { createAsyncThunk } from "@reduxjs/toolkit";
import { examService } from "../services/exam.service";
export const createExam = createAsyncThunk(
  "exam/createExam",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const response = await examService.createExam(params);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getExam = createAsyncThunk(
  "exam/createExam",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await examService.getExam(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const updateExam = createAsyncThunk(
  "exam/updateExam",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await examService.updateExam(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const deleteExam = createAsyncThunk(
  "exam/deleteExam",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await examService.deleteExam(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getExamDetail = createAsyncThunk(
  "exam/getExamDetail",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await examService.getExamDetail(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const postExamResult = createAsyncThunk(
  "exam/postExam",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await examService.postExam(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
