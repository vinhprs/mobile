import axiosClient from './axiosClient';
export const commentService = {
  getComment: (params: any) => {
    const { lectureId, queryParam } = params;
    return axiosClient.get(
      `/comments/lecture/${lectureId}?${queryParam.toString()}`
    );
  },
  postComment: (params: any) => {
    return axiosClient.post('/comments', params);
  },
  getCommentCourse: (params: any) => {
    const { courseId, queryParam } = params;
    return axiosClient.get(
      `/comments/course/${courseId}?${queryParam.toString()}`
    );
  },
  getAllCommentTeacherCourse:(params:any)=>{
    return axiosClient.get(`/comments/teacher?${params.toString()}`);
  }
};
