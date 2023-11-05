import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducers";
const initialState = {
  index: 0,
  tabCourse: [0],
  course: {
    courseName: "",
    description: "",
    price: 0,
    expiredDate: "",
    thumbnail_url: "",
    categoryId: "",
    subCategoryId: "",
    sections: [],
  },
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
    updateCourseName(state, actions) {
      state.course.courseName = actions.payload;
    },
    updateDesc(state, actions) {
      state.course.description = actions.payload;
    },
    updatePrice(state, actions) {
      state.course.price = actions.payload;
    },
    updateExpiredDate(state, actions) {
      state.course.expiredDate = actions.payload;
    },
    updateCategoryId(state, actions) {
      state.course.categoryId = actions.payload;
    },
    updateSubCategoryId(state, actions) {
      state.course.subCategoryId = actions.payload;
    },
    updateSections(state: any, actions) {
      state.course.sections = actions.payload;
    },
    updateThumbnail(state, actions) {
      state.course.thumbnail_url = actions.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const {
  updateArray,
  updateIndex,
  updateCategoryId,
  updateCourseName,
  updateDesc,
  updatePrice,
  updateSections,
  updateSubCategoryId,
  updateExpiredDate,
  updateThumbnail,
} = createCourseSlice.actions;
export default createCourseSlice.reducer;
export const selectCreateCourse = (state: RootState) =>
  state?.createCourse?.tabCourse;
export const selectIndexCreateStep = (state: RootState) =>
  state.createCourse.index;
export const selectCoursesCreated = (state: RootState) =>
  state.createCourse.course;
