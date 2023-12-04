import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsBarChartFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMessage } from "react-icons/ai";
import { FaLayerGroup } from "react-icons/fa";
import { FiBook, FiSettings } from "react-icons/fi";
import logo from "../../image/Navbar/sidebar.svg";
import { GiTeacher } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
const SidebarAdmin = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (id: string, idUser?: string) => {
    if (idUser) {
      navigate(`/admin/${id}/${idUser}`);
    } else {
      navigate(`/admin/${id}`);
    }
  };
  return (
    <div className="text-[#8C94A3]">
      <div className="py-[12px] border-b-[1px] border-[#8C94A3]">
        <img src={logo} alt="" />
      </div>
      <div className="py-[12px]">
        <div
          onClick={() => handleNavigate("student")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("student") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <PiStudent className="text-[18px]" />
          <span>Tài khoản các học sinh</span>
        </div>
        <div
          onClick={() => handleNavigate("teacher")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes("teacher") === true
              ? "bg-[#FF6636] text-white"
              : ""
          }`}
        >
          <GiTeacher className="text-[18px]" />
          <span>Tài khoản các giáo viên</span>
        </div>
        <div
          // onClick={() => handleNavigate("dashboard")}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] `}
        >
          <CiLogout className="text-[18px]" />
          <span>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
