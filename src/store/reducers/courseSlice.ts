import { RootState } from "./rootReducers";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  course: {
    listData: [],
    total: 0,
    totalPage: 0,
  },
  loading: false,
};
const courseSlice = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {
    setUpdateCourse(state, actions) {
      state.course = { ...state.course, ...actions.payload };
    },
    setLoading(state, actions) {
      state.loading = actions.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { setUpdateCourse, setLoading } = courseSlice.actions;
export default courseSlice.reducer;
export const selectCourse = (state: RootState) => state.course.course;
export const selectLoading = (state: RootState) => state.course.loading;
