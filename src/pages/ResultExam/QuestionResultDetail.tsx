import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { FcViewDetails, FcFinePrint } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import parse from "html-react-parser";
const QuestionResultDetail = ({ item, index }: any) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div className="">
      <div className="flex items-center gap-x-4">
        <h1 className="font-semibold text-[#FF6636]">Câu hỏi số {index + 1}</h1>
        <div className="flex items-center gap-x-2 px-[12px] py-[8px] border-[1px] rounded-md">
          <FcViewDetails className="text-[20px]" />
          <span className="text-[14px]">{item?.question.questionLevel}</span>
        </div>
        <span className="text-[14px] font-medium">
          {item?.question.answerType}
        </span>
      </div>
      <div>
        <h1 className="font-semibold">{parse(item?.question.title)}</h1>
        <div className="flex flex-col gap-y-2">
          {item?.question.answers.map((itemAns: any, indexAns: any) => (
            <>
              {indexAns + 1 === item?.question?.correctAnswers[0] ? (
                <div className="flex items-center text-green-500 gap-x-5">
                  <span className="flex gap-x-3  font-semibold">
                    {indexAns + 1}. {parse(itemAns)}
                  </span>
                  <FaCheck />
                </div>
              ) : (
                <>
                  {item?.studentAnswer?.length > 0 ? (
                    <>
                      {indexAns + 1 === item?.studentAnswer[0] &&
                      item?.studentAnswer[0] !==
                        item?.question?.correctAnswers[0] ? (
                        <div className="flex items-center text-red-500 gap-x-5">
                          <span className="flex gap-x-3 text-red-500 font-semibold">
                            {indexAns + 1}. {parse(itemAns)}
                          </span>
                          <HiXMark />
                        </div>
                      ) : (
                        <span className="flex gap-x-3">
                          {indexAns + 1}. {parse(itemAns)}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="flex gap-x-3">
                      {indexAns + 1}. {parse(itemAns)}
                    </span>
                  )}
                </>
                // <>
                //   {indexAns + 1 === item?.studentAnswer[0] &&
                //   item?.studentAnswer[0] !==
                //     item?.question?.correctAnswers[0] ? (
                //     <div className="flex items-center text-red-500 gap-x-5">
                //       <span className="flex gap-x-3 text-red-500 font-semibold">
                //         {indexAns + 1}. {parse(itemAns)}
                //       </span>
                //       <HiXMark />
                //     </div>
                //   ) : (
                //     <span className="flex gap-x-3">
                //       {indexAns + 1}. {parse(itemAns)}
                //     </span>
                //   )}
                // </>
              )}
            </>
          ))}
        </div>
      </div>
      <div
        onClick={onToggle}
        className="flex items-center gap-x-3 px-[12px] py-[8px] rounded-md w-fit mt-4 bg-[#FF6636] text-white"
      >
        <FcFinePrint className="text-[20px]" />
        <button className="text-[14px] font-medium">Xem lời giải </button>
      </div>
      {isOpen && (
        <Fade in={isOpen}>
          <div>
            <div
              className={`p-[10px] rounded-lg bg-[#FF6636] mt-[10px] flex flex-col gap-y-[10px]`}
            >
              <div className="flex justify-between items-center text-white">
                <h1>Giải chi tiết</h1>
                <IoIosClose
                  className="text-[24px] cursor-pointer"
                  onClick={onToggle}
                />
              </div>
              <div className="p-[10px] bg-white rounded-md">
                {parse(item?.explain)}
              </div>
            </div>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default QuestionResultDetail;
