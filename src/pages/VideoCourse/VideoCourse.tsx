import React, { useEffect, useState } from "react";
import Video from "./Video";
import TabOption from "./TabOption";
import VideoCourseList from "./VideoCourseList";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appHooks";
import { getCourseDetail } from "../../store/actions/course.action";
import { useSelector } from "react-redux";
import { selectCourseDetail } from "../../store/reducers/courseSlice";

const VideoCourse = () => {
  const { idcourse } = useParams();
  const search = useLocation().search;
  const params = new URLSearchParams(search).get("slug");
  const dispatch = useAppDispatch();
  // const [courseDetail, setCourseDetail] = useState<any>({});
  const courseDetail = useSelector(selectCourseDetail);
  const getDetailCourse = async (id: any) => {
    const res: any = await dispatch(getCourseDetail(id));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      // setCourseDetail(res?.payload.data);
    }
  };
  useEffect(() => {
    if (idcourse) {
      getDetailCourse(idcourse);
    }
  }, [idcourse]);
  return (
    <div className="pt-[100px] pb-[60px] px-[24px] text-[#272829]">
      <div className="grid grid-cols-[1fr_350px]">
        <div className="flex flex-col gap-y-2">
          <Video courseDetail={courseDetail} />
          {params && <TabOption courseDetail={courseDetail} />}
        </div>
        <div className="h-[600px] overflow-y-scroll">
          <VideoCourseList courseDetail={courseDetail} />
        </div>
      </div>
    </div>
  );
};

export default VideoCourse;
