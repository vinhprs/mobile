import React, { ReactNode } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { LocalStorage } from '../../utils/LocalStorage';
import { useSelector } from 'react-redux';
import { selectCourseDetail } from '../../store/reducers/courseSlice';
interface RequireAuthProps {
  children: React.ReactNode;
  redirectTo: string;
}
const RequireVideo = ({ children, redirectTo }: RequireAuthProps) => {
  const courseDetail: any = useSelector(selectCourseDetail);
  const { idcourse } = useParams();
  return courseDetail?.isPaid ? (
    children
  ) : (
    <Navigate to={`${redirectTo}/${idcourse}`} />
  );
};

export default RequireVideo;
