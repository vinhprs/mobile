import React, { useState } from "react";
import Logo from "../../../image/Navbar/logo.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Button } from "@chakra-ui/react";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleClick = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="w-screen h-screen bg-[#FF6636] flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-4 w-[500px]">
        <img src={Logo} alt="" />
        <div className="text-[30px] font-semibold text-white">
          Xin chào các thầy/cô giáo. Mời thầy cô đăng nhập
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] font-medium text-white">
              Tên tài khoản
            </span>

            <input
              type="text"
              name=""
              id=""
              className="w-full px-[18px] py-[13px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] font-medium text-white">Mật khẩu</span>
            <div className="flex gap-x-3 bg-white items-center px-[18px] py-[13px]">
              <input
                type={showPass ? "text" : "password"}
                name=""
                id=""
                className="w-full bg-transparent outline-none"
              />
              {showPass ? (
                <AiFillEyeInvisible
                  className="text-[20px] cursor-pointer"
                  onClick={handleClick}
                />
              ) : (
                <AiFillEye
                  className="text-[20px] cursor-pointer"
                  onClick={handleClick}
                />
              )}
            </div>
          </div>
          <Button>Đăng nhập</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
