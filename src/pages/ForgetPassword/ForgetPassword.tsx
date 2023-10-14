import { Button, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { emailForgetPasswordScheme } from "../../schema/schema";
import { useAppDispatch } from "../../hooks/appHooks";
import { forgetPassword } from "../../store/actions/auth.action";
import { LocalStorage } from "../../utils/LocalStorage";
import { updateUserId } from "../../store/reducers/authSlice";
interface ForgetPasswordProps {
  emailForgetPassword: string;
}
const ForgetPassword = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgetPasswordProps>({
    defaultValues: {
      emailForgetPassword: "",
    },
    resolver: yupResolver(emailForgetPasswordScheme),
  });
  const onSubmit = async (data: ForgetPasswordProps) => {
    const payload = {
      email: data.emailForgetPassword,
    };
    const response: any = await dispatch(forgetPassword(payload));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      if (response?.payload?.error) {
        toast({
          title: "Lỗi",
          description: response?.payload?.message,
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: "Thành công",
          description: response?.payload?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        dispatch(updateUserId(response?.payload?.data?._id));
        setTimeout(() => {
          navigate("/forgetpassword/otp");
        }, 1500);
      }
    }
  };
  return (
    <div className="pt-[140px] pb-[60px] flex justify-center items-center h-full">
      <div>
        <div className="w-[300px] border-b-[1px] border-[#272829] pb-6">
          <h1 className="font-bold text-[24px] mb-5">Quên mật khẩu</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                {...register("emailForgetPassword")}
                type="text"
                placeholder="Email"
                className={`focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] ${
                  errors.emailForgetPassword
                    ? "border-red-500"
                    : "border-[#272829]"
                } placeholder:text-[#272829] placeholder:font-semibold `}
              />
              <span className="text-[12px] text-red-500">
                {errors.emailForgetPassword?.message}
              </span>
            </div>
            <Button
              _hover={{ bg: "#5B0E7F" }}
              w="300px"
              bg="#8614BC"
              color="white"
              borderRadius="none"
              isLoading={isSubmitting}
              type="submit"
            >
              Xác nhận
            </Button>
          </form>
        </div>
        <div className="flex gap-x-[1px] justify-center py-5 text-[14px]">
          <span>Bạn đã có tài khoản?</span>
          <Link to="/login" className="font-semibold underline text-[#8614BC]">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
