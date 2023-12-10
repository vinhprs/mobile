import React from "react";
import teacher from "../../image/Course/teacher.png";
import { AiFillStar } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import parse from "html-react-parser";
const CourseTitle = ({ courseDetail }: any) => {
  return (
    <div className="flex flex-col gap-y-5 text-[#1D2026]">
      <h1 className="text-[32px] font-semibold">{courseDetail?.courseName}</h1>
      <div className="flex items-center gap-x-3">
        <img
          src={courseDetail?.thumbnail_url}
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
        <div>
          <span className="text-[14px] text-[#6E7485]">Được tạo bởi:</span>
          <div className="text-[14px] text-[#1D2026] font-medium">
            {courseDetail?.courseName?.split("-")[1]}
          </div>
        </div>
      </div>
      <img src={courseDetail?.thumbnail_url} alt="" className="object-cover" />
      <div>
        <h1 className="text-[#1D2026] text-[24px] font-semibold">
          Mô tả khóa học
        </h1>
        <div className="text-[14px] text-[#4E5566]">
          {courseDetail?.description?.toString()?.includes("<p>")
            ? parse(courseDetail?.description)
            : courseDetail?.description}
        </div>
      </div>
      <div className="p-[40px] bg-[#E1F7E3]/40">
        <h1 className="text-[#1D2026] text-[24px] font-semibold mb-[20px]">
          Bạn sẽ được học những gì từ khóa học này
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-x-2">
            <BsFillCheckCircleFill className="text-[20px] w-[60px] text-[#23BD33]" />
            <span className="text-[#4E5566] text-[14px]">
              You will learn how to design beautiful websites using Figma, an
              interface design tool used by designers at Uber, Airbnb and
              Microsoft.
            </span>
          </div>
          <div className="flex gap-x-2">
            <BsFillCheckCircleFill className="text-[20px] w-[60px] text-[#23BD33]" />
            <span className="text-[#4E5566] text-[14px]">
              You will learn how to design beautiful websites using Figma, an
              interface design tool used by designers at Uber, Airbnb and
              Microsoft.
            </span>
          </div>
          <div className="flex gap-x-2">
            <BsFillCheckCircleFill className="text-[20px] w-[60px] text-[#23BD33]" />
            <span className="text-[#4E5566] text-[14px]">
              You will learn how to design beautiful websites using Figma, an
              interface design tool used by designers at Uber, Airbnb and
              Microsoft.
            </span>
          </div>
          <div className="flex gap-x-2">
            <BsFillCheckCircleFill className="text-[20px] w-[60px] text-[#23BD33]" />
            <span className="text-[#4E5566] text-[14px]">
              You will learn how to design beautiful websites using Figma, an
              interface design tool used by designers at Uber, Airbnb and
              Microsoft.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
