import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
const TitleDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-x-[24px]">
      <div className="flex p-[24px] gap-x-[24px] bg-white w-full">
        <div className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8]">
          <AiOutlinePlayCircle className="text-[25px] text-[#FF6636]" />
        </div>
        <div>
          <h1 className="text-[20px] text-[#1D2026] font-normal">957</h1>
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
          <h1 className="text-[20px] text-[#1D2026] font-normal">957</h1>
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
          <h1 className="text-[20px] text-[#1D2026] font-normal">957</h1>
          <span className="text-[12px] text-[#4E5566] font-normal">
            Học viên
          </span>
        </div>
      </div>
      <div className="flex p-[24px] gap-x-[24px] bg-white w-full">
        <div className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8]">
          <AiOutlinePlayCircle className="text-[25px] text-[#FF6636]" />
        </div>
        <div>
          <h1 className="text-[20px] text-[#1D2026] font-normal">957</h1>
          <span className="text-[12px] text-[#4E5566] font-normal">
            Hoàn thành khóa học
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleDashboard;
