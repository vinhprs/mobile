import React from "react";
import { Select } from "@chakra-ui/react";
import { useAppDispatch } from "../../../hooks/appHooks";
import {
  updateArray,
  updateIndex,
} from "../../../store/reducers/createCourseSlice";
const FormBasic = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async (event: any) => {
    event.preventDefault();
    dispatch(updateIndex(1));
    dispatch(updateArray(1));
  };
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-y-[24px]"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-y-[6px]">
          <span className="text-[14px] text-[#1D2026]">Tiêu đề</span>
          <input
            type="text"
            name=""
            placeholder="Toán 12....."
            id=""
            className="outline-none w-full px-[18px] py-[13px] border-[1px] border-[#E9EAF0] placeholder:text-[14px] placeholder:text-[#8C94A3]"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-[15px]">
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[14px] text-[#1D2026]">Khối lớp</span>
            <Select
              _focusVisible={{ borderColor: "none" }}
              borderRadius="none"
              fontSize="14px"
            >
              <option value="10">Lớp 10</option>
              <option value="11">Lớp 11</option>
              <option value="12">Lớp 12</option>
            </Select>
          </div>
          <div className="flex flex-col gap-y-[6px]">
            <span className="text-[14px] text-[#1D2026]">Môn học</span>
            <Select
              _focusVisible={{ borderColor: "none" }}
              borderRadius="none"
              fontSize="14px"
              _placeholder={{ fontSize: "14px", color: "#8C94A3" }}
            >
              <option value="Toán">Toán học</option>
              <option value="Lý">Lý</option>
              <option value="Hóa">Hóa</option>
            </Select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-[14px] h-[48px] px-[24px] font-semibold text-white bg-[#FF6636] hover:bg-[#fe5a27]"
          >
            Lưu và tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBasic;
