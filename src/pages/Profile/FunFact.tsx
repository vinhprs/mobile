import React, { useEffect } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { selectUserCourse } from "../../store/reducers/courseSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { getCourseUserBuy } from "../../store/actions/course.action";
const FunFact = () => {
  const userCourse = useSelector(selectUserCourse);
  const dispatch = useAppDispatch();
  const getUserCourseDetail = async () => {
    const res = await dispatch(getCourseUserBuy({}));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      console.log(res);
    }
  };
  useEffect(() => {
    getUserCourseDetail();
  }, []);
  return (
    <div className="flex gap-x-[24px] justify-between mb-[40px]">
      <div className="flex p-[24px] bg-[#FFEEE8] w-full gap-x-[24px] items-center">
        <div className="w-[48px] h-[48px] flex justify-center items-center bg-white">
          <TbPlayerPlayFilled className="text-[#FF6636] text-[30px] border-[2px] border-[#FF6636] rounded-full p-[5px]" />
        </div>
        <div>
          <h1 className="text-[24px] text-[#1D2026]">{userCourse.length}</h1>
          <span className="text-[14px] text-[#4E5566]">Khoá học</span>
        </div>
      </div>
      {/* <div className="flex p-[24px] bg-[#EBEBFF] w-full gap-x-[24px] items-center">
        <div className="w-[48px] h-[48px] flex justify-center items-center bg-white">
          <TbPlayerPlayFilled className="text-[#564FFD] text-[30px] border-[2px] border-[#564FFD] rounded-full p-[5px]" />
        </div>
        <div>
          <h1 className="text-[24px] text-[#1D2026]">6</h1>
          <span className="text-[14px] text-[#4E5566]">Active Courses</span>
        </div>
      </div> */}
    </div>
  );
};

export default FunFact;
