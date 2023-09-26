import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectQuestion } from "../../store/reducers/questionSlice";
const QuestionNumber = () => {
  const question = useSelector(selectQuestion);
  const [openQuestionNumber, setOpenQuestionNumber] = useState(true);
  const handleClickOpen = () => {
    setOpenQuestionNumber(!openQuestionNumber);
  };
  console.log(question.includes(1));

  return (
    <div className="flex flex-col gap-y-1">
      <div
        className="cursor-pointer flex items-center justify-between px-[20px] py-[20px] bg-[#D8D9DA] rounded-xl text-[#272829]"
        onClick={handleClickOpen}
      >
        <div className="font-medium">Câu hỏi</div>
        <div className="cursor-pointer h-[25px] w-[25px] border-[2px] rounded-full flex justify-center items-center ">
          {openQuestionNumber ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </div>
      </div>
      {openQuestionNumber && (
        <div
          className={`max-h-[300px] h-fit rounded-md bg-[#D8D9DA] overflow-auto px-[20px] py-[20px] transition-opacity ease-in-out duration-150 ${
            openQuestionNumber ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-[#ACADAE] grid grid-cols-4  justify-items-center gap-y-4 ">
            {Array(7)
              .fill(null)
              .map((item, index) => (
                <a
                  href={`#${index + 1}`}
                  className={`${
                    question.includes(index + 1)
                      ? "bg-[#5B0E7F] text-white"
                      : "bg-[#D8D9DA]"
                  } w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[1px] border-white`}
                >
                  <span>{index + 1}</span>
                </a>
              ))}
          </div>
        </div>
      )}
      <button className="w-full px-[20px] py-[10px] bg-[#f96935] text-white font-medium rounded-lg">
        Nộp bài
      </button>
    </div>
  );
};

export default QuestionNumber;
