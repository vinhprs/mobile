import { Fade, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FilterExam = () => {
  const { isOpen: isOpenFaded, onToggle } = useDisclosure();
  const { isOpen: isOpenSubjectFaded, onToggle: onToggleSubject } =
    useDisclosure();

  return (
    <div>
      <div>
        <div className={`w-full flex flex-col gap-y-2 `}>
          {/* <span className="text-[14px]">Khối</span> */}
          <div
            className={`relative cursor-pointer px-[8px] h-[38px] text-[14px] bg-white border-[1px]  border-[#E9EAF0] text-[#4E5566] `}
          >
            <div
              onClick={() => {
                // setTypes(typeApi);
                onToggle();
              }}
              className="flex justify-between items-center h-full gap-x-2"
            >
              <span>Khối</span>
              <MdOutlineKeyboardArrowDown />
            </div>
            {isOpenFaded && (
              <div className="absolute top-[100%] left-0 w-full z-10">
                <Fade in={isOpenFaded}>
                  <div className="w-full py-[10px] border-[0.5px] border-[#E9EAF0] bg-white">
                    {/* {arraySelect.map((item: any, index: number) => (
                      <p
                        className="py-[5px] px-[10px] hover:text-white hover:bg-[#FF6636]"
                        onClick={() => selectString(item?.name, item?.id)}
                      >
                        {item?.name}
                      </p>
                    ))} */}
                  </div>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className={`w-full flex flex-col gap-y-2 `}>
          {/* <span className="text-[14px]">Khối</span> */}
          <div
            className={`relative cursor-pointer px-[8px] h-[38px] text-[14px] bg-white border-[1px]  border-[#E9EAF0] text-[#4E5566] `}
          >
            <div
              onClick={() => {
                // setTypes(typeApi);
                onToggleSubject();
              }}
              className="flex justify-between items-center h-full gap-x-2"
            >
              <span>Lớp</span>
              <MdOutlineKeyboardArrowDown />
            </div>
            {isOpenSubjectFaded && (
              <div className="absolute top-[100%] left-0 w-full z-10">
                <Fade in={isOpenSubjectFaded}>
                  <div className="w-full py-[10px] border-[0.5px] border-[#E9EAF0] bg-white">
                    {/* {arraySelect.map((item: any, index: number) => (
                      <p
                        className="py-[5px] px-[10px] hover:text-white hover:bg-[#FF6636]"
                        onClick={() => selectString(item?.name, item?.id)}
                      >
                        {item?.name}
                      </p>
                    ))} */}
                  </div>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterExam;
