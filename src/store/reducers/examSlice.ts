import { RootState } from "./rootReducers";
import { createSlice } from "@reduxjs/toolkit";
import { getExam } from "../actions/exam.action";
const initialState = {
  exam: {
    questions: [
      {
        title: "",
        answers: ["", "", "", ""],
        correctAnswers: [],
        explain: "",
        questionLevel: "Nhận biết",
      },
    ],
    title: "",
    categoryId: 0,
    subCategoryId: 0,
    time: 0,
  },
  exams: {},
};
const examSlice = createSlice({
  name: "exam",
  initialState: initialState,
  reducers: {
    setUpdateExam(state, actions) {
      const newArray: any = [...state.exam.questions, actions.payload];
      console.log(newArray);

      state.exam = {
        ...state.exam,
        questions: [...state.exam.questions, actions.payload],
      };
    },
    addAnswer: (state, action) => {
      const { questionIndex, value } = action.payload;
      state.exam.questions[questionIndex].answers.push(value);
    },
    deleteAnswer: (state, action) => {
      const { questionIndex, answerIndex } = action.payload;
      state.exam.questions[questionIndex].answers.splice(answerIndex, 1);
    },
    updateAnswer: (state, action) => {
      const { questionIndex, answerIndex, value } = action.payload;
      state.exam.questions[questionIndex].answers[answerIndex] = value;
    },
    updateAnswerTitle: (state, action) => {
      const { questionIndex, value } = action.payload;
      state.exam.questions[questionIndex].title = value;
    },
    updateAnswerExplain: (state, action) => {
      const { questionIndex, value } = action.payload;
      state.exam.questions[questionIndex].explain = value;
    },
    updateAnswerQuestionLevel: (state, action) => {
      const { questionIndex, value } = action.payload;
      state.exam.questions[questionIndex].questionLevel = value;
    },
    updateAnswerCorretAnswer: (state: any, action) => {
      const { questionIndex, value } = action.payload;
      state.exam.questions[questionIndex].correctAnswers.push(value);
    },
    deleteAnswerCorretAnswer: (state, action) => {
      const { questionIndex, value } = action.payload;
      console.log("🚀 ~ file: examSlice.ts:77 ~ value:", value);
      const newArray = state.exam.questions[
        questionIndex
      ].correctAnswers.filter((item) => item !== value);
      console.log("🚀 ~ file: examSlice.ts:81 ~ newArray:", newArray);
      state.exam.questions[questionIndex].correctAnswers = newArray;
    },
    updateTitle: (state, actions) => {
      state.exam = { ...state.exam, title: actions.payload };
    },
    updateGrade: (state, actions) => {
      state.exam = { ...state.exam, categoryId: actions.payload };
    },
    updateSubject: (state, actions) => {
      state.exam = { ...state.exam, subCategoryId: actions.payload };
    },
    updateTime: (state, actions) => {
      state.exam = { ...state.exam, time: actions.payload };
    },
    examList: (state, actions) => {
      state.exams = { ...state.exams, ...actions.payload.data };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExam.fulfilled, (state, action) => {
      state.exams = { ...state.exams, ...action.payload.data };
    });
  },
});
export const {
  setUpdateExam,
  addAnswer,
  deleteAnswer,
  updateAnswer,
  updateTitle,
  updateGrade,
  updateSubject,
  updateTime,
  updateAnswerCorretAnswer,
  updateAnswerExplain,
  updateAnswerQuestionLevel,
  updateAnswerTitle,
  deleteAnswerCorretAnswer,
  examList,
} = examSlice.actions;
export default examSlice.reducer;
export const selectExam = (state: RootState) => state.exam.exam;
export const selectExams = (state: RootState) => state.exam.exams;
