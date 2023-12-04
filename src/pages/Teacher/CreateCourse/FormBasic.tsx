import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import {
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/appHooks";
import {
  updateArray,
  updateCategoryId,
  updateCourseName,
  updateExpiredDate,
  updateIndex,
  updatePrice,
  updateSubCategoryId,
} from "../../../store/reducers/createCourseSlice";
import { getCategory } from "../../../store/actions/user.action";
import moment from "moment";
interface BasicFormProps {
  titleSubject: string;
  grade: number;
  subject: string;
  money: string;
  date: Date;
}
const FormBasic = () => {
  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [grade, setGrade] = useState([]);
  const [subject, setSubject] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BasicFormProps>({
    defaultValues: {
      titleSubject: "",
      grade: 1,
      subject: "",
      money: "",
      date: startDate,
    },
  });
  const getCategories = async () => {
    const response: any = await dispatch(getCategory({}));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      console.log(response);
      setGrade(response.payload?.data);
    } else {
      console.log(response.payload);
    }
  };
  const onSubmit = async (data: BasicFormProps) => {
    setTimeout(() => {
      dispatch(updateIndex(1));
      dispatch(updateArray(1));
      dispatch(updateCourseName(data.titleSubject));
      dispatch(updatePrice(data.money));
      dispatch(updateCategoryId(data.grade));
      dispatch(updateSubCategoryId(data.subject));
      dispatch(updateExpiredDate(moment(data.date).format("YYYY-MM-DD")));
      setLoading(false);
    }, 2000);
    console.log("🚀 ~ file: FormBasic.tsx:59 ~ onSubmit ~ data:", data);
    setLoading(true);
  };
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    const newArray = grade.filter((item: any) => item._id === +watch("grade"));
    setSubject(newArray);
  }, [watch("grade")]);
  console.log(subject);

  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-y-[24px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-y-[6px]">
          <span className="text-[14px] text-[#1D2026]">Tiêu đề</span>
          <input
            {...register("titleSubject")}
            type="text"
            placeholder="Toán 12....."
            className="outline-none w-full px-[18px] py-[13px] border-[1px] border-[#E9EAF0] placeholder:text-[14px] placeholder:text-[#8C94A3]"
          />
        </div>
        <div className="grid grid-cols-2 gap-[15px]">
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[14px] text-[#1D2026]">Khối lớp</span>
            <Select
              _focusVisible={{ borderColor: "none" }}
              borderRadius="none"
              fontSize="14px"
              placeholder="Khối"
              {...register("grade")}
            >
              {grade?.map((item: any, index: any) => (
                <option value={item._id} key={item._id}>
                  {item.categoryName}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[14px] text-[#1D2026]">Môn học</span>
            <Select
              _focusVisible={{ borderColor: "none" }}
              borderRadius="none"
              fontSize="14px"
              placeholder="Môn học"
              _placeholder={{ fontSize: "14px", color: "#8C94A3" }}
              {...register("subject")}
            >
              {subject[0]?.childs?.map((item: any, index: any) => (
                <option value={item._id} key={item._id}>
                  {item.categoryName}
                </option>
              ))}
              {/* <option value="Toán">Toán học</option>
              <option value="Hóa">Hóa</option> */}
            </Select>
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[14px] text-[#1D2026]">Giá tiền</span>
            <InputGroup size="md">
              <Input
                placeholder="Giá tiền"
                borderRadius="0"
                border="1px solid #E9EAF0"
                _focusVisible={{ border: "1px solid #E9EAF0" }}
                {...register("money")}
              />
              <InputRightAddon children="đồng" borderRadius="0" />
            </InputGroup>
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[14px] text-[#1D2026]">
              Ngày hết khóa học
            </span>
            <DatePicker
              {...register("date")}
              onChange={(date: any) => setStartDate(date)}
              selected={startDate}
              className="w-full h-[40px] px-3 text-[14px] outline-none border-[1px] border-[#E9EAF0] placeholder:text-[#8C94A3] placeholder:font-normal placeholder:text-[14px]"
              placeholderText="Ngày sinh"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            isLoading={loading}
            fontSize="14px"
            height="48px"
            px="24px"
            fontWeight={600}
            color="white"
            bg="#FF6636"
            _hover={{ bg: "#fe5a27" }}
            borderRadius="none"
            // className="text-[14px] h-[48px] px-[24px] font-semibold text-white bg-[#FF6636] hover:bg-[#fe5a27]"
          >
            Lưu và tiếp tục
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormBasic;
