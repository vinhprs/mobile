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
  selectTimeFinish,
  updateTimeStop,
} from "../../store/reducers/examSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const QuestionNumber = ({ questions }: any) => {
  const { idcourse } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const dispatch = useAppDispatch();
  const question = useSelector(selectQuestion);
  const resultExam = useSelector(selectExamPost);
  const completeTime = useSelector(selectTimeFinish);
  console.log(
    "🚀 ~ file: QuestionNumber.tsx:23 ~ QuestionNumber ~ completeTime:",
    completeTime
  );
  const [openQuestionNumber, setOpenQuestionNumber] = useState(true);
  const handleClickOpen = () => {
    setOpenQuestionNumber(!openQuestionNumber);
  };
  console.log(question.includes(1));
  const postExamToTeachear = async (examId: any, time: number) => {
    console.log(
      "🚀 ~ file: QuestionNumber.tsx:33 ~ postExamToTeachear ~ time:",
      time
    );
    const res: any = await dispatch(
      postExamResult({
        ...resultExam,
        examId: +examId,
        completeTime: time,
      })
    );
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      dispatch(resultExamDetail(res?.payload.data));
      setTimeout(() => {
        navigate(`courses/${idcourse}/result-exam?id=${id}`);
      }, 500);
    }
  };
  const onClickPostExam = () => {
    dispatch(updateTimeStop(true));
    // postExamToTeachear(id, completeTime);
  };
  const handleAlertClick = () => {
    // Display a confirmation dialog
    const result = window.confirm("Bạn có chắc muốn dừng bài kiểm tra này ?");

    // Check if the user clicked "Yes"
    if (result) {
      // Perform the action here
      navigate("/");
      // You can put your code to perform the action here
    }
  };
  useEffect(() => {
    if (completeTime > 0) {
      postExamToTeachear(id, completeTime);
    }
  }, [completeTime]);
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
      <button
        onClick={handleAlertClick}
        className="w-full px-[20px] py-[10px] bg-[#f96935] text-white font-medium rounded-lg"
      >
        Quay lại trang chủ
      </button>
    </div>
  );
};

export default QuestionNumber;
