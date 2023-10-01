import React from "react";
import { formatNumberMoney } from "../../utils/lib";

const CourseNavbar = () => {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-x-3 py-2">
      <img
        className="w-full h-[80px] object-cover"
        src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="img"
      />
      <div>
        <h1 className="line-clamp-2 text-[#272829] font-semibold">
          The Complete JavaScript Course 2023: From Zero to Expert!
        </h1>
        <span className="text-[12px]">Nguyễn Chí Công</span>
        <div className="text-[12px] font-semibold text-[#272829]">
          {formatNumberMoney(1900000)}Đ
        </div>
      </div>
    </div>
  );
};

export default CourseNavbar;
