import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePassSchema } from "../../../schema/schema";
interface ChangPassProps {
  current: string;
  new: string;
  newConfirm: string;
}
const ChangPass = () => {
  const [currentPass, setCurrentPass] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [newPassConfirm, setNewPassConfirm] = useState(false);
  const handleCurrentPass = () => {
    setCurrentPass(!currentPass);
  };
  const handleNewPass = () => {
    setNewPass(!newPass);
  };
  const handleNewPassConfirm = () => {
    setNewPassConfirm(!newPassConfirm);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ChangPassProps>({
    defaultValues: {
      current: "",
      new: "",
      newConfirm: "",
    },
    resolver: yupResolver(changePassSchema),
  });
  const onSubmit = async (data: ChangPassProps) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-y-[24px]">
      <h1 className="text-[#1D2026] text-[24px] font-semibold">
        Thay đổi mật khẩu
      </h1>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col gap-y-[16px]"
        >
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[#1D2026] text-[14px] font-normal">
              Mật khẩu hiện tại
            </span>
            <div className="flex justify-between items-center gap-x-[8px] px-[18px] py-[11px] bg-white  border-[1px] border-[#E9EAF0]">
              <input
                {...register("current")}
                type={currentPass ? "text" : "password"}
                className="outline-none w-full bg-transparent  placeholder:text-[#8C94A3] text-[14px] text-[#1D2026]"
                placeholder="VD:Nguyễn Văn A....."
              />
              {currentPass ? (
                <AiFillEyeInvisible
                  onClick={handleCurrentPass}
                  className="text-[#1D2026] cursor-pointer"
                />
              ) : (
                <AiFillEye
                  onClick={handleCurrentPass}
                  className="text-[#1D2026] cursor-pointer"
                />
              )}
            </div>
            <span className="text-[12px] text-red-500">
              {errors.current?.message}
            </span>
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[#1D2026] text-[14px] font-normal">
              Mật khẩu mới
            </span>
            <div className="flex justify-between items-center gap-x-[8px] px-[18px] py-[11px] bg-white  border-[1px] border-[#E9EAF0">
              <input
                {...register("new")}
                type={newPass ? "text" : "password"}
                className="outline-none w-full bg-transparent  placeholder:text-[#8C94A3] text-[14px] text-[#1D2026]"
                placeholder="VD:Nguyễn Văn A....."
              />
              {newPass ? (
                <AiFillEyeInvisible
                  onClick={handleNewPass}
                  className="text-[#1D2026] cursor-pointer"
                />
              ) : (
                <AiFillEye
                  onClick={handleNewPass}
                  className="text-[#1D2026] cursor-pointer"
                />
              )}
            </div>
            <span className="text-[12px] text-red-500">
              {errors.new?.message}
            </span>
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[#1D2026] text-[14px] font-normal">
              Nhập lại mật khẩu mới
            </span>
            <div className="flex justify-between items-center gap-x-[8px] px-[18px] py-[11px] bg-white  border-[1px] border-[#E9EAF0">
              <input
                {...register("newConfirm")}
                type={newPassConfirm ? "text" : "password"}
                className="outline-none w-full bg-transparent  placeholder:text-[#8C94A3] text-[14px] text-[#1D2026]"
                placeholder="VD:Nguyễn Văn A....."
              />
              {newPassConfirm ? (
                <AiFillEyeInvisible
                  onClick={handleNewPassConfirm}
                  className="text-[#1D2026] cursor-pointer"
                />
              ) : (
                <AiFillEye
                  onClick={handleNewPassConfirm}
                  className="text-[#1D2026] cursor-pointer"
                />
              )}
            </div>
            <span className="text-[12px] text-red-500">
              {errors.newConfirm?.message}
            </span>
          </div>
          <Button
            w="fit-content"
            bg="#FF6636"
            _hover={{ bg: "#f55d2f" }}
            fontSize="14px"
            color="white"
            type="submit"
          >
            Cập nhập mật khẩu
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangPass;
