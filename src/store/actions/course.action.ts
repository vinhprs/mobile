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
