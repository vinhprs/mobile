import axiosClient from './axiosClient';
export const quizService = {
  getQuiz:(params:any)=>{
    return axiosClient.get(`quizz/teacher/my-quizz?${params.toString()}`);
  },
  deleteQuiz:(params:any)=>{
    return axiosClient.delete(`quizz/${params}`);
  },
  getDetailQuiz:(params:any)=>{
    return axiosClient.get(`quizz/${params}`);
  },
  createQuiz:(params:any)=>{
    return axiosClient.post('quizz/teacher/create',params);
  },
  updateQuiz:(params:any)=>{
    return axiosClient.patch(`quizz/teacher/update/${params.id}`,params.params);
  },
  getQuizzByLecture:(params:any)=>{
    return axiosClient.get(`course/quizz/lecture/${params}`);
  },
  postQuizExam:(params:any)=>{
    return axiosClient.post('course/quizz/take-quizz',params);
  }
};