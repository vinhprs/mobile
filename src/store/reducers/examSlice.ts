import { RootState } from './rootReducers';
import { createSlice } from '@reduxjs/toolkit';
import { getExam, getExamDetail, getRanking } from '../actions/exam.action';
import { getCategory, getCategoryById } from '../actions/user.action';
const initialState = {
  exam: {
    questions: [
      {
        title: '',
        answers: ['', '', '', ''],
        correctAnswers: [],
        explain: '',
        questionLevel: 'Nhận biết',
        answerType: '',
      },
    ],
    title: '',
    categoryId: 0,
    subCategoryId: 0,
    time: 0,
  },
  examTemp: {
    questions: [
      {
        title: '',
        answers: ['', '', '', ''],
        correctAnswers: [],
        explain: '',
        questionLevel: 'Nhận biết',
        answerType: '',
      },
    ],
    title: '',
    categoryId: 0,
    subCategoryId: 0,
    time: 0,
  },
  postExam: {
    completeTime: 0,
    examId: 0,
    answers: [
      {
        questionId: 0,
        answer: [0],
      },
    ],
  },
  exams: {},
  examDetail: {},
  categories: [],
  categoryById: {},
  resultExam: {},
  timeStop: false,
  time: 0,
  ranking: {},
};
const examSlice = createSlice({
  name: 'exam',
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
    setAddUpdateExam(state, actions) {
      const newArray: any = [...state.exam.questions, actions.payload];
      console.log(newArray);
      state.examTemp = {
        ...state.examTemp,
        questions: [...state.examTemp.questions, actions.payload],
      };
    },
    deleteQuestion: (state, actions) => {
      const { questionIndex,type } = actions.payload;
      if(type==='create'){
        state.exam.questions.splice(questionIndex, 1);
      }else{
        state.examTemp.questions.splice(questionIndex, 1);

      }
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
      const { questionIndex, answerIndex, value,type } = action.payload;
      if(type === 'create'){

        state.exam.questions[questionIndex].answers[answerIndex] = value;
      }else{
        state.examTemp.questions[questionIndex].answers[answerIndex] = value;
      }
    },
    updateAnswerTitle: (state, action) => {
      const { questionIndex, value,type } = action.payload;
      if(type === 'create'){
        state.exam.questions[questionIndex].title = value;
      }else{
        state.examTemp.questions[questionIndex].title = value;
      }
    },
    updateAnswerExplain: (state, action) => {
      const { questionIndex, value,type } = action.payload;
      if(type === 'create'){
        state.exam.questions[questionIndex].explain = value;
      }else{
        state.examTemp.questions[questionIndex].explain = value;
      }
    },
    updateAnswerQuestionLevel: (state, action) => {
      const { questionIndex, value, type } = action.payload;
      if(type === 'create'){
        state.exam.questions[questionIndex].questionLevel = value;
      }else{
        state.examTemp.questions[questionIndex].questionLevel = value;
      }
    },
    updateAnswerCorretAnswer: (state: any, action) => {
      const { questionIndex, value,type } = action.payload;
      if(type === 'create'){
        state.exam.questions[questionIndex].correctAnswers.push(value);
        state.exam.questions[questionIndex].answerType =
          state.exam.questions[questionIndex].correctAnswers.length === 1
            ? 'Chọn 1'
            : 'Chọn nhiều';
      }else{
        state.examTemp.questions[questionIndex].correctAnswers.push(value);
        state.examTemp.questions[questionIndex].answerType =
          state.examTemp.questions[questionIndex].correctAnswers.length === 1
            ? 'Chọn 1'
            : 'Chọn nhiều';
      }
    },
    updateAnswerType: (state, actions) => {
      const { questionIndex, value } = actions.payload;
      state.exam.questions[questionIndex].answerType = value;
    },
    deleteAnswerCorretAnswer: (state, action) => {
      const { questionIndex, value } = action.payload;
      console.log('🚀 ~ file: examSlice.ts:77 ~ value:', value);
      const newArray = state.exam.questions[
        questionIndex
      ].correctAnswers.filter((item) => item !== value);
      console.log('🚀 ~ file: examSlice.ts:81 ~ newArray:', newArray);
      state.exam.questions[questionIndex].correctAnswers = newArray;
      state.exam.questions[questionIndex].answerType =
        state.exam.questions[questionIndex].correctAnswers.length === 1
          ? 'Chọn 1'
          : 'Chọn nhiều';
    },
    updateTitle: (state, actions) => {
      const {value,type} = actions.payload;
      if(type === 'create'){
        state.exam = { ...state.exam, title: value };
      }else{
        state.examTemp = { ...state.examTemp, title: value };

      }
    },
    updateGrade: (state, actions) => {
      const {value,type} = actions.payload;
      if(type==='create'){
        state.exam = { ...state.exam, categoryId: value };
      }else{
        state.examTemp = { ...state.examTemp, categoryId: value };

      }
    },
    updateSubject: (state, actions) => {
      const {value,type} = actions.payload;
      if(type==='create'){
        state.exam = { ...state.exam, subCategoryId: value };
      }else{
        state.examTemp = { ...state.examTemp, subCategoryId: value };
      }
    },
    updateTime: (state, actions) => {
      const {value,type}=actions.payload;
      if(type==='create'){
        state.exam = { ...state.exam, time: value };
      }else{
        state.examTemp = { ...state.examTemp, time: value };
      }
    },

    examList: (state, actions) => {
      state.exams = { ...state.exams, ...actions.payload.data };
    },
    setExamDetail: (state, actions) => {
      state.examDetail = { ...state.examDetail, ...actions.payload };
    },
    postExam: (state, actions) => {
      state.postExam.answers.push(actions.payload);
    },
    postExamQuestion: (state, actions) => {
      const { questionIndex, questionId, answer, type } = actions.payload;
      state.postExam.answers[questionIndex].questionId = questionId;
      if (type === 'Chọn 1') {
        state.postExam.answers[questionIndex].answer[0] = answer;
      } else {
        state.postExam.answers[questionIndex].answer.push(answer);
      }
    },
    resultExamDetail: (state, actions) => {
      state.resultExam = actions.payload;
    },
    resetCreateExam: (state, actions) => {
      state.exam = actions.payload;
    },
    updateArrayPost: (state: any, actions: any) => {
      state.postExam.answers = state.postExam.answers.push(actions.payload);
    },
    updateCompleteTime: (state, actions) => {
      state.postExam.completeTime = actions.payload;
    },
    updateTimeStop: (state, actions) => {
      state.timeStop = actions.payload;
    },
    updateTimeFinish: (state, actions) => {
      state.time = actions.payload;
    },
    resetPostExam: (state, actions) => {
      state.postExam.answers = [
        {
          questionId: 0,
          answer: [0],
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExam.fulfilled, (state, action) => {
      state.exams = action.payload.data;
    });
    builder.addCase(getExamDetail.fulfilled, (state, actions) => {
      state.examDetail = actions.payload.data;
      state.examTemp = actions.payload.data;
    });
    builder.addCase(getCategory.fulfilled, (state: any, actions: any) => {
      state.categories = actions.payload?.data;
    });
    builder.addCase(getCategoryById.fulfilled, (state, actions: any) => {
      state.categoryById = actions.payload?.data;
    });
    builder.addCase(getRanking.fulfilled, (state, actions) => {
      state.ranking = actions.payload.data;
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
  setExamDetail,
  updateAnswerType,
  deleteQuestion,
  postExam,
  postExamQuestion,
  resultExamDetail,
  resetCreateExam,
  updateArrayPost,
  updateCompleteTime,
  updateTimeStop,
  updateTimeFinish,
  resetPostExam,
  setAddUpdateExam
} = examSlice.actions;
export default examSlice.reducer;
export const selectExam = (state: RootState) => state.exam.exam;
export const selectExams = (state: RootState) => state.exam.exams;
export const selectExamDetail = (state: RootState) => state.exam.examDetail;
export const selectCategory = (state: RootState) => state.exam.categories;
export const selectCategoryById = (state: RootState) => state.exam.categoryById;
export const selectExamPost = (state: RootState) => state.exam.postExam;
export const selectResultExam = (state: RootState) => state.exam.resultExam;
export const selectTimeStop = (state: RootState) => state.exam.timeStop;
export const selectTimeFinish = (state: RootState) => state.exam.time;
export const selectRanking = (state: RootState) => state.exam.ranking;
export const selectExamTemp = (state: RootState) => state.exam.examTemp;
