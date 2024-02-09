import React from 'react';
import Google from './Google';
import Facebook from './Facebook';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import image from '../../image/Login/Illustrations.jpg';
const Login = () => {
  return (
    <div className="pt-[72px] pb-[60px] grid grid-cols-2 h-screen">
      <div className="h-full w-full">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="flex flex-col justify-center items-center text-[#1D2026]">
        <div className="w-[600px] border-b-[1px] border-[#272829] pb-6">
          <h1 className="font-bold text-[24px] mb-5">
            Đăng nhập vào tài khoản PrimeEdu của bạn
          </h1>
          <div className="flex flex-col gap-y-3 mb-5">
            <div className="grid grid-cols-2 gap-x-3">
              <Google />
              <Facebook />
            </div>
            <LoginForm />
          </div>
          <div className="flex gap-x-[1px] text-[14px] justify-center">
            <span>Bạn không nhớ mật khẩu?</span>
            <Link
              to="/forgetpassword"
              className="font-semibold underline text-[#FF6636]"
            >
              Quên mật khẩu
            </Link>
          </div>
        </div>
        <div className="flex gap-x-[1px] justify-center py-5 text-[14px]">
          <span>Bạn chưa có tài khoản?</span>
          <Link to="/signup" className="font-semibold underline text-[#FF6636]">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
