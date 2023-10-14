import React, { useRef, useState } from "react";
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
const Account = () => {
  const input = useRef<any>(null);
  const [image, setImage] = useState("");
  const [value, setValue] = React.useState("Nam");
  const handleImageClick = () => {
    input?.current.click();
  };
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    console.log(file);

    setImage("");
  };
  return (
    <div>
      <form action="">
        <div className="flex gap-x-[50px]">
          <div className="p-[20px] border-[1px] border-[#E9EAF0] w-fit h-fit">
            <div
              onClick={handleImageClick}
              className="w-[280px] h-[280px] relative cursor-pointer"
            >
              <img
                src="https://images.pexels.com/photos/18125686/pexels-photo-18125686/free-photo-of-dem-d-ng-t-th-ch-p-nh-sang-tr-l-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="flex items-center gap-x-3 absolute bottom-0 left-0 w-full justify-center p-[12px] text-white bg-black opacity-50">
                <BsUpload className="text-[20px]" />
                <span className="text-[14px]">Tải ảnh lên</span>
              </div>
              <input
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
                type="text"
                className="w-full focus:outline-none border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]"
              />
            </div>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction="row">
                <Radio value="Nam" colorScheme="orange">
                  Nam
                </Radio>
                <Radio value="Nữ" colorScheme="orange">
                  Nữ
                </Radio>
              </Stack>
            </RadioGroup>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Điện thoại</span>
              <input
                type="text"
                className="w-full focus:outline-none border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Ngày sinh</span>
              <input
                type="text"
                className="w-full focus:outline-none border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Tỉnh</span>
              <Select placeholder="Select option" focusBorderColor="#FF6636">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Quận</span>
              <Select placeholder="Select option" focusBorderColor="#FF6636">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Địa chỉ</span>
              <input
                type="text"
                className="w-full focus:outline-none border-[1px] border-[#E9EAF0] px-[18px] py-[11px] text-[14px]"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Môn học</span>
              <div className="grid grid-cols-5 gap-3">
                <Checkbox colorScheme="orange" outline="none">
                  Toán
                </Checkbox>
                <Checkbox colorScheme="orange" outline="none">
                  Anh
                </Checkbox>
                <Checkbox colorScheme="orange" outline="none">
                  Địa lý
                </Checkbox>
                <Checkbox colorScheme="orange" outline="none">
                  Lịch sử
                </Checkbox>
                <Checkbox colorScheme="orange" outline="none">
                  Ngữ văn
                </Checkbox>
                <Checkbox colorScheme="orange" outline="none">
                  Ngữ văn
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px] text-[#1D2026]">Khối học</span>
              <Select placeholder="Select option" focusBorderColor="#FF6636">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <Button bg="#FF6636" color="white" _hover={{ bg: "#fc5b2a" }}>
              Lưu thông tin
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
