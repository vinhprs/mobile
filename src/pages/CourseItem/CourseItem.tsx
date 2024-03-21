import React, { useEffect, useState } from 'react';
import SidebarCourse from './SidebarCourse';
import CourseDetail from './CourseDetail';
import TabCourse from './TabCourse';
import { useSelector } from 'react-redux';
import { selectCourseDetail } from '../../store/reducers/courseSlice';
import { useAppDispatch } from '../../hooks/appHooks';
import { getCourseDetail } from '../../store/actions/course.action';
import { useParams } from 'react-router-dom';
import CourseTitle from './CourseTitle';
import { Spinner } from '@chakra-ui/react';

const CourseItem = () => {
  const [loading, setLoading] = useState(false);
  const [courseDetail, setCourseDetail] = useState();

  const dispatch = useAppDispatch();
  const { idcourse } = useParams();
  const getDetailCourse = async (id: any) => {
    const res: any = await dispatch(getCourseDetail(id));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      setLoading(false);
      setCourseDetail(res.payload.data);
      console.log(
        '🚀 ~ file: CourseItem.tsx:23 ~ getDetailCourse ~ res.payload.data:',
        res.payload.data
      );
    }
  };
  useEffect(() => {
    setLoading(true);
    if (idcourse) {
      getDetailCourse(idcourse);
    }
  }, [idcourse]);
  return (
    <div className="pt-[100px] pb-[60px] px-[24px] max-w-[1200px] mx-auto w-full">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner color="#FF6636" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-x-3 gap-y-10">
          <div className="text-[#272829] flex flex-col gap-y-5 order-2 lg:order-1">
            <CourseTitle courseDetail={courseDetail} />
            <TabCourse courseDetail={courseDetail} isShow={true}/>
          </div>
          <div className="shadow-md h-fit order-1 lg:order-2">
            <SidebarCourse
              courseDetail={courseDetail}
              getDetailCourse={getDetailCourse}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseItem;
