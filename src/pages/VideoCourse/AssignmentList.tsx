import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineAssignment } from "react-icons/md";
import { useAppDispatch } from "../../hooks/appHooks";
import {
  selectExamDetail,
  setExamDetail,
} from "../../store/reducers/examSlice";
import { getExamDetail } from "../../store/actions/exam.action";
import { useSelector } from "react-redux";
const AssignmentList = ({ item }: any) => {
  console.log(
    "🚀 ~ file: AssignmentList.tsx:12 ~ AssignmentList ~ item:",
    item
  );
  const pathname = useLocation();
  let newPathName =
    pathname?.pathname?.split("/").slice(0, -1).join("/") + "/assignment";
  const router = {
    pathname: newPathName,
    search: `?id=${item?.examId}`,
  };
  const examDetail: any = useSelector(selectExamDetail);
  const dispatch = useAppDispatch();
  const getDetailExam = async () => {
    const response: any = await dispatch(getExamDetail(item?.examId));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      dispatch(setExamDetail(response.payload?.data));
    }
  };
  useEffect(() => {
    if (item?.examId) {
      getDetailExam();
    }
  }, [item]);
  return (
    <>
      {item?.examId ? (
        <Link to={router}>
          <div className="flex items-center gap-x-2 p-3 border-[1px] border-[#272829]">
            <MdOutlineAssignment className="text-[20px]" />
            <span className="text-[14px] font-semibold text-[#61677A]">
              {examDetail?.title}
            </span>
          </div>
        </Link>
      ) : (
        <div>Không có bài tập nào</div>
      )}
    </>
  );
};

export default AssignmentList;
