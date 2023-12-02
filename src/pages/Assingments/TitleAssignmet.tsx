import { useEffect } from "react";
import Question from "./Question";
import { useAppDispatch } from "../../hooks/appHooks";
import { useSelector } from "react-redux";
import { postExam, selectExamPost } from "../../store/reducers/examSlice";

const TitleAssignmet = ({ questions }: any) => {
  return (
    <div className="flex flex-col gap-y-10 divide-y-2 divide-dashed">
      {questions?.questions?.map((question: any, index: any) => (
        <Question index={index + 1} question={question} key={question?._id} />
      ))}
    </div>
  );
};

export default TitleAssignmet;
