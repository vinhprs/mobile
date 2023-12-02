import React from "react";

import { useSelector } from "react-redux";
import { selectResultExam } from "../../store/reducers/examSlice";
import QuestionResultDetail from "./QuestionResultDetail";

const QuestionResult = () => {
  const questionResult: any = useSelector(selectResultExam);
  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex flex-col gap-y-[20px]">
        {questionResult?.corrections?.map((item: any, index: any) => (
          <QuestionResultDetail item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default QuestionResult;
