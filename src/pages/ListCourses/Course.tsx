import React, { useState } from "react";
import imgSub from "../../image/Homepage/R.jpeg";
import { BsCheck2 } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiOutlineClockCircle } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { formatMoney } from "../../utils/lib";
const Course = ({ item }: any) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigation = useNavigate();
  const pathname = useLocation();
  const handleDetailCourse = () => {
    navigation(`${pathname.pathname}/${item._id}`);
  };
  return (
    <div className="course_re text-[#1D2026]" onClick={handleDetailCourse}>
      <div className="flex">
        <div className="flex gap-x-[15px] flex-1 cursor-pointer">
          <img
            src={item?.thumbnail_url}
            alt=""
            className="w-[250px] h-[180px] object-cover"
          />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-[20px] font-semibold text-[#272829]">
              {item?.courseName}
            </h1>
            <p className="font-normal text-[14px]">{item?.description}</p>
            <div className="flex gap-x-3 items-center">
              <div className="px-[6px] py-[4px] text-[12px] font-medium text-[#993D20] bg-[#FFEEE8] w-fit">
                {item?.category.categoryName}
              </div>
              <p className="text-[12px] font-normal px-[6px] py-[4px] text-[#342F98] bg-[#EBEBFF] w-fit">
                bởi {item?.courseName.split("-")[1]}
              </p>
              {/* <span className="text-[12px] font-normal px-[6px] py-[4px] text-[#15711F] bg-[#E1F7E3] w-fit">
                55 giờ học, 12 chuyên đề
              </span> */}
            </div>
            <div className="flex gap-x-6">
              <div className="flex gap-x-2">
                <BsPeople className="text-[20px] text-[#564FFD]" />
                <span className="text-[14px] font-medium text-[#4E5566]">
                  236{" "}
                  <span className="text-[#8C94A3] font-normal">học sinh</span>
                </span>
              </div>
              <div className="flex gap-x-2">
                <AiOutlineClockCircle className="text-[20px] text-[#23BD33]" />
                <span className="text-[#8C94A3] font-normal text-[14px]">
                  6 giờ học tất cả
                </span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="w-[250px] text-right text-[20px] font-semibold mb-1 text-[#FF6636]">
          {formatMoney(item?.price)}
          <span>VND</span>
        </h1>
      </div>
      {/* <div className="course_ab bg-white w-[400px] z-[2] border-[1px] border-[#272829] shadow-lg p-4">
        <h1 className="text-[18px] font-semibold mb-3 text-[#FF6636]">
          Chúng ta sẽ được học những gì?
        </h1>
        <ul className="flex flex-col gap-y-3 mb-3">
          <li className="grid grid-cols-[30px_1fr] items-center gap-x-3">
            <BsCheck2 className="text-[20px] text-[#FF6636]" />
            <span>
              Learn React from the ground up and finish the course as an
              advanced React developer
            </span>
          </li>
          <li className="grid grid-cols-[30px_1fr] items-center gap-x-3">
            <BsCheck2 className="text-[20px] text-[#FF6636]" />
            <span>
              Build multiple high-quality demo apps, including a fullstack app
              built with NextJS
            </span>
          </li>
          <li className="grid grid-cols-[30px_1fr] items-center gap-x-3">
            <BsCheck2 className="text-[20px] text-[#FF6636]" />
            <span>
              Join more than 750,000 students in this course & more than
              2,500,000 students I taught across all my courses
            </span>
          </li>
        </ul>
        {isSignIn ? (
          <div>
            <div className="grid grid-cols-[1fr_40px] items-center gap-5">
              <button className="w-full bg-[#FF6636] text-center text-white font-semibold px-2 h-[40px]">
                Thêm vào giỏ hàng
              </button>
              <div className="cursor-pointer flex w-[45px] h-[45px] rounded-full border-[1px] border-[#272829] items-center justify-center">
                <AiOutlineHeart className="text-[20px]" />
              </div>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-[#FF6636] w-full block text-center text-white font-semibold px-2 py-2"
          >
            Đăng nhập
          </Link>
        )}
      </div> */}
    </div>
  );
};

export default Course;
