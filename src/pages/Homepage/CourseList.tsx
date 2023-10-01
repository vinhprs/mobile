import React from "react";
import img from "../../image/Homepage/R.jpeg";
const CourseList = () => {
  return (
    <div className="text-[#272829] cursor-pointer shadow-[-1px_0px_14px_-5px_rgba(0,0,0,0.66)]">
      <div className="w-full h-[150px]">
        <img src={img} alt="img" className="h-full w-full object-cover" />
      </div>
      <div className="px-2 py-3">
        <h1 className="text-[16px] font-semibold">Toán 12</h1>
        <p className="text-[14px] text-[#61677A] font-medium mb-3">
          Thầy Nguyễn Công Chính
        </p>
        <div className="flex items-center gap-x-2 text-[14px]">
          <span className="text-[14px] text-[#61677A]">Price: 4600</span>
          <div className="px-3 py-2 bg-[#ECEB98] w-fit font-medium">
            Best seller
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
