import { Button, Checkbox, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { signupSchema } from "../../schema/schema";
import { useAppDispatch } from "../../hooks/appHooks";
import { signup } from "../../store/actions/auth.action";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../../utils/LocalStorage";
import { updateUserId } from "../../store/reducers/authSlice";
interface SignupProps {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  isAcceptPolicy?: boolean;
  fullname?: string;
}
const SignupForm = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupProps>({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signupSchema),
  });
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  const onSubmit = async (data: SignupProps) => {
    const payload = {
      username: data.username,
      email: data.email,
      password: data.password,
      isAcceptPolicy: isChecked,
      role: 1,
    };
    const response: any = await dispatch(signup(payload));
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
        LocalStorage.setToken(response?.payload?.data?.token);
        LocalStorage.setRefreshToken(response?.payload.data.refreshToken);
        console.log(response.payload.data.infoUser._id);

        dispatch(updateUserId(response.payload.data.infoUser._id));
        // console.log(response);
        toast({
          title: "Đăng ký thành công",
          description: response?.payload?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/signup/otp");
        });
      }
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3 mb-3">
          <div>
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className={`focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] ${
                errors.email ? "border-red-500" : "border-[#272829]"
              } placeholder:text-[#272829] placeholder:font-semibold `}
            />
            <span className="text-[12px] text-red-500">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <input
              {...register("username")}
              type="text"
              placeholder="Username"
              className={`focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] ${
                errors.username ? "border-red-500" : "border-[#272829]"
              } placeholder:text-[#272829] placeholder:font-semibold `}
            />
            <span className="text-[12px] text-red-500">
              {errors.username?.message}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-x-2 justify-between w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829]">
              <input
                {...register("password")}
                type={showPass ? "text" : "password"}
                placeholder="Mật khẩu"
                className={`w-full focus:outline-none border-[1px] ${
                  errors.password ? "border-red-500" : "border-[#272829]"
                } placeholder:text-[#272829] placeholder:font-semibold`}
              />
              {showPass ? (
                <AiFillEyeInvisible
                  className="cursor-pointer text-[20px]"
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <AiFillEye
                  className="cursor-pointer text-[20px]"
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
            <span className="text-[12px] text-red-500">
              {errors.password?.message}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-x-2 justify-between w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829]">
              <input
                {...register("confirmPassword")}
                type={showConfirmPass ? "text" : "password"}
                placeholder="Xác nhận mật khẩu"
                className={`w-full focus:outline-none border-[1px] ${
                  errors.confirmPassword ? "border-red-500" : "border-[#272829]"
                } placeholder:text-[#272829] placeholder:font-semibold`}
              />
              {showConfirmPass ? (
                <AiFillEyeInvisible
                  className="cursor-pointer text-[20px]"
                  onClick={() => setShowConfirmPass(false)}
                />
              ) : (
                <AiFillEye
                  className="cursor-pointer text-[20px]"
                  onClick={() => setShowConfirmPass(true)}
                />
              )}
            </div>
            <span className="text-[12px] text-red-500">
              {errors.confirmPassword?.message}
            </span>
          </div>
        </div>
        <Checkbox
          isChecked={isChecked}
          outline="none"
          colorScheme="purple"
          className="mb-3"
          onChange={handleChecked}
        >
          Tôi chấp nhận mọi điều khoản
        </Checkbox>
        <Button
          isDisabled={!isChecked}
          _hover={{ bg: "#5B0E7F" }}
          w="300px"
          bg="#8614BC"
          color="white"
          borderRadius="none"
          type="submit"
          isLoading={isSubmitting}
        >
          Đăng ký
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
