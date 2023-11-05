import { Button, useToast } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { otpSignupSchema } from "../../schema/schema";
import { useSelector } from "react-redux";
import {
  selectAuthUserId,
  updateIsLogged,
} from "../../store/reducers/authSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { verifyEmail } from "../../store/actions/auth.action";
interface OTPProps {
  otp: string;
}
const Otp = () => {
  const selectUserId = useSelector(selectAuthUserId);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OTPProps>({
    defaultValues: {
      otp: "",
    },
    resolver: yupResolver(otpSignupSchema),
  });
  console.log(selectUserId);

  const onSubmit = async (data: OTPProps) => {
    const payload = {
      id: selectUserId,
      code: data.otp,
    };
    const response: any = await dispatch(verifyEmail(payload));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      if (response?.payload?.error) {
        toast({
          title: "Lỗi đăng ký",
          description: response?.payload?.message,
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        // console.log(response);
        toast({
          title: "Kích hoạt thành công",
          description: response?.payload?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        dispatch(updateIsLogged(true));
        setTimeout(() => {
          navigate("/signup/user");
        }, 1500);
      }
    }
  };
  return (
    <div className="pt-[140px] pb-[60px] flex justify-center items-center h-full text-[#1D2026]">
      <div>
        <div className="w-[300px] border-b-[1px] border-[#272829] pb-6">
          <h1 className="font-bold text-[24px] mb-5">Nhập mã Otp để đăng ký</h1>
          <div className="flex flex-col gap-y-3 mb-5">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-3 mb-3">
                <div>
                  <div className="text-[14px] mb-[5px]">Nhập mã OTP</div>
                  <input
                    {...register("otp")}
                    type="text"
                    placeholder="Otp"
                    className={`focus:outline-none text-[14px] w-[300px] px-3 py-3 outline-none border-[1px] ${
                      errors.otp ? "border-red-500" : "border-[#E9EAF0]"
                    } placeholder:text-[#8C94A3] placeholder:font-normal `}
                  />
                  <span className="text-[12px] text-red-500">
                    {errors.otp?.message}
                  </span>
                </div>
                <Button
                  _hover={{ bg: "#ff5a28" }}
                  w="300px"
                  bg="#FF6636"
                  color="white"
                  borderRadius="none"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Xác nhận
                </Button>
              </div>
            </form>
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

export default Otp;
