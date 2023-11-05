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
          <div className="flex flex-col gap-y-[16px]" key={index}>
            <div className="flex flex-col gap-y-[10px]">
              <div className="flex justify-between items-center">
                <div className="flex flex-1 gap-x-3 items-center">
                  <h1 className=" w-fit text-[14px] font-semibold">
                    Câu hỏi {index + 1}
                  </h1>
                  <Select
                    arraySelect={[
                      { id: 1, name: "Nhận biết" },
                      { id: 2, name: "Thông hiểu" },
                      { id: 3, name: "Vận dụng" },
                      { id: 4, name: "Vận dụng cao" },
                    ]}
                    title="Mức độ"
                    classes="flex-1 h-full gap-y-0 w-fit"
                    classesMini="w-[150px]"
                    type="question"
                    typeApi="select"
                    types={types}
                    setTypes={setTypes}
                    dispatch={dispatch}
                    index={index}
                    // selectTitle="Mức độ"
                  />
                </div>
                <button
                  onClick={() => addExam(index, "")}
                  className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#FF6636]"
                >
                  <AiOutlinePlus className="text-[16px] text-white" />
                </button>
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  // value={item.title}
                  onChange={(e) => updateTitleExam(index, e)}
                  className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] text-[14px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-[10px]">
              {item.answers.map((answer: string, indexAnswer: number) => (
                <div className="flex gap-x-4 items-center" key={indexAnswer}>
                  <div className="check">
                    <input
                      type="checkbox"
                      name="question"
                      id=""
                      disabled={
                        item.answers.length - item.correctAnswers.length ===
                          1 && true
                      }
                      value={indexAnswer + 1}
                      onChange={(e) => updateCorrectAnswerExam(index, e)}
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name=""
                      id=""
                      // value={answer}
                      onChange={(e) => updateExam(index, indexAnswer, e)}
                      className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] text-[14px]"
                    />
                  </div>
                  {item.answers.length > 2 && (
                    <button
                      onClick={() => deleteExam(index, indexAnswer)}
                      className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#FF6636]"
                    >
                      <BsTrash className="text-[16px] text-white" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <ReactQuill
                // {...register("desc")}
                onChange={(e) => updateExplainExam(index, e)}
                theme="snow"
                value={valueDesc}
                modules={{
                  toolbar: toolbarOptions,
                }}
                className=""
              />
            </div>
          </div>
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
