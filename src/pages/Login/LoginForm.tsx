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
import { updateIsLogged, updateUserId } from "../../store/reducers/authSlice";
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
    if (response.meta.requestStatus === "fulfilled" && response?.payload) {
      if (response?.payload?.error) {
        toast({
          title: "Lỗi đăng nhập",
          description: response?.payload?.message,
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        dispatch(updateIsLogged(true));
        dispatch(updateUserId(response?.payload?.data?.infoUser?._id));

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
          navigate("/");
        }, 1500);
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
              className={`focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px]  ${
                errors.email ? "border-red-500" : "border-[#272829]"
              } placeholder:text-[#272829] placeholder:font-semibold `}
            />
            <span className="text-[12px] text-red-500">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <div
              className={`flex items-center gap-x-2 justify-between w-[300px] px-3 py-3 outline-none border-[1px] ${
                errors.password ? "border-red-500" : "border-[#272829]"
              }`}
            >
              <input
                {...register("password")}
                type={showPass ? "text" : "password"}
                placeholder="Mật khẩu"
                className="w-full focus:outline-none placeholder:text-[#272829] placeholder:font-semibold"
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
          _hover={{ bg: "#5B0E7F" }}
          w="300px"
          bg="#8614BC"
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
