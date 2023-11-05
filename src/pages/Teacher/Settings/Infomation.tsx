import { Button } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsUpload } from "react-icons/bs";

interface AccountSetting {
  imgUrl: string;
  fullName: string;
  username: string;
  title: string;
  bio: string;
}
const Infomation = () => {
  const input = useRef<any>(null);
  const [image, setImage] = useState<any>("");
  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleImageClick = () => {
    input?.current.click();
  };
  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    const base64: any = await convertBase64(file);
    setImage(base64);
    setValue("imgUrl", base64);
  };
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AccountSetting>({
    defaultValues: {
      imgUrl: "",
      fullName: "",
      username: "",
      title: "",
      bio: "",
    },
  });
  const onSubmit = async (data: AccountSetting) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-y-[24px]">
      <h1 className="text-[#1D2026] text-[24px] font-semibold">
        Cài đặt tài khoản
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-[18px]"
      >
        <div className="p-[20px] border-[1px] border-[#E9EAF0] w-fit h-fit">
          <div
            onClick={handleImageClick}
            className="w-[280px] h-[280px] relative cursor-pointer"
          >
            {image ? (
              <img src={image} alt="" className="w-full h-full object-cover" />
            ) : (
              <img
                src="https://images.pexels.com/photos/18125686/pexels-photo-18125686/free-photo-of-dem-d-ng-t-th-ch-p-nh-sang-tr-l-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover"
              />
            )}
            <div className="flex items-center gap-x-3 absolute bottom-0 left-0 w-full justify-center p-[12px] text-white bg-black opacity-50">
              <BsUpload className="text-[20px]" />
              <span className="text-[14px]">Tải ảnh lên</span>
            </div>
            <input
              {...register("imgUrl")}
              type="file"
              ref={input}
              onChange={handleImageChange}
              className="hidden"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[6px]">
          <span className="text-[#1D2026] text-[14px] font-normal">
            Họ và tên
          </span>
          <input
            {...register("fullName")}
            type="text"
            className="outline-none px-[18px] py-[11px] placeholder:text-[#8C94A3] text-[14px] text-[#1D2026] border-[1px] border-[#E9EAF0]"
            placeholder="VD:Nguyễn Văn A....."
          />
        </div>
        <div className="flex flex-col gap-y-[6px]">
          <span className="text-[#1D2026] text-[14px] font-normal">
            Tên người dùng
          </span>
          <input
            {...register("username")}
            type="text"
            className="outline-none px-[18px] py-[11px] placeholder:text-[#8C94A3] text-[14px] text-[#1D2026] border-[1px] border-[#E9EAF0"
            placeholder="VD: kiet132..."
          />
        </div>
        <div className="flex flex-col gap-y-[6px]">
          <span className="text-[#1D2026] text-[14px] font-normal">
            Tiêu đề
          </span>
          <input
            {...register("title")}
            type="text"
            className="outline-none px-[18px] py-[11px] placeholder:text-[#8C94A3] text-[14px] text-[#1D2026] border-[1px] border-[#E9EAF0"
            placeholder="Giáo viên"
          />
        </div>
        <div className="flex flex-col gap-y-[6px]">
          <span className="text-[#1D2026] text-[14px] font-normal">
            Tiểu sử
          </span>
          <textarea
            {...register("bio")}
            className="outline-none h-[100px] resize-none px-[18px] py-[11px] placeholder:text-[#8C94A3] text-[14px] text-[#1D2026] border-[1px] border-[#E9EAF0"
            placeholder="VD: Chào"
          ></textarea>
        </div>
        <Button
          w="fit-content"
          bg="#FF6636"
          _hover={{ bg: "#f55d2f" }}
          fontSize="14px"
          color="white"
          type="submit"
        >
          Cập nhập thông tin
        </Button>
      </form>
    </div>
  );
};

export default Infomation;
