import { Button } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Otp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });
  return (
    <div className="pt-[140px] pb-[60px] flex justify-center items-center h-full">
      <div>
        <div className="w-[300px] border-b-[1px] border-[#272829] pb-6">
          <h1 className="font-bold text-[24px] mb-5">Nhập mã Otp để đăng ký</h1>
          <div className="flex flex-col gap-y-3 mb-5">
            <form action="">
              <div className="flex flex-col gap-y-3 mb-3">
                <input
                  {...register("otp")}
                  type="text"
                  placeholder="Otp"
                  className="focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold "
                />
                <Button
                  _hover={{ bg: "#5B0E7F" }}
                  w="300px"
                  bg="#8614BC"
                  color="white"
                  borderRadius="none"
                >
                  Xác nhận
                </Button>
              </div>
            </form>
          </div>
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

export default Otp;
