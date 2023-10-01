import React from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { formatNumberMoney } from "../../utils/lib";
import CourseNavbar from "./CourseNavbar";

const Wishlist = () => {
  return (
    <div className="title_learn text-[14px] cursor-pointer relative text-[#272829]">
      <div className="cursor-pointer">
        <FiHeart className="text-[22px]" />
      </div>
      <div className="modal_title_learn absolute top-[100%] right-[50%] w-[300px]  bg-white border-[1px] border-[#272829]">
        <div className="px-3 py-3 flex flex-col items-center text-[#ACADAE]">
          {/* khi nào rỗng thì hiện */}
          {/* <h1>Các khóa học yêu thích đang trống</h1> */}
          <div className="flex flex-col gap-y-1 divide-y-2 max-h-[550px] h-fit overflow-y-scroll">
            <div>
              <CourseNavbar />
              <button className="divide-none w-full py-3 px-2 border-[2px] border-[#272829] text-[#272829] font-semibold hover:bg-[#272829] hover:text-white transition-all ease-in-out duration-300">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div>
              <CourseNavbar />
              <button className="divide-none w-full py-3 px-2 border-[2px] border-[#272829] text-[#272829] font-semibold hover:bg-[#272829] hover:text-white transition-all ease-in-out duration-300">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div>
              <CourseNavbar />
              <button className="divide-none w-full py-3 px-2 border-[2px] border-[#272829] text-[#272829] font-semibold hover:bg-[#272829] hover:text-white transition-all ease-in-out duration-300">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div>
              <CourseNavbar />
              <button className="divide-none w-full py-3 px-2 border-[2px] border-[#272829] text-[#272829] font-semibold hover:bg-[#272829] hover:text-white transition-all ease-in-out duration-300">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
        {/* khi nào rỗng thì hiện */}
        {/* <Link to="" className="px-2 pb-3 text-center w-full block font-medium">
          Khám phá liền
        </Link> */}
      </div>
    </div>
  );
};

export default Wishlist;
