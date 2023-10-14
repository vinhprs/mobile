import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [checkNewPass, setCheckNewPass] = useState(false);
  const showOldPass = () => {
    setOldPassword(!oldPassword);
  };
  const showNewPass = () => {
    setNewPassword(!newPassword);
  };
  const showCheckNewPass = () => {
    setCheckNewPass(!checkNewPass);
  };
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-[#1D2026] text-[24px] font-semibold">
        Thay đổi mật khẩu
      </h1>
      <div className="w-[500px]">
        <form className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] text-[#1D2026]">
              Mật khẩu hiện tại
            </span>
            <div className="flex items-center gap-x-3 border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]">
              <input
                type={oldPassword ? "text" : "password"}
                className="w-full focus:outline-none "
              />
              {oldPassword ? (
                <AiFillEyeInvisible
                  className="cursor-pointer text-[20px] text-[#4E5566]"
                  onClick={showOldPass}
                />
              ) : (
                <AiFillEye
                  className="cursor-pointer text-[20px] text-[#4E5566]"
                  onClick={showOldPass}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] text-[#1D2026]">Mật khẩu mới</span>
            <div className="flex items-center gap-x-3 border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]">
              <input
                type={newPassword ? "text" : "password"}
                className="w-full focus:outline-none "
              />
              {newPassword ? (
                <AiFillEyeInvisible
                  className="cursor-pointer text-[20px] text-[#4E5566]"
                  onClick={showNewPass}
                />
              ) : (
                <AiFillEye
                  className="cursor-pointer text-[20px] text-[#4E5566]"
                  onClick={showNewPass}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] text-[#1D2026]">
              Nhập lại mật khẩu mới
            </span>
            <div className="flex items-center gap-x-3 border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]">
              <input
                type={checkNewPass ? "text" : "password"}
                className="w-full focus:outline-none "
              />
              {checkNewPass ? (
                <AiFillEyeInvisible
                  className="cursor-pointer text-[20px] text-[#4E5566]"
                  onClick={showCheckNewPass}
                />
              ) : (
                <AiFillEye
                  className="cursor-pointer text-[20px] text-[#4E5566]"
                  onClick={showCheckNewPass}
                />
              )}
            </div>
          </div>
          <Button bg="#FF6636" color="white" _hover={{ bg: "#fc5b2a" }}>
            Thay đổi mật khẩu
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
