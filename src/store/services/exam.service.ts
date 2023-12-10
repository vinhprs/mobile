import axiosClient from "./axiosClient";
export const examService = {
  createExam: (params: any) => {
    return axiosClient.post(`exam/teacher/create`, params);
  },
  getExam: (params: any) => {
    return axiosClient.get(`exam/teacher/my-exam?${params.toString()}`);
  },
  updateExam: (params: any) => {
    return axiosClient.put(`exam/teacher/update/${params.id}`, params.params);
  },
  deleteExam: (params: any) => {
    return axiosClient.delete(`exam/${params}`);
  },
  getExamDetail: (params: any) => {
    return axiosClient.get(`exam/${params}`);
  },
  postExam: (params: any) => {
    return axiosClient.post(`exam/student/take-exam`, params);
  },
  getRanking: (params: any) => {
    return axiosClient.get(`/exam/ranking?${params.toString()}`);
  },
};
