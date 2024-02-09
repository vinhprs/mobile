import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserCourse } from '../../store/reducers/courseSlice';
import { useAppDispatch } from '../../hooks/appHooks';
import { getCourseUserBuy } from '../../store/actions/course.action';
import { useNavigate } from 'react-router-dom';

const CoursesNewset = () => {
  const userCourse = useSelector(selectUserCourse);
  const dispatch = useAppDispatch();
  const getUserCourseDetail = async () => {
    const res = await dispatch(getCourseUserBuy({}));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      console.log(res);
    }
  };
  useEffect(() => {
    getUserCourseDetail();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-x-[24px]">
      {userCourse.slice(0, 4).map((course: any, index: number) => (
        <div key={course?._id}>
          <div>
            <img
              src={course?.thumbnail_url}
              alt=""
              className="h-[220px] w-full object-cover"
            />
            <div className="p-[16px] h-[100px] flex flex-col gap-y-[6px] bg-white border-[1px] border-[#E9EAF0]">
              <span className="text-[#6E7485] text-[12px] line-clamp-2">
                {course?.courseName.split('-')[0]}
              </span>
              <h1 className="text-[#1D2026] text-[14px] font-medium">
                {course?.courseName}
              </h1>
            </div>
            <div className="p-[16px] border-[1px] border-[#E9EAF0] grid grid-cols-2 items-center">
              <button
                onClick={() => navigate(`/courses/${course?._id}`)}
                className="w-full py-[6px] px-[4px] text-[14px] font-semibold bg-[#FFEEE8] text-[#FF6636]"
              >
                Xem bài giảng
              </button>
              {/* <div className="text-right text-[12px] text-[#23BD33]">
                <span>0</span>% complete
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesNewset;
