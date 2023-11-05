import axiosClient from "./axiosClient";
export const courseService = {
  createCourse: (params: any) => {
    return axiosClient.post(`course/teacher/create`, params);
  },
  uploadFile: (params: any) => {
    return axiosClient.post("files/upload-single", params);
  },
  getCourseTeacher: (params: any) => {
    return axiosClient.get(`course/teacher/my-course?${params.toString()}`);
  },
  getCourseStudent: (params: any) => {
    return axiosClient.get(`/course?${params.toString()}`);
  },
};
