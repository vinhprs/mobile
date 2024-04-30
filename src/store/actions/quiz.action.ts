import { createAsyncThunk } from '@reduxjs/toolkit';
import { quizService } from '../services/quiz.service';
export const getQuiz = createAsyncThunk(
  'quiz/getQuiz',
  async (params:any, {dispatch,getState,rejectWithValue})=>{
    try{
      const res = await quizService.getQuiz(params);
      return res;
    }catch(err){
      rejectWithValue(err);
    }
  }
);
export const deleteQuiz = createAsyncThunk(
  'quiz/deleteQuiz',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await quizService.deleteQuiz(params);
      return res;
    }catch(err){
      rejectWithValue(err);
    }
  }
);
export const getDetailQuiz = createAsyncThunk(
  'quiz/getDetailQuiz',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await quizService.getDetailQuiz(params);
      return res;
    }catch(err){
      rejectWithValue(err);
    }
  }
);
export const createQuiz = createAsyncThunk(
  'quiz/createQuiz',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await quizService.createQuiz(params);
      return res;
    }catch(err){
      rejectWithValue(err);
    }
  }
);
export const updateQuiz = createAsyncThunk(
  'quiz/updateQuiz',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await quizService.updateQuiz(params);
      return res;
    }catch(err){
      rejectWithValue(err);
    }
  }
);
export const getQuizzByLecture = createAsyncThunk(
  'quiz/getQuizzByLecture',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await quizService.getQuizzByLecture(params);
      return res;
    }catch(err){
      rejectWithValue(err);
    }
  }
);
export const postQuizExam = createAsyncThunk(
  'quiz/postQuizExam',
  async(params:any,{dispatch,getState,rejectWithValue})=>{
    try{
      const res = await quizService.postQuizExam(params);
      return res;
    }catch(err){
      rejectWithValue(err);
    }
  }
);