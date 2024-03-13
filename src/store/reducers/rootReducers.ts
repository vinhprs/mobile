import { combineReducers } from '@reduxjs/toolkit';
import questionSlice from './questionSlice';
import courseTabSlice from './courseTabSlice';
import authSlice from './authSlice';
import createCourseSlice from './createCourseSlice';
import courseSlice from './courseSlice';
import examSlice from './examSlice';
import cartSlice from './cartSlice';
import wishListSlice from './wishListSlice';
import commentSlice from './commentSlice';
import adminSlice from './adminSlice';
import chatSlice from './chatSlice';

const rootReducer = combineReducers({
  question: questionSlice,
  courseTab: courseTabSlice,
  auth: authSlice,
  createCourse: createCourseSlice,
  course: courseSlice,
  exam: examSlice,
  cart: cartSlice,
  wishlist: wishListSlice,
  comment: commentSlice,
  admin: adminSlice,
  chat:chatSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
