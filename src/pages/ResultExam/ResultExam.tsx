import React from "react";
import TitleResultExam from "./TitleResultExam";
import QuestionResult from "./QuestionResult";

const ResultExam = () => {
  return (
    <div className="pt-[100px] pb-[60px] px-[24px] text-[#272829]">
      <div className="grid grid-cols-[1fr_350px]">
        <div>
          <TitleResultExam />
          <QuestionResult />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ResultExam;
