import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import {
  Flex,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
const FormInformation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = React.useState("Nam");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      dateofbirth: startDate,
      gender: "Nam",
      address: "",
      subjects: [],
      interestSubject: "",
    },
  });
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-y-3 mb-3">
          <input
            {...register("name")}
            type="text"
            placeholder="Tên"
            className="focus:outline-none w-full px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold "
          />
          <input
            {...register("phone")}
            type="text"
            placeholder="Username"
            className="focus:outline-none w-full px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold "
          />
          <DatePicker
            {...register("dateofbirth")}
            onChange={(date: any) => setStartDate(date)}
            selected={startDate}
            className="w-full px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold"
            placeholderText="Ngày sinh"
          />
          <RadioGroup onChange={setValue} value={value}>
            <Flex direction="row" gap="3">
              <Radio {...register("gender")} value="Nam" colorScheme="purple">
                Nam
              </Radio>
              <Radio {...register("gender")} value="Nữ" colorScheme="purple">
                Nữ
              </Radio>
            </Flex>
          </RadioGroup>
          <input
            {...register("address")}
            type="text"
            placeholder="Địa chỉ"
            className="focus:outline-none w-full px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold "
          />
          <div>
            <h1 className="font-semibold  mb-2">Môn học mà bạn quan tâm</h1>
            <div className="grid grid-cols-3 gap-3">
              <Checkbox colorScheme="purple">Toán học</Checkbox>
              <Checkbox colorScheme="purple">Ngữ văn</Checkbox>
              <Checkbox colorScheme="purple">Tiếng anh</Checkbox>
              <Checkbox colorScheme="purple">Vật lý</Checkbox>
              <Checkbox colorScheme="purple">Hóa học</Checkbox>
              <Checkbox colorScheme="purple">Sinh học</Checkbox>
              <Checkbox colorScheme="purple">Lịch sử</Checkbox>
              <Checkbox colorScheme="purple">Địa lý</Checkbox>
              <Checkbox colorScheme="purple">GDCD</Checkbox>
              <Checkbox colorScheme="purple">Tin học</Checkbox>
            </div>
          </div>
          <Select
            _focus={{ borderColor: "#8614BC" }}
            borderColor="#272829"
            borderRadius="none"
            height="45px"
            placeholder="Khối thi"
            {...register("interestSubject")}
          >
            <option value="A00">A00</option>
            <option value="A01">A01</option>
            <option value="B00">B00</option>
          </Select>
        </div>
        <Button
          _hover={{ bg: "#5B0E7F" }}
          w="100%"
          bg="#8614BC"
          color="white"
          borderRadius="none"
        >
          Xác nhận
        </Button>
      </form>
    </div>
  );
};

export default FormInformation;
