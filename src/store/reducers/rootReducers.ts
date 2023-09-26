import { combineReducers } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";

const rootReducer = combineReducers({
  question: questionSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
