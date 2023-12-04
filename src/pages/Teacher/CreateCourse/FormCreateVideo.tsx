import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Sections from "./Sections";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { useAppDispatch } from "../../../hooks/appHooks";
import {
  addSectionItem,
  selectCoursesCreated,
  swapSection,
  updateArray,
  updateIndex,
  updateSections,
} from "../../../store/reducers/createCourseSlice";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
export interface LectureProp {
  id?: string;
  lectureName: string;
  lectureType: string;
  amount: string;
  url: string;
}
export interface SectionsProp {
  id?: string;
  sectionName: string;
  lectures: Array<LectureProp>;
}
const FormCreateVideo = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const sections = useSelector(selectCoursesCreated);
  const swapItem = (index1: number, index2: number) => {
    dispatch(
      swapSection({
        indexOne: index1,
        indexTwo: index2,
      })
    );
  };
  const addSection = () => {
    const item = {
      // id: uuid4(),
      sectionName: "",
      lectures: [
        {
          // id: uuid4(),
          lectureName: "",
          lectureType: "",
          amount: "",
          url: "",
        },
      ],
    };
    dispatch(addSectionItem(item));
  };
  const onSubmit = () => {
    setTimeout(() => {
      dispatch(updateIndex(3));
      dispatch(updateArray(3));
      dispatch(updateSections(sections.sections));
      setLoading(false);
    }, 2000);
    setLoading(true);

    console.log(sections);
  };
  return (
    <div>
      <div className="bg-[#F5F7FA] p-[24px] flex flex-col gap-y-[30px]">
        <div className="flex flex-col divide-y">
          {sections.sections.map((item, index) => (
            <div className="flex gap-x-3 py-[20px]" key={index}>
              <div className="flex flex-col gap-y-2 text-[#1D2026]">
                <div
                  onClick={() => swapItem(index, index - 1)}
                  className={` w-[40px] h-[40px] flex justify-center items-center bg-white ${
                    index === 0
                      ? "cursor-not-allowed text-[#6E7485]"
                      : "cursor-pointer hover:bg-[#FF6636] hover:text-white transition-all ease-in-out duration-150"
                  } `}
                >
                  <BsArrowUpShort className="text-[25px]" />
                </div>
                <div
                  onClick={() => swapItem(index, index + 1)}
                  className={` w-[40px] h-[40px] flex justify-center items-center bg-white ${
                    index === sections.sections.length - 1
                      ? "cursor-not-allowed text-[#6E7485]"
                      : "cursor-pointer hover:bg-[#FF6636] hover:text-white transition-all ease-in-out duration-150"
                  } `}
                >
                  <BsArrowDownShort className="text-[25px]" />
                </div>
              </div>
              <Sections
                sections={sections.sections}
                item={item}
                index={index}
              />
            </div>
          ))}
        </div>
        <button
          onClick={addSection}
          className="bg-[#FFEEE8] text-[#FF6636] text-[14px] font-medium h-[48px]"
        >
          Thêm video
        </button>
      </div>
      <div className="flex justify-end mt-3">
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
          onClick={onSubmit}
          // className="text-[14px] h-[48px] px-[24px] font-semibold text-white bg-[#FF6636] hover:bg-[#fe5a27]"
        >
          Lưu và tiếp tục
        </Button>
      </div>
    </div>
  );
};
export default FormCreateVideo;
