import { combineReducers } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";
import courseTabSlice from "./courseTabSlice";

const rootReducer = combineReducers({
  question: questionSlice,
  courseTab: courseTabSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
