import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SignupForm from "./SignupForm";
import image from "../../image/Login/Illustrations1.jpg";
const Signup = () => {
  return (
    <div className="pt-[74px] pb-[60px] grid grid-cols-2 h-screen">
      <div className="h-full w-full">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="flex justify-center items-center flex-col text-[#1D2026]">
        <div className="w-[600px] border-b-[1px] border-[#272829] pb-6">
          <h1 className="font-bold text-[24px] mb-5">
            Đăng ký tài khoản PrimeEdu của bạn
          </h1>
          <div className="flex flex-col gap-y-3 mb-5">
            <SignupForm />
          </div>
        </div>
        <div className="flex gap-x-[1px] justify-center py-5 text-[14px]">
          <span>Bạn đã có tài khoản?</span>
          <Link to="/login" className="font-semibold underline text-[#FF6636]">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
