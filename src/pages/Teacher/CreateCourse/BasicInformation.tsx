import React from "react";
import FormBasic from "./FormBasic";
import { useNavigate } from "react-router-dom";

const BasicInformation = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/teacher/courses");
  };
  return (
    <div>
      <div className="flex items-center justify-between px-[40px] py-[24px] border-b-[1px] border-[] shadow-[0px_-1px_0px_0px_#E9EAF0]">
        <h1 className="font-semibold text-[24px] text-[#1D2026]">
          Thông tin cơ bản
        </h1>
        <div className="flex gap-x-3 text-[#FF6636] text-[14px]">
          <button
            className="h-[48px] px-[24px] bg-[#FFEEE8]"
            onClick={handleClick}
          >
            Hủy bỏ
          </button>
          {/* <button className="h-[48px] px-[24px]">Xem lại</button> */}
        </div>
      </div>
      <div className="px-[40px] py-[32px]">
        <FormBasic />
      </div>
    </div>
  );
};

export default BasicInformation;
