import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCourseDetail } from "../../../store/reducers/courseSlice";
import { useAppDispatch } from "../../../hooks/appHooks";
import CourseTitle from "../../CourseItem/CourseTitle";
import { getCourseDetail } from "../../../store/actions/course.action";
import TabCourse from "../../CourseItem/TabCourse";
import StudentAssign from "./StudentAssign";
import Topic from "../../CourseItem/Topic";

const TeacherCourseDetail = () => {
  const { id } = useParams();
  const courseDetail = useSelector(selectCourseDetail);
  const dispatch = useAppDispatch();
  const getDetailCourse = async (id: any) => {
    const res: any = await dispatch(getCourseDetail(id));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      //   setLoading(false);
      //   setCourseDetail(res.payload.data);
      console.log(
        "🚀 ~ file: CourseItem.tsx:23 ~ getDetailCourse ~ res.payload.data:",
        res.payload.data
      );
    }
  };
  useEffect(() => {
    // setLoading(true);
    if (id) {
      getDetailCourse(id);
    }
  }, [id]);
  return (
    <div className="max-w-[1000px] p-[24px] w-full mx-auto">
      <div className="text-[#272829] flex flex-col gap-y-5">
        <CourseTitle courseDetail={courseDetail} />
        <Topic courseDetail={courseDetail} />
        <StudentAssign />
      </div>
    </div>
  );
};

export default TeacherCourseDetail;
