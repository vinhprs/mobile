import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  addAnswer,
  deleteAnswer,
  deleteAnswerCorretAnswer,
  selectExam,
  setUpdateExam,
  updateAnswer,
  updateAnswerCorretAnswer,
  updateAnswerExplain,
  updateAnswerTitle,
} from "../../../store/reducers/examSlice";
import { toolbarOptions } from "../../../utils/type";
import ReactQuill from "react-quill";
import { useAppDispatch } from "../../../hooks/appHooks";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Select from "./Select";
import e from "express";
import QuestionCreateItem from "./QuestionCreateItem";
interface QuestionProps {
  title: string;
  answers: Array<string>;
  correctAnswers: Array<string>;
  explain: string;
  questionLevel: string;
}
const Question = () => {
  const [valueDesc, setValueDesc] = useState("");
  const [types, setTypes] = useState<any>("");

  const examQuestion = useSelector(selectExam);
  const dispatch = useAppDispatch();

  const addQuestion = () => {
    dispatch(
      setUpdateExam({
        title: "",
        answers: ["", "", "", ""],
        correctAnswers: [],
        explain: "",
        questionLevel: "Nhận biết",
      })
    );
  };
  const addExam = (index: number, value: string) => {
    dispatch(
      addAnswer({
        questionIndex: index,
        value: value,
      })
    );
  };
  const deleteExam = (indexQuestion: number, indexAnswer: number) => {
    dispatch(
      deleteAnswer({
        questionIndex: indexQuestion,
        answerIndex: indexAnswer,
      })
    );
  };
  const updateExam = (
    indexQuestion: number,
    indexAnswer: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      updateAnswer({
        questionIndex: indexQuestion,
        answerIndex: indexAnswer,
        value: e.target.value,
      })
    );
  };
  const updateTitleExam = (
    indexQuestion: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      updateAnswerTitle({
        questionIndex: indexQuestion,
        value: e.target.value,
      })
    );
  };
  const updateExplainExam = (indexQuestion: number, e: any) => {
    setValueDesc(e);
    dispatch(
      updateAnswerExplain({
        questionIndex: indexQuestion,
        value: e,
      })
    );
  };
  const updateCorrectAnswerExam = (
    indexQuestion: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      dispatch(
        updateAnswerCorretAnswer({
          questionIndex: indexQuestion,
          value: +e.target.value,
        })
      );
    } else {
      console.log("uncheck");

      dispatch(
        deleteAnswerCorretAnswer({
          questionIndex: indexQuestion,
          value: +e.target.value,
        })
      );
    }
  };
  console.log(examQuestion);

  return (
    <div>
      <h1 className="text-[18px] font-semibold mb-2">Tạo câu hỏi</h1>
      <div className="flex flex-col gap-y-[24px]">
        {examQuestion.questions.map((item: QuestionProps, index: number) => (
          <QuestionCreateItem
            item={item}
            index={index}
            key={index}
            questions={examQuestion.questions}
          />
        ))}
      </div>
      <button
        onClick={addQuestion}
        className="bg-[#FF6636] text-white text-[14px] px-[12px] py-[8px] mt-[24px]"
      >
        Thêm câu hỏi
      </button>
    </div>
  );
};

export default Question;
