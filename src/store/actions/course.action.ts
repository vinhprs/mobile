import { createAsyncThunk } from "@reduxjs/toolkit";
import { courseService } from "../services/course.service";
export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await courseService.createCourse(params);
      return res;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);
export const uploadFile = createAsyncThunk(
  "course/uploadFile",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await courseService.uploadFile(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getTeacherCourse = createAsyncThunk(
  "course/getTeacherCourse",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await courseService.getCourseTeacher(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getStudentCourse = createAsyncThunk(
  "course/getStudentCourse",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await courseService.getCourseStudent(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getCourseDetail = createAsyncThunk(
  "course/getCourseDetail",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await courseService.getCourseDetail(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getCourseUserBuy = createAsyncThunk(
  "course/getCourseUserBuy",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await courseService.getCourseUserBuy();
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const updatePublicCourse = createAsyncThunk(
  "course/updatePublicCourse",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await courseService.publicCourse(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getStudentParticipate = createAsyncThunk(
  "course/getStudentParticipate",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await courseService.getStudentParticipate(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
