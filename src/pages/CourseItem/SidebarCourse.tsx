import React, { useState } from "react";
import imgSub from "../../image/Homepage/R.jpeg";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineAssignment } from "react-icons/md";
import { IoIosInfinite } from "react-icons/io";
import { AiOutlineTrophy, AiOutlineClockCircle } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { BsFillBarChartFill, BsPeople, BsFacebook } from "react-icons/bs";
import { SiGoogleclassroom } from "react-icons/si";
import { BiLayer } from "react-icons/bi";
import { FiFileText, FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";
const SidebarCourse = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="w-full shadow-[0px_6px_16px_0px_rgba(0,0,0,0.06)] bg-white border-[1px] border-[#E9EAF0]">
      <div className="py-[24px] divide-y-2">
        <div className="px-[24px] pb-[24px] ">
          <div className="flex justify-between items-center mb-[5px]">
            <h1 className="text-[#1D2026] text-[24px] font-normal">đ296,566</h1>
            <span className="px-[6px] py-[4px] text-[12px] text-[#FF6636] bg-[#FFEEE8] font-medium">
              Toán 12
            </span>
          </div>
          <span className="px-[6px] py-[4px] text-[12px] text-[#342F98] bg-[#EBEBFF] font-medium">
            Thầy Nguyễn Công Chính
          </span>
        </div>
        <div className="px-[24px] py-[24px] text-[14px] flex flex-col gap-y-3">
          <div className="flex justify-between items-center text-[#6E7485]">
            <div className="flex gap-x-1 items-center">
              <AiOutlineClockCircle className=" text-[20px]" />
              <span className="text-[#1D2026]">Tổng thời gian khóa học</span>
            </div>
            <span>5 tháng</span>
          </div>
          <div className="flex justify-between items-center text-[#6E7485]">
            <div className="flex gap-x-1 items-center">
              <BsPeople className=" text-[20px]" />
              <span className="text-[#1D2026]">Tổng số học viên</span>
            </div>
            <span>69,852,855</span>
          </div>
          <div className="flex justify-between items-center text-[#6E7485]">
            <div className="flex gap-x-1 items-center">
              <SiGoogleclassroom className=" text-[20px]" />
              <span className="text-[#1D2026]">Khối</span>
            </div>
            <span>10</span>
          </div>
        </div>
        <div className="px-[24px] py-[24px]">
          {!user ? (
            <Link
              to="/login"
              className="text-center h-[56px] text-white text-[18px] font-semibold bg-[#FF6636] block leading-[56px]"
            >
              Đăng nhập để mua khóa học
            </Link>
          ) : (
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-3">
                <button className="text-center w-full h-[56px] text-white text-[14px] font-semibold bg-[#FF6636] block leading-[56px] hover:bg-[#fb5c2b] transition ease-in-out duration-200">
                  Mua ngay
                </button>
                <button className="text-center w-full h-[56px] text-[#FF6636] text-[14px] font-semibold bg-[#FFEEE8] block leading-[56px] hover:bg-[#fde2d8] transition ease-in-out duration-200">
                  Thêm vào giỏ hàng
                </button>
              </div>
              <button className="text-center w-full border-[1px] border-[#E9EAF0] h-[56px] text-[#4E5566] text-[14px] font-semibold bg-[#fffff] block leading-[56px] hover:bg-[#FF6636] hover:text-white transition ease-in-out duration-200">
                Thêm vào yêu thích
              </button>
            </div>
          )}
        </div>
        <div className="px-[24px] py-[24px] text-[14px] flex flex-col gap-y-2">
          <h1 className="text-[#1D2026] text-[16px] font-medium">
            Khóa học này bao gồm
          </h1>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2">
              <AiOutlineClockCircle className="text-[18px] text-[#FF6636]" />
              <span className="text-[#4E5566]">Truy cập trọn đời</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FiFileText className="text-[18px] text-[#FF6636]" />
              <span className="text-[#4E5566]">
                Tệp bài tập miễn phí và tài nguyên có thể tải xuống
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <BiLayer className="text-[18px] text-[#FF6636]" />
              <span className="text-[#4E5566]">Hoàn toàn 100% trực truyến</span>
            </div>
          </div>
        </div>
        <div className="px-[24px] py-[24px] text-[14px] flex flex-col gap-y-2">
          <h1 className="text-[#1D2026] text-[16px] font-medium">
            Chia sẻ khóa học này
          </h1>
          <div className="flex items-center gap-x-2">
            <div className="flex gap-x-2 items-center bg-[#F5F7FA] text-[#4E5566] px-[20px] py-[12px] w-fit">
              <FiCopy className="text-[18px]" />
              <span>Sao chép link</span>
            </div>
            <div>
              <div className="flex gap-x-2 items-center bg-[#F5F7FA] text-[#4E5566] h-[45px] w-[45px] justify-center ">
                <BsFacebook className="text-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCourse;
