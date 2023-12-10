import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { loginSchema } from "../../schema/schema";
import { useAppDispatch } from "../../hooks/appHooks";
import { login } from "../../store/actions/auth.action";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  updateIsLogged,
  updateUserId,
  updateUserRole,
} from "../../store/reducers/authSlice";
import { LocalStorage } from "../../utils/LocalStorage";
interface LoginProps {
  email: string;
  password: string;
}
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = async (data: LoginProps) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    const response: any = await dispatch(login(payload));
    console.log("🚀 ~ file: LoginForm.tsx:44 ~ onSubmit ~ response:", response);
    if (response.meta.requestStatus === "fulfilled" && response?.payload) {
      if (response?.payload?.response?.data?.statusCode === 401) {
        toast({
          title: "Lỗi đăng nhập",
          description: "Tài khoản của bạn đã bị xóa",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        if (response?.payload?.error === true) {
          toast({
            title: "Lỗi đăng nhập",
            description: response?.payload?.message,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        } else {
          dispatch(updateUserId(response?.payload.data?.infoUser));
          LocalStorage.setUserId(response?.payload.data.infoUser._id);
          dispatch(updateIsLogged(true));
          LocalStorage.setToken(response?.payload.data?.token);
          LocalStorage.setRefreshToken(response?.payload.data?.refreshToken);
          console.log(LocalStorage.getAccessToken());

          toast({
            title: "Đăng nhập thành công",
            description: response?.payload?.message,
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
          setTimeout(() => {
            navigate(-1);
          }, 1500);
        }
      }
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3 mb-3">
          <div>
            <div className="mb-[5px] text-[14px]">Email</div>
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className={`focus:outline-none text-[14px] w-full px-3 py-3 outline-none border-[1px]  ${
                errors.email ? "border-red-500" : "border-[#E9EAF0]"
              } placeholder:text-[#8C94A3] placeholder:font-normal `}
            />
            <span className="text-[12px] text-red-500">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <div className="mb-[5px] text-[14px]">Mật khẩu</div>
            <div
              className={`flex items-center gap-x-2 justify-between w-full px-3 py-3 outline-none border-[1px] ${
                errors.password ? "border-red-500" : "border-[#E9EAF0]"
              }`}
            >
              <input
                {...register("password")}
                type={showPass ? "text" : "password"}
                placeholder="Mật khẩu"
                className="w-full focus:outline-none text-[14px] placeholder:text-[#8C94A3] placeholder:font-normal"
              />
              {showPass ? (
                <AiFillEyeInvisible
                  className={`cursor-pointer text-[20px] ${
                    errors.password ? "text-red-500" : "text-[#272829]"
                  }`}
                  onClick={() => setShowPass(false)}
                />
              ) : (
                <AiFillEye
                  className={`cursor-pointer text-[20px] ${
                    errors.password ? "text-red-500" : "text-[#272829]"
                  }`}
                  onClick={() => setShowPass(true)}
                />
              )}
            </div>
            <span className="text-[12px] text-red-500">
              {errors.password?.message}
            </span>
          </div>
        </div>
        <Button
          _hover={{ bg: "#ff511c" }}
          w="100%"
          bg="#FF6636"
          color="white"
          borderRadius="none"
          type="submit"
          isLoading={isSubmitting}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
