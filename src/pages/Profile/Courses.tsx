import React from 'react';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import Pagination from '../../components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { selectUserCourse } from '../../store/reducers/courseSlice';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const userCourse = useSelector(selectUserCourse);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-semibold text-[24px] text-[#1D2026]">
        Courses ({userCourse?.length})
      </h1>
      <div className="flex flex-col gap-y-4">
        <div className="grid grid-cols-4 gap-x-[24px] gap-y-[12px]">
          {userCourse?.map((course: any, index: number) => (
            <div key={course?._id}>
              <div>
                <img
                  src={course?.thumbnail_url}
                  alt=""
                  className="h-[250px] w-full object-cover"
                />
                <div className="p-[16px] h-[100px] flex flex-col gap-y-[6px] bg-white border-[1px] border-[#E9EAF0]">
                  <span className="text-[#6E7485] text-[12px]">
                    {course?.courseName.split('-')[0]}
                  </span>
                  <h1 className="text-[#1D2026] text-[14px] font-medium line-clamp-2">
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
        {/* <Pagination /> */}
      </div>
    </>
  );
};

export default Courses;
