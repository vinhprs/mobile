import { RootState } from "../../hooks/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayQuestion: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState: initialState,
  reducers: {
    updateArray(state: any, actions: any) {
      state.arrayQuestion = [
        ...state.arrayQuestion.filter((p: any) => p !== actions.payload),
        actions.payload,
      ];
      state.arrayQuestion = state.arrayQuestion.sort((a: any, b: any) => a - b);
      console.log(state.arrayQuestion);
    },
    resetArray(state, actions) {
      state.arrayQuestion = [];
    },
  },
  extraReducers: (builder) => {},
});
export const { updateArray, resetArray } = questionSlice.actions;
export default questionSlice.reducer;
export const selectQuestion = (state: any) => state?.question?.arrayQuestion;
