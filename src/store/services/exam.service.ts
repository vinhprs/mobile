import axiosClient from "./axiosClient";
export const examService = {
  createExam: (params: any) => {
    return axiosClient.post(`exam/teacher/create`, params);
  },
  getExam: (params: any) => {
    return axiosClient.get(`exam/teacher/my-exam?${params.toString()}`);
  },
  updateExam: (params: any, id: any) => {
    return axiosClient.put(`exam/teacher/update/${id}`, params);
  },
  deleteExam: (params: any) => {
    return axiosClient.delete(`exam/${params}`);
  },
  getExamDetail: (params: any) => {
    return axiosClient.get(`exam/${params}`);
  },
};
