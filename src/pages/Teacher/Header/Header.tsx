import React from "react";
import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="p-[24px] max-w-[1000px] mx-auto ">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-medium text-[14px] text-[#6E7485]">
              Chào buổi sáng
            </span>
            <h1 className="font-semibold text-[20px] text-[#FF6636]">Vinh</h1>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#F5F7FA] relative">
              <AiOutlineBell className="text-[21px] text-[#1D2026]" />
              <div className="w-[6px] h-[6px] rounded-full bg-[#FF6636] absolute top-[8px] right-[6px]"></div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/17528251/pexels-photo-17528251/free-photo-of-d-i-n-c-s-a-s-c-d-p-ch-p-nh-d-ng-v-t.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="rounded-full w-[30px] h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
