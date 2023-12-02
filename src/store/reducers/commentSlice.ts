import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducers";
import { getComments, getCommentsCourse } from "../actions/comment.action";
const initState = {
  commentLecture: {},
  comments: {},
  commentList: [],
  page: 1,
  commentCourse: {
    listData: [],
    total: 0,
    totalPage: 0,
  },
};
const commentSlice = createSlice({
  name: "comment",
  initialState: initState,
  reducers: {
    updateCommentList: (state, actions) => {
      state.commentList = actions.payload;
    },
    updatePage: (state, actions) => {
      state.page = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, actions) => {
      state.commentLecture = actions.payload.data;
    });
    builder.addCase(getCommentsCourse.fulfilled, (state: any, actions) => {
      state.commentCourse.listData = actions.payload.data?.listData;
      state.commentCourse.total = actions.payload.data.total;
      state.commentCourse.totalPage = actions.payload.data.totalPage;
    });
  },
});
export default commentSlice.reducer;
export const { updateCommentList, updatePage } = commentSlice.actions;
export const selectCommentList = (state: RootState) =>
  state.comment.commentList;
export const selectPageComment = (state: RootState) => state.comment.page;
export const selectCommentLecture = (state: RootState) =>
  state.comment.commentLecture;
export const selectCommentCourse = (state: RootState) =>
  state.comment.commentCourse;
