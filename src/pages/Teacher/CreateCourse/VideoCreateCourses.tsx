import React from "react";
import FormCreateVideo from "./FormCreateVideo";

const VideoCreateCourses = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-[40px] py-[24px] border-b-[1px] border-[] shadow-[0px_-1px_0px_0px_#E9EAF0]">
        <h1 className="font-semibold text-[24px] text-[#1D2026]">
          Video khóa học
        </h1>
        <div className="flex gap-x-3 text-[#FF6636] text-[14px]">
          <button className="h-[48px] px-[24px] bg-[#FFEEE8]">Hủy bỏ</button>
          <button className="h-[48px] px-[24px]">Xem lại</button>
        </div>
      </div>
      <div className="px-[40px] py-[32px]">
        <FormCreateVideo />
      </div>
    </div>
  );
};

export default VideoCreateCourses;
