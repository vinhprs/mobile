import React from "react";
import logowhite from "../../image/Navbar/logowhite.svg";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#1D2026] grid grid-cols-2 px-[24px] h-full py-[36px] border-t-2 border-[#272829] text-[#8C94A3]">
      <div className="flex flex-col justify-between gap-y-[15px]">
        <img src={logowhite} alt="logo-icon" className="w-[250px]" />
        <div className="flex gap-x-3">
          <div className="text-white w-[50px] h-[50px] bg-[rgba(54,59,71,0.40)] flex justify-center items-center">
            <BsFacebook className="text-[22px]" />
          </div>
          <div className="text-white w-[50px] h-[50px] bg-[rgba(54,59,71,0.40)] flex justify-center items-center">
            <AiOutlineInstagram className="text-[22px]" />
          </div>
          <div className="text-white w-[50px] h-[50px] bg-[rgba(54,59,71,0.40)] flex justify-center items-center">
            <FaTwitter className="text-[22px]" />
          </div>
        </div>
        <div className="flex gap-x-2">
          <Link to="">Điều khoản sử dụng</Link>
          <div className="w-[1px] h-full bg-slate-600"></div>
          <Link to="">Thông báo bảo mật</Link>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-2">
          <div>
            <ul className="flex flex-col gap-y-4">
              <li className="hover:text-white">
                <Link to="">Về chúng tôi</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Liên hệ</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Giúp dỡ và hỗ trợ</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Các điều khoản và chính sách</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-y-4">
              <li className="hover:text-white">
                <Link to="">Các khóa học</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Các khóa học yêu thích</Link>
              </li>
              <li className="hover:text-white">
                <Link to="">Các khóa học nổi bật</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-right font-semibold">© 2023 PrimeEdu, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
