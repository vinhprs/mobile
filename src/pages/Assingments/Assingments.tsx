import React from "react";
import TitleAssignmet from "./TitleAssignmet";
import logo from "../../image/Navbar/logo.svg";
import "katex/dist/katex.min.css";
import TimeAndQuestions from "./TimeAndQuestions";
import QuestionNumber from "./QuestionNumber";

const Assingments = () => {
  return (
    <div className="py-[20px] px-[24px] text-[#272829]">
      <div className="flex items-center justify-around mb-9">
        <img src={logo} alt="logo-icon" className="w-[250px]" />
        <h1 className="uppercase text-[20px] font-semibold">
          bài tập về định hướng lượng tử trong quang học
        </h1>
      </div>
      <div className="grid grid-cols-[1fr_300px] gap-x-3 w-[1100px] mx-auto">
        <div className="">
          <TitleAssignmet />
        </div>
        <div className=" fixed h-full w-[300px] right-[150px] flex flex-col gap-y-3">
          <TimeAndQuestions />
          <QuestionNumber />
        </div>
      </div>
    </div>
  );
};

export default Assingments;
