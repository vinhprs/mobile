import { getDetailQuiz, getQuiz, getQuizzByLecture } from '../actions/quiz.action';
import { RootState } from './rootReducers';
import { createSlice } from '@reduxjs/toolkit';
const initState={
  quiz:{
    questions:[
      {
        title:'',
        answers:['','','',''],
        correctAnswers:[],
        explain:'',
        questionLevel:'Nhận biết',
        answerType:''
      }
    ],
    title:''
  },
  listQuizs:{},
  detailQuiz:{},
  detailQuizTemp:{
    questions:[
      {
        title:'',
        answers:['','','',''],
        correctAnswers:[],
        explain:'',
        questionLevel:'Nhận biết',
        answerType:''
      }
    ],
    title:''
  },
  quizzLecture:[],
  postQuiz: {
    quizzId: 0,
    answers: [
      {
        questionId: 0,
        answer: [0],
      },
    ],
  },
  resultQuizz:{},
  sortCheckTime:[]
};

const quizSlice = createSlice({
  name:'quiz',
  initialState:initState,
  reducers:{
    setAddQuiz:(state,actions)=>{
      const newArray:any = [...state.quiz.questions,actions.payload];
      state.quiz = {
        ...state.quiz,
        questions: [...state.quiz.questions,actions.payload]
      };
    },
    updateTitle:(state,actions)=>{
      state.quiz = { ...state.quiz,title:actions.payload };
    },
    deleteQuizItem:(state,actions)=>{
      const {quizIndex} = actions.payload;
      state.quiz.questions.splice(quizIndex,1);
    },
    addQuizAnswer:(state,actions)=>{
      const {quizIndex, value}= actions.payload;
      state.quiz.questions[quizIndex].answers.push(value);
    },
    deleteQuizAnswer:(state,actions)=>{
      const {quizIndex,answerIndex} = actions.payload;
      state.quiz.questions[quizIndex].answers.splice(answerIndex,1);
    },
    updateQuizAnswer:(state,actions)=>{
      const {quizIndex, answerIndex,value,title} = actions.payload;
      if(title==='create'){

        state.quiz.questions[quizIndex].answers[answerIndex] = value;
      }else{
        state.detailQuizTemp.questions[quizIndex].answers[answerIndex] = value;

      }
    },
    updateQuizTitle:(state,actions)=>{
      const {quizIndex,value,title}=actions.payload;
      if(title === 'create'){
        state.quiz.questions[quizIndex].title = value;
      }else{
        state.detailQuizTemp.questions[quizIndex].title = value;
      }
    },
    updateQuizExplain:(state,actions)=>{
      const {quizIndex,value} = actions.payload;
      state.quiz.questions[quizIndex].explain = value;
    },
    updateQuizLevel:(state,actions)=>{
      const {quizIndex,value}=actions.payload;
      state.quiz.questions[quizIndex].questionLevel = value;
    },
    updateQuizCorrect:(state:any,actions)=>{
      const { quizIndex, value,title } = actions.payload;
      if(title==='create'){
        state.quiz.questions[quizIndex].correctAnswers.push(value);
        state.quiz.questions[quizIndex].answerType =
          state.quiz.questions[quizIndex].correctAnswers.length === 1
            ? 'Chọn 1'
            : 'Chọn nhiều';
      }else{
        state.detailQuizTemp.questions[quizIndex].correctAnswers.push(value);
        state.detailQuizTemp.questions[quizIndex].answerType =
          state.detailQuizTemp.questions[quizIndex].correctAnswers.length === 1
            ? 'Chọn 1'
            : 'Chọn nhiều';
      }
    },
    updateQuizAnswerType:(state,actions)=>{
      const {quizIndex,value}=actions.payload;
      state.quiz.questions[quizIndex].answerType = value;
    },
    deleteQuizCorrect:(state,actions)=>{
      const {quizIndex,value,title} = actions.payload;
      if(title === 'create'){
        const newArray = state.quiz.questions[quizIndex].correctAnswers.filter((item)=>item!== value);
        state.quiz.questions[quizIndex].correctAnswers = newArray;
        state.quiz.questions[quizIndex].answerType =
          state.quiz.questions[quizIndex].correctAnswers.length === 1
            ? 'Chọn 1'
            : 'Chọn nhiều';
      }else{
        const newArray = state.detailQuizTemp.questions[quizIndex].correctAnswers.filter((item)=>item!== value);
        state.detailQuizTemp.questions[quizIndex].correctAnswers = newArray;
        state.detailQuizTemp.questions[quizIndex].answerType =
          state.detailQuizTemp.questions[quizIndex].correctAnswers.length === 1
            ? 'Chọn 1'
            : 'Chọn nhiều';
      }
    },
    resetCreateQuiz: (state, actions) => {
      state.quiz = actions.payload;
    },

    titleUpdate:(state,actions)=>{
      state.detailQuizTemp = { ...state.detailQuizTemp,title:actions.payload };
    },
    updateAddQuestion:(state,actions)=>{
      const newArray = [...state.detailQuizTemp.questions,actions.payload];
      state.detailQuizTemp.questions = newArray;
    },
    deleteItemQuizUpdate:(state,actions)=>{
      const {quizIndex} = actions.payload;
      state.detailQuizTemp.questions.splice(quizIndex,1);
    },
    explainUpdate:(state,actions)=>{
      const {quizIndex,value} = actions.payload;
      state.detailQuizTemp.questions[quizIndex].explain = value;
    },
    updateQuizTitleQuestion:(state,actions)=>{
      const {quizIndex,value}=actions.payload;
      state.detailQuizTemp.questions[quizIndex].title = value;
    },
    postQuiz:(state,actions)=>{
      state.postQuiz.answers.push(actions.payload);
    },
    postQuizQuestion: (state, actions) => {
      const { questionIndex, questionId, answer, type } = actions.payload;
      state.postQuiz.answers[questionIndex].questionId = questionId;
      if (type === 'Chọn 1') {
        state.postQuiz.answers[questionIndex].answer[0] = answer;
      } else {
        state.postQuiz.answers[questionIndex].answer.push(answer);
      }
    },
    updateArrayQuiz: (state: any, actions: any) => {
      state.postQuiz.answers = state.postQuiz.answers.push(actions.payload);
    },
    updateQuizId:(state,actions)=>{
      state.postQuiz.quizzId = actions.payload;
    },
    updateArrayQuizToPost:(state:any,actions)=>{
      const {length} = actions.payload;
      if(length >1){
        for(let i = 1;i<=length-1;i++){
          state.postQuiz.answers = [...state.postQuiz.answers, {
            questionId: 0,
            answer: [0],
          }];
        }
      }
    },
    resetPostQuiz: (state, actions) => {
      state.postQuiz.answers = [
        {
          questionId: 0,
          answer: [0],
        },
      ];
    },
    getResultQuiz:(state,actions)=>{
      state.resultQuizz = actions.payload;
    },
    updateSortCheckTime:(state,actions)=>{
      state.sortCheckTime = actions.payload;
    },
    updateQuizList:(state,actions)=>{
      state.quizzLecture = actions.payload;
    }
  },
  extraReducers:(buider)=>{
    buider.addCase(getQuiz.fulfilled,(state,actions)=>{
      state.listQuizs = actions.payload?.data;
    });
    buider.addCase(getDetailQuiz.fulfilled,(state,actions)=>{
      state.detailQuiz = actions.payload?.data;
      state.detailQuizTemp = {
        questions:actions.payload?.data.questions,
        title:actions.payload?.data.title
      };
    });
    buider.addCase(getQuizzByLecture.fulfilled,(state,actions)=>{
      state.quizzLecture = actions.payload?.data;
    });
  }
});
export const { updateQuizList,updateSortCheckTime,getResultQuiz,updateArrayQuizToPost,updateQuizId,addQuizAnswer,deleteQuizAnswer,postQuiz,postQuizQuestion,resetPostQuiz,updateArrayQuiz,updateQuizAnswerType,updateQuizLevel,updateQuizTitleQuestion,explainUpdate,updateQuizAnswer,updateQuizTitle,updateQuizExplain, deleteQuizItem,setAddQuiz, updateQuizCorrect, deleteQuizCorrect,updateTitle,resetCreateQuiz, titleUpdate,updateAddQuestion,deleteItemQuizUpdate} = quizSlice.actions;
export default quizSlice.reducer;
export const selectQuiz = (state:RootState)=>state.quiz.quiz;
export const selectListQuizs = (state:RootState)=>state.quiz.listQuizs;
export const selectDetailQuiz = (state:RootState)=>state.quiz.detailQuiz;
export const selectDetailQuizTemp = (state:RootState)=>state.quiz.detailQuizTemp;
export const selectQuizLectureList = (state:RootState)=>state.quiz.quizzLecture; 
export const selectPostQuiz = (state:RootState)=>state.quiz.postQuiz;
export const selectQuizResult = (state:RootState)=>state.quiz.resultQuizz;
export const selectSortTime = (state:RootState)=>state.quiz.sortCheckTime;