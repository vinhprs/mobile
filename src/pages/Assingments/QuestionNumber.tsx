import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectQuestion } from "../../store/reducers/questionSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { postExamResult } from "../../store/actions/exam.action";
import {
  postExam,
  resultExamDetail,
  selectExamPost,
} from "../../store/reducers/examSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const QuestionNumber = ({ questions }: any) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const dispatch = useAppDispatch();
  const question = useSelector(selectQuestion);
  const resultExam = useSelector(selectExamPost);
  const [openQuestionNumber, setOpenQuestionNumber] = useState(true);
  const handleClickOpen = () => {
    setOpenQuestionNumber(!openQuestionNumber);
  };
  console.log(question.includes(1));
  const postExamToTeachear = async (examId: any) => {
    const res: any = await dispatch(
      postExamResult({
        ...resultExam,
        examId: +examId,
      })
    );
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      dispatch(resultExamDetail(res?.payload.data));
      setTimeout(() => {
        navigate(`/result-exam?id=${id}`);
      }, 500);
    }
  };
  const onClickPostExam = () => {
    postExamToTeachear(id);
  };
  return (
    <div className="flex flex-col gap-y-1">
      <div
        className="cursor-pointer flex items-center justify-between px-[20px] py-[20px] bg-[#F5F7FA] rounded-xl text-[#272829]"
        onClick={handleClickOpen}
      >
        <div className="font-medium">Câu hỏi</div>
        <div className="cursor-pointer h-[25px] w-[25px] border-[2px] rounded-full flex justify-center items-center ">
          {openQuestionNumber ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </div>
      </div>
      {openQuestionNumber && (
        <div
          className={`max-h-[300px] h-fit rounded-md bg-[#F5F7FA] overflow-auto px-[20px] py-[20px] transition-opacity ease-in-out duration-150 ${
            openQuestionNumber ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-[#6E7485] grid grid-cols-4  justify-items-center gap-y-4 ">
            {Array(questions?.questions?.length)
              .fill(null)
              .map((item, index) => (
                <a
                  href={`#${index + 1}`}
                  className={`${
                    question.includes(index + 1)
                      ? "bg-[#FF6636] text-white"
                      : "bg-[#F5F7FA] border-[#6E7485]"
                  } w-[40px] h-[40px] rounded-full  flex items-center justify-center border-[1px] `}
                >
                  <span>{index + 1}</span>
                </a>
              ))}
          </div>
        </div>
      )}
      <button
        onClick={onClickPostExam}
        className="w-full px-[20px] py-[10px] bg-[#f96935] text-white font-medium rounded-lg"
      >
        Nộp bài
      </button>
    </div>
  );
};

export default QuestionNumber;
