import React from "react";
import img from "../../image/Homepage/R.jpeg";
const CourseList = () => {
  return (
    <div className="text-[#272829] cursor-pointer shadow-[-1px_0px_14px_-5px_rgba(0,0,0,0.66)]">
      <div className="w-full h-[200px]">
        <img src={img} alt="img" className="h-full w-full object-cover" />
      </div>
      <div className="px-4 py-3">
        <div className="flex justify-between items-center mb-[5px]">
          <h1 className="text-[10px] font-medium text-[#993D20] bg-[#FFEEE8] px-[6px] py-[4px]">
            Toán 12
          </h1>
          <span className="text-[#FF6636] text-[16px] font-semibold">
            266,665Đ
          </span>
        </div>
        <p className="text-[12px] text-[#8C94A3] font-medium mb-3">
          Thầy Nguyễn Công Chính
        </p>
        <p className="text-[14px] text-[#1D2026] font-medium mb-3">
          asdjlkakdawdaw kjahwdjkjawnda kjahwkdna kjawhjda khawd{" "}
        </p>
        <div className="flex items-center gap-x-2 text-[14px]">
          <div className="px-3 py-2 bg-[#ECEB98] w-fit font-medium">
            Bán chạy
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
