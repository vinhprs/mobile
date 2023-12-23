import React, { useEffect } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { useAppDispatch } from "../../../hooks/appHooks";
import { useSelector } from "react-redux";
import { selectStatusTeacher } from "../../../store/reducers/createCourseSlice";
import { getStatusTeacher } from "../../../store/actions/course.action";
const TitleDashboard = () => {
  const dispatch = useAppDispatch()
  const getStatus:any = useSelector(selectStatusTeacher)
  const getStatusInfo = async()=>{
    const res = await dispatch(getStatusTeacher({}))
    if(res.meta.requestStatus === "fulfilled" && res.payload){
      console.log(res)
    }
  }
  useEffect(()=>{
    getStatusInfo()
  },[])
  return (
    <div className="grid grid-cols-3 gap-x-[24px]">
      <div className="flex p-[24px] gap-x-[24px] bg-white w-full">
        <div className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8]">
          <AiOutlinePlayCircle className="text-[25px] text-[#FF6636]" />
        </div>
        <div>
          <h1 className="text-[20px] text-[#1D2026] font-normal">{getStatus?.total}</h1>
          <span className="text-[12px] text-[#4E5566] font-normal">
            Khóa học
          </span>
        </div>
      </div>
      <div className="flex p-[24px] gap-x-[24px] bg-white w-full">
        <div className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8]">
          <AiOutlinePlayCircle className="text-[25px] text-[#FF6636]" />
        </div>
        <div>
          <h1 className="text-[20px] text-[#1D2026] font-normal">{getStatus?.publicTotal}</h1>
          <span className="text-[12px] text-[#4E5566] font-normal">
            Khóa học được kích hoạt
          </span>
        </div>
      </div>
      <div className="flex p-[24px] gap-x-[24px] bg-white w-full">
        <div className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8]">
          <AiOutlinePlayCircle className="text-[25px] text-[#FF6636]" />
        </div>
        <div>
          <h1 className="text-[20px] text-[#1D2026] font-normal">{getStatus?.totalStudents}</h1>
          <span className="text-[12px] text-[#4E5566] font-normal">
            Học viên
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleDashboard;
