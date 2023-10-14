import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
const FunFact = () => {
  return (
    <div className="flex gap-x-[24px] justify-between mb-[40px]">
      <div className="flex p-[24px] bg-[#FFEEE8] w-full gap-x-[24px] items-center">
        <div className="w-[48px] h-[48px] flex justify-center items-center bg-white">
          <TbPlayerPlayFilled className="text-[#FF6636] text-[30px] border-[2px] border-[#FF6636] rounded-full p-[5px]" />
        </div>
        <div>
          <h1 className="text-[24px] text-[#1D2026]">957</h1>
          <span className="text-[14px] text-[#4E5566]">Enroll Courses</span>
        </div>
      </div>
      <div className="flex p-[24px] bg-[#EBEBFF] w-full gap-x-[24px] items-center">
        <div className="w-[48px] h-[48px] flex justify-center items-center bg-white">
          <TbPlayerPlayFilled className="text-[#564FFD] text-[30px] border-[2px] border-[#564FFD] rounded-full p-[5px]" />
        </div>
        <div>
          <h1 className="text-[24px] text-[#1D2026]">6</h1>
          <span className="text-[14px] text-[#4E5566]">Active Courses</span>
        </div>
      </div>
      <div className="flex p-[24px] bg-[#E1F7E3] w-full gap-x-[24px] items-center">
        <div className="w-[48px] h-[48px] flex justify-center items-center bg-white">
          <TbPlayerPlayFilled className="text-[#23BD33] text-[30px] border-[2px] border-[#23BD33] rounded-full p-[5px]" />
        </div>
        <div>
          <h1 className="text-[24px] text-[#1D2026]">957</h1>
          <span className="text-[14px] text-[#4E5566]">Enroll Courses</span>
        </div>
      </div>
      <div className="flex p-[24px] bg-[#FFF2E5] w-full gap-x-[24px] items-center">
        <div className="w-[48px] h-[48px] flex justify-center items-center bg-white">
          <TbPlayerPlayFilled className="text-[#FD8E1F] text-[30px] border-[2px] border-[#FD8E1F] rounded-full p-[5px]" />
        </div>
        <div>
          <h1 className="text-[24px] text-[#1D2026]">957</h1>
          <span className="text-[14px] text-[#4E5566]">Enroll Courses</span>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
