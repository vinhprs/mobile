import {
  getCourseDetail,
  getCourseUserBuy,
  getStudentCourse,
} from '../actions/course.action';
import { RootState } from './rootReducers';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  course: {
    listData: [],
    total: 0,
    totalPage: 0,
  },
  anotherCourse: {},
  loading: false,
  courseDetail: {},
  userCourse: [],
};
const courseSlice = createSlice({
  name: 'course',
  initialState: initialState,
  reducers: {
    setUpdateCourse(state, actions) {
      state.course = { ...state.course, ...actions.payload };
    },
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
    setDetailCourse(state, actions) {
      state.courseDetail = { ...state.courseDetail, ...actions.payload.data };
    },
    // setUserCourse(state, actions) {
    //   state.userCourse = actions.payload.data;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getCourseDetail.fulfilled, (state, actions) => {
      state.courseDetail = actions.payload.data;
    });
    builder.addCase(getCourseUserBuy.fulfilled, (state, actions) => {
      state.userCourse = actions.payload.data;
    });
    builder.addCase(getStudentCourse.fulfilled, (state, actions) => {
      state.anotherCourse = actions.payload.data;
    });
  },
});
export const { setUpdateCourse, setLoading, setDetailCourse } =
  courseSlice.actions;
export default courseSlice.reducer;
export const selectCourse = (state: RootState) => state.course.course;
export const selectLoading = (state: RootState) => state.course.loading;
export const selectCourseDetail = (state: RootState) =>
  state.course.courseDetail;
export const selectUserCourse = (state: RootState) => state.course.userCourse;
export const selectAnotherCourse = (state: RootState) =>
  state.course.anotherCourse;
