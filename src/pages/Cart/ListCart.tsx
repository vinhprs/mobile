import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { formatNumberMoney } from "../../utils/lib";
const ListCart = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-[20px] font-semibold">
        Có 2 khóa học trong giỏ hàng
      </h2>
      <div className="w-full h-[1px] bg-[#ACADAE]"></div>
      <div className="divide-y-2">
        <div className="grid grid-cols-[1fr_150px_100px] py-2">
          <div className="flex gap-x-3">
            <img
              src="https://images.pexels.com/photos/17102321/pexels-photo-17102321/free-photo-of-n-ng-k-ngh-nh-ng-ng-i-dan-ba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
              className="w-[90px] h-[90px] object-cover"
            />
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold line-clamp-1">
                The Complete JavaScript Course 2023: From Zero to Expert!
              </h1>
              <div className="flex gap-x-2 text-[12px] items-center">
                <span>By Jonas Schmedtmann</span>
                <span className="font-semibold px-3 py-1 bg-[#ECEB98]">
                  Bestseller
                </span>
              </div>
              <div className="text-[13px] flex gap-x-2 items-center font-light">
                <span>68.5 tổng thời gian</span>
                <div className="w-[5px] h-[5px] rounded-full bg-[#61677A]"></div>
                <span>499 bài học</span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-1">
            <span className="text-[#FF6636] font-semibold text-[20px]">
              {formatNumberMoney(2499000)}Đ
            </span>
            <span className="text-[#FF6636] mt-1">
              <BiSolidPurchaseTag />
            </span>
          </div>
          <div className="cursor-pointer w-[35px] h-[35px] rounded-full border-[1px] border-[#272829] bg-white flex justify-center items-center text-right mx-auto hover:bg-[#FF6636] hover:border-none hover:text-white transition-all ease-in-out duration-200">
            <BsTrashFill className="" />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_150px_100px] py-2">
          <div className="flex gap-x-3">
            <img
              src="https://images.pexels.com/photos/17102321/pexels-photo-17102321/free-photo-of-n-ng-k-ngh-nh-ng-ng-i-dan-ba.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="img"
              className="w-[90px] h-[90px] object-cover"
            />
            <div className="flex flex-col gap-y-2">
              <h1 className="font-semibold line-clamp-1">
                The Complete JavaScript Course 2023: From Zero to Expert!
              </h1>
              <div className="flex gap-x-2 text-[12px] items-center">
                <span>By Jonas Schmedtmann</span>
                <span className="font-semibold px-3 py-1 bg-[#ECEB98]">
                  Bestseller
                </span>
              </div>
              <div className="text-[13px] flex gap-x-2 items-center font-light">
                <span>68.5 tổng thời gian</span>
                <div className="w-[5px] h-[5px] rounded-full bg-[#61677A]"></div>
                <span>499 bài học</span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-1">
            <span className="text-[#FF6636] font-semibold text-[20px]">
              {formatNumberMoney(2499000)}Đ
            </span>
            <span className="text-[#FF6636] mt-1">
              <BiSolidPurchaseTag />
            </span>
          </div>
          <div className="cursor-pointer w-[35px] h-[35px] rounded-full border-[1px] border-[#272829] bg-white flex justify-center items-center text-right mx-auto hover:bg-[#FF6636] hover:border-none hover:text-white transition-all ease-in-out duration-200">
            <BsTrashFill className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCart;
