import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducers";
const initialState = {
  index: 0,
  tabCourse: [0],
};
const createCourseSlice = createSlice({
  name: "createCourse",
  initialState: initialState,
  reducers: {
    updateArray(state: any, actions) {
      state.tabCourse = [
        ...state.tabCourse.filter((p: any) => p !== actions.payload),
        actions.payload,
      ];
      state.tabCourse = state.tabCourse.sort((a: any, b: any) => a - b);
      console.log(state.tabCourse);
    },
    updateIndex(state, actions) {
      state.index = actions.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { updateArray, updateIndex } = createCourseSlice.actions;
export default createCourseSlice.reducer;
export const selectCreateCourse = (state: RootState) =>
  state?.createCourse?.tabCourse;
export const selectIndexCreateStep = (state: RootState) =>
  state.createCourse.index;
