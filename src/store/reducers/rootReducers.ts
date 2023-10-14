import { combineReducers } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";
import courseTabSlice from "./courseTabSlice";
import authSlice from "./authSlice";
import createCourseSlice from "./createCourseSlice";

const rootReducer = combineReducers({
  question: questionSlice,
  courseTab: courseTabSlice,
  auth: authSlice,
  createCourse: createCourseSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
