import React, { useState } from "react";
import Logo from "../../../image/Navbar/logo.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/appHooks";
import { loginSchema, loginTeacherSchema } from "../../../schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  updateIsLogged,
  updateUserId,
} from "../../../store/reducers/authSlice";
import { LocalStorage } from "../../../utils/LocalStorage";
import { login } from "../../../store/actions/auth.action";
interface LoginTeacherProps {
  emailteacher: string;
  passwordteacher: string;
}
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [showPass, setShowPass] = useState(false);
  const handleClick = () => {
    setShowPass(!showPass);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginTeacherProps>({
    defaultValues: {
      emailteacher: "",
      passwordteacher: "",
    },
    resolver: yupResolver(loginTeacherSchema),
  });
  const onSubmit = async (data: LoginTeacherProps) => {
    console.log(data);

    const payload = {
      email: data.emailteacher,
      password: data.passwordteacher,
    };
    const response: any = await dispatch(login(payload));
    console.log("🚀 ~ file: Login.tsx:48 ~ onSubmit ~ response:", response);
    if (response.meta.requestStatus === "rejected") {
      toast({
        title: "Lỗi đăng nhập",
        description: response?.payload?.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
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
        // dispatch(updateIsLogged(true));
        // dispatch(updateUserId(response?.payload?.data?.infoUser?._id));
        if (
          response?.payload?.data?.infoUser?.roles?.some(
            (item: any) => item?.id === 3
          )
        ) {
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
            navigate("/teacher/dashboard");
          }, 1500);
        } else {
          toast({
            title: "Lỗi đăng nhập",
            description: "Tài khoản này không phải tài khoản giáo viên",
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });
        }
      }
    }
  };
  return (
    <div className="w-screen h-screen bg-[#FF6636] flex justify-center items-center">
      <form
        className="flex flex-col items-center gap-y-4 w-[500px]"
        onSubmit={handleSubmit(onSubmit)}
      >
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
              {...register("emailteacher")}
              type="text"
              className="w-full px-[18px] py-[13px] outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[14px] font-medium text-white">Mật khẩu</span>
            <div className="flex gap-x-3 bg-white items-center px-[18px] py-[13px]">
              <input
                {...register("passwordteacher")}
                type={showPass ? "text" : "password"}
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
          <Button type="submit">Đăng nhập</Button>
          <Button type="button" onClick={() => navigate("/")}>
            Trở lại trang chủ
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
