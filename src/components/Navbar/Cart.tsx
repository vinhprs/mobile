import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatNumberMoney } from "../../utils/lib";
import CourseNavbar from "./CourseNavbar";

const Cart = () => {
  return (
    <div className="title_learn text-[14px] cursor-pointer relative text-[#272829]">
      <div className="cursor-pointer relative">
        <AiOutlineShoppingCart className="text-[22px]" />
        <div className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-full bg-[#8614BC] flex justify-center items-center">
          <span className="text-[10px] text-white font-medium">1</span>
        </div>
      </div>
      <div className="modal_title_learn absolute top-[100%] right-[50%] w-[280px] bg-white border-[1px] border-[#272829]">
        <div className="px-3 py-3 flex flex-col items-center text-[#ACADAE]">
          {/* <h1>Giỏ hàng của bạn đang trống</h1> */}
          <div className="flex flex-col gap-y-1 divide-y-2 max-h-[550px] h-fit overflow-y-scroll">
            <CourseNavbar />
            <CourseNavbar />
            <CourseNavbar />
            <CourseNavbar />
            <CourseNavbar />
            <CourseNavbar />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <h1 className="font-semibold text-[18px] text-[#272829]">
              Tổng tiền: <span>{formatNumberMoney(1900000)}Đ</span>
            </h1>
            <button className="divide-none w-full py-3 px-2 border-[2px] border-[#272829] text-[#272829] font-semibold hover:bg-[#272829] hover:text-white transition-all ease-in-out duration-300">
              Thanh toán
            </button>
          </div>
        </div>
        {/* <Link to="" className="px-2 pb-3 text-center w-full block font-medium">
          Tiếp tục mua khóa học
        </Link> */}
      </div>
    </div>
  );
};

export default Cart;
