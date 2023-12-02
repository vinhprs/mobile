import React from "react";
import { formatNumberMoney } from "../../utils/lib";
import { useNavigate } from "react-router-dom";

const CourseNavbar = ({ cart }: any) => {
  const navigate = useNavigate();
  return (
    <div
      className="grid grid-cols-[80px_1fr] gap-x-3 py-2"
      onClick={() => navigate(`/courses/${cart?._id}`)}
    >
      <img
        className="w-full h-[80px] object-cover"
        src={cart?.thumbnail_url}
        alt="img"
      />
      <div>
        <h1 className="line-clamp-2 text-[#272829] font-semibold">
          {cart?.courseName}
        </h1>
        <span className="text-[12px]">{cart?.courseName.split("-")[1]}</span>
        <div className="text-[12px] font-semibold text-[#272829]">
          {formatNumberMoney(cart?.price)}VND
        </div>
      </div>
    </div>
  );
};

export default CourseNavbar;
