import React from "react";
import Google from "./Google";
import Facebook from "./Facebook";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="pt-[140px] pb-[60px] flex justify-center items-center h-full">
      <div>
        <div className="w-[300px] border-b-[1px] border-[#272829] pb-6">
          <h1 className="font-bold text-[24px] mb-5">
            Đăng nhập vào tài khoản PrimeEdu của bạn
          </h1>
          <div className="flex flex-col gap-y-3 mb-5">
            <Google />
            <Facebook />
            <LoginForm />
          </div>
          <div className="flex gap-x-[1px] text-[14px] justify-center">
            <span>Bạn không nhớ mật khẩu?</span>
            <Link
              to="/forgetpassword"
              className="font-semibold underline text-[#8614BC]"
            >
              Quên mật khẩu
            </Link>
          </div>
        </div>
        <div className="flex gap-x-[1px] justify-center py-5 text-[14px]">
          <span>Bạn chưa có tài khoản?</span>
          <Link to="/signup" className="font-semibold underline text-[#8614BC]">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
