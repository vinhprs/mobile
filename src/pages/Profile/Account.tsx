import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";

import { BsUpload } from "react-icons/bs";
import {
  Radio,
  RadioGroup,
  Stack,
  Select,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appHooks";
import {
  getCategory,
  getProvince,
  getSubjects,
  getSubjetsGroup,
  userSetting,
} from "../../store/actions/user.action";
import moment from "moment";
import { selectUserInfo, updateUserInfo } from "../../store/reducers/authSlice";
import { useSelector } from "react-redux";
import { convertBase64 } from "../../utils/lib";
import { uploadFile } from "../../store/actions/course.action";
interface UserProps {
  name: string;
  phone: string;
  dateofbirth: Date;
  gender: string;
  province: string;
  district: string;
  address: string;
  grade: number;
  subjects: Array<string>;
  interestSubject: string;
  avatar: string;
}

const Account = () => {
  const userInfo: any = useSelector(selectUserInfo);

  const dispatch = useAppDispatch();
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [subjectGroup, setSubjectGroup] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = React.useState("Nam");
  const [grade, setGrade] = useState([]);
  const input = useRef<any>(null);
  const [image, setImage] = useState<any>(
    "https://images.pexels.com/photos/18125686/pexels-photo-18125686/free-photo-of-dem-d-ng-t-th-ch-p-nh-sang-tr-l-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const {
    register,
    handleSubmit,
    setValue: setValueForm,
    getValues,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserProps>({
    defaultValues: {
      name: userInfo?.fullname,
      phone: userInfo?.phone,
      dateofbirth: startDate,
      gender: userInfo?.gender === true ? "Nam" : "Nữ",
      province: "",
      district: "",
      address: "",
      grade: 0,
      subjects: [],
      interestSubject: "",
      avatar: userInfo?.avatar ? userInfo?.avatar : image,
    },
  });

  const handleImageClick = () => {
    input?.current.click();
  };
  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    const formData = new FormData();
    formData.append("file", file);
    const res: any = await dispatch(uploadFile(formData));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      console.log(res.payload?.data?.url);
      setValueForm("avatar", res.payload?.data?.url);
      setImage(res.payload?.data?.url);

      // dispatch(updateThumbnail(res.payload?.data?.url));
    }
  };
  const getProvinces = async () => {
    const response: any = await dispatch(getProvince({}));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      console.log(response);
      setProvince(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  const getDistricts = async () => {
    const response: any = await dispatch(getProvince(watch("province")));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      console.log(response);
      setDistrict(response.payload?.data?.districts);
    } else {
      console.log(response.payload);
    }
  };
  const getAllSubject = async () => {
    const response: any = await dispatch(getSubjects({}));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      console.log(response);
      setSubjects(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  const getAllSubjectGroup = async () => {
    const response: any = await dispatch(getSubjetsGroup({}));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      console.log(response);
      setSubjectGroup(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  const getCategories = async () => {
    const response: any = await dispatch(getCategory({}));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      console.log(response);
      setGrade(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  useEffect(() => {
    getProvinces();
    getAllSubject();
    getAllSubjectGroup();
    getCategories();
  }, []);
  useEffect(() => {
    getDistricts();
  }, [watch("province")]);

  const onSubmit = async (data: UserProps) => {
    // const converSunb = data.subjects.map((item, index) => +item);
    const payload = {
      fullname: data.name,
      phone: data.phone,
      gender: data.gender === "Nam" ? true : false,
      birthDate: moment(data.dateofbirth).format("YYYY-MM-DD"),
      address: {
        province: +data.province,
        district: +data.district,
        detail: data.address,
      },
      subjectNames: data.subjects,
      grade: +data.grade,
      subjectGroup: +data.interestSubject,
      avatar: data.avatar,
    };
    const res: any = await dispatch(userSetting(payload));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      console.log(res);
      dispatch(updateUserInfo(res?.payload.data));
      // navigate("/");
    } else {
      console.log("err");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-[50px]">
          <div className="p-[20px] border-[1px] border-[#E9EAF0] w-fit h-fit">
            <div
              onClick={handleImageClick}
              className="w-[280px] h-[280px] relative cursor-pointer"
            >
              <img
                src={getValues("avatar")}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="flex items-center gap-x-3 absolute bottom-0 left-0 w-full justify-center p-[12px] text-white bg-black opacity-50">
                <BsUpload className="text-[20px]" />
                <span className="text-[14px]">Tải ảnh lên</span>
              </div>
              <input
                {...register("avatar")}
                type="file"
                ref={input}
                onChange={handleImageChange}
                className="hidden"
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Tên</span>
              <input
                {...register("name")}
                type="text"
                className="w-full focus:outline-none border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]"
              />
            </div>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="Nam" colorScheme="orange" {...register("gender")}>
                  Nam
                </Radio>
                <Radio value="Nữ" colorScheme="orange" {...register("gender")}>
                  Nữ
                </Radio>
              </Stack>
            </RadioGroup>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Điện thoại</span>
              <input
                {...register("phone")}
                type="text"
                className="w-full focus:outline-none border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Ngày sinh</span>
              <DatePicker
                {...register("dateofbirth")}
                onChange={(date: any) => setStartDate(date)}
                selected={startDate}
                className="w-full px-3 py-3 outline-none border-[1px] border-[#E9EAF0] placeholder:text-[#8C94A3] placeholder:font-normal placeholder:text-[14px]"
                placeholderText="Ngày sinh"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Tỉnh</span>
              <Select
                _focus={{ borderColor: "#FF6636", outline: "none" }}
                borderRadius="none"
                height="45px"
                placeholder="Tỉnh"
                outline="none"
                bg="white"
                {...register("province")}
                // onChange={handleChangeProvince}
              >
                {province.map((item: any, index: any) => (
                  <option value={item.code} key={item.code}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Quận</span>
              <Select
                _focus={{ borderColor: "#FF6636", outline: "none" }}
                borderRadius="none"
                height="45px"
                placeholder="Quận"
                outline="none"
                bg="white"
                {...register("district")}
              >
                {district?.map((item: any, index: any) => (
                  <option value={item.code} key={item.code}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Địa chỉ</span>
              <input
                {...register("address")}
                type="text"
                className="w-full focus:outline-none border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]"
              />
            </div>
            <div>
              <span className="text-[14px] text-[#1D2026]">Lớp</span>
              <Select
                _focus={{ borderColor: "#FF6636", outline: "none" }}
                borderRadius="none"
                height="45px"
                placeholder="Lớp"
                outline="none"
                bg="white"
                {...register("grade")}
              >
                {grade.map((item: any, index: any) => (
                  <option value={item._id} key={item._id}>
                    {item.categoryName}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Môn học</span>
              <div className="grid grid-cols-5 gap-3">
                {subjects.map((item: any, index: any) => (
                  <Checkbox
                    key={item._id}
                    value={item.subjectName}
                    colorScheme="orange"
                    borderColor="#8C94A3"
                    {...register("subjects")}
                    fontSize="14px"
                  >
                    {item.subjectName}
                  </Checkbox>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Khối học</span>
              <Select
                _focus={{ borderColor: "#FF6636", outline: "none" }}
                borderRadius="none"
                height="45px"
                placeholder="Khối thi"
                outline="none"
                bg="white"
                {...register("interestSubject")}
              >
                {subjectGroup.map((item: any, index: any) => (
                  <option value={item._id} key={item._id}>
                    {item.subjectGroupName}
                  </option>
                ))}
              </Select>
            </div>
            <Button
              bg="#FF6636"
              color="white"
              _hover={{ bg: "#fc5b2a" }}
              isLoading={isSubmitting}
              type="submit"
            >
              Lưu thông tin
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
