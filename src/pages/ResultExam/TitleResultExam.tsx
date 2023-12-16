import React from "react";
import {
  MdOutlineAssignment,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";
import { TbArrowBackUpDouble } from "react-icons/tb";
import {
  IoIosCheckmarkCircleOutline,
  IoMdTime,
  IoIosTimer,
} from "react-icons/io";
import { VscError } from "react-icons/vsc";
import { FcDataBackup } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  resetPostExam,
  selectResultExam,
  updateTimeFinish,
  updateTimeStop,
} from "../../store/reducers/examSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { resetArray } from "../../store/reducers/questionSlice";
const TitleResultExam = () => {
  const questionResult: any = useSelector(selectResultExam);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleExamAgain = () => {
    dispatch(updateTimeStop(false));
    dispatch(updateTimeFinish(0));
    dispatch(resetArray({}));
    dispatch(resetPostExam({}));
    navigate(-1);
  };
  return (
    <div className="">
      <h1 className="text-center text-[#FF6636] font-semibold text-[24px] mb-[10px]">
        Chúc mừng bạn đã hoàn thành bài kiểm tra {questionResult?.title}
      </h1>
      <div className="px-[16px] py-[18px] border-[2px] border-[#FF6636] rounded-lg">
        <div className="flex items-center gap-x-4 h-full">
          <div className="flex flex-col gap-1 items-center px-[16px]">
            <span className="text-[20px] uppercase font-semibold">Điểm số</span>
            <h1 className="text-[18px] text-[#FF6636] font-medium">
              {questionResult?.score}/10
            </h1>
          </div>
          <div className="w-[0.5px] h-[60px] bg-[#FF6636]"></div>
          <div className="grid grid-cols-3 gap-3 flex-1">
            <div className="flex items-center gap-x-[10px]">
              <MdOutlineAssignmentTurnedIn className="text-[#3cb46e] text-[20px]" />
              <span className="">
                Số câu đã làm:{" "}
                <span className="text-[#FF6636] font-semibold">
                  {questionResult?.selected}/{questionResult?.totalQuestions}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <IoIosCheckmarkCircleOutline className="text-[#3cb46e] text-[20px]" />
              <span>
                Số câu làm đúng:{" "}
                <span className="text-[#FF6636] font-semibold">
                  {" "}
                  {questionResult?.corrects}/{questionResult?.totalQuestions}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <VscError className="text-[#e43a45] text-[20px]" />
              <span>
                Số câu làm sai:{" "}
                <span className="text-[#FF6636] font-semibold">
                  {" "}
                  {questionResult?.incorrect}/{questionResult?.totalQuestions}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <IoMdTime className="text-[#FF6636] text-[20px]" />
              <span>
                Thời gian làm:{" "}
                <span className="text-[#FF6636] font-semibold">1/45 phút</span>
              </span>
            </div>
            <div className="flex items-center gap-x-[10px]">
              <IoIosTimer className="text-[#FF6636] text-[20px]" />
              <span>
                Tốc độ:{" "}
                <span className="text-[#FF6636] font-semibold">
                  1.35 giây/câu
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-[10px] my-3">
        <button className="flex items-center gap-x-[10px] px-[8px] py-[4px] border-[1px] rounded-md">
          <MdOutlineAssignment className="text-[20px]" />
          <span className="text-[14px]">Xem đáp án</span>
        </button>
        <button
          onClick={() => {
            navigate("/");
            dispatch(updateTimeFinish(0));
            dispatch(updateTimeStop(false));
            dispatch(resetArray({}));
            dispatch(resetPostExam({}));
          }}
          className="flex items-center gap-x-[10px] px-[8px] py-[4px] border-[1px] rounded-md"
        >
          <TbArrowBackUpDouble className="text-[20px]" />
          <span className="text-[14px]">Quay lại trang chính</span>
        </button>
        <button
          onClick={handleExamAgain}
          className="flex items-center gap-x-[10px] px-[8px] py-[4px] border-[1px] rounded-md"
        >
          <FcDataBackup className="text-[20px]" />
          <span className="text-[14px]">Làm lại bài kiểm tra</span>
        </button>
      </div>
    </div>
  );
};

export default TitleResultExam;
