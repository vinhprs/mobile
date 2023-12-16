import { Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { changePassSchema } from "../../schema/schema";
import { useAppDispatch } from "../../hooks/appHooks";
import { changePassword } from "../../store/actions/auth.action";
import { useToast } from "@chakra-ui/react";

interface ChangPassProps {
  current: string;
  new: string;
  newConfirm: string;
}
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [checkNewPass, setCheckNewPass] = useState(false);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ChangPassProps>({
    defaultValues: {
      current: "",
      new: "",
      newConfirm: "",
    },
    resolver: yupResolver(changePassSchema),
  });
  const showOldPass = () => {
    setOldPassword(!oldPassword);
  };
  const showNewPass = () => {
    setNewPassword(!newPassword);
  };
  const showCheckNewPass = () => {
    setCheckNewPass(!checkNewPass);
  };
  const onSubmit = async (data: ChangPassProps) => {
    const payload = {
      password: data.current,
      newPassword: data.new,
    };
    const res: any = await dispatch(changePassword(payload));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      toast({
        title: res?.payload.message,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      setValue("current", "");
      setValue("new", "");
      setValue("newConfirm", "");
    }
  };
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-[#1D2026] text-[24px] font-semibold">
        Thay đổi mật khẩu
      </h1>
      <div className="w-[500px]">
        <form
          className="flex flex-col gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] text-[#1D2026]">
              Mật khẩu hiện tại
            </span>
            <div className="flex items-center gap-x-3 border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]">
              <input
                {...register("current")}
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
            {errors.current && (
              <span className="text-[14px] text-red-500">
                {errors.current.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] text-[#1D2026]">Mật khẩu mới</span>
            <div className="flex items-center gap-x-3 border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]">
              <input
                {...register("new")}
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
            {errors.new && (
              <span className="text-[14px] text-red-500">
                {errors.new.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] text-[#1D2026]">
              Nhập lại mật khẩu mới
            </span>
            <div className="flex items-center gap-x-3 border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]">
              <input
                {...register("newConfirm")}
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
            {errors.newConfirm && (
              <span className="text-[14px] text-red-500">
                {errors.newConfirm.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            isLoading={isSubmitting}
            bg="#FF6636"
            color="white"
            _hover={{ bg: "#fc5b2a" }}
          >
            Thay đổi mật khẩu
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
