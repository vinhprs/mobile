import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import ModalCreateExam from "./Modal/ModalCreateExam";
import { useDisclosure } from "@chakra-ui/react";
import Exams from "./Exams";
import { examList, selectExams } from "../../../store/reducers/examSlice";
import { useAppDispatch } from "../../../hooks/appHooks";
import { getExam } from "../../../store/actions/exam.action";
import { useSelector } from "react-redux";
import useQueryParams from "../../../hooks/useSearchParams";
import useSetQueryParams from "../../../hooks/useSetQuery";
import PagiantionNew from "../../../components/Pagination/PagiantionNew";

const MainExam = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  // const exams: any = useSelector(selectExams);
  const [exams, setExams] = useState<any>([]);

  const [page, setPage] = useState(1);
  const getExams = async () => {
    const res: any = await dispatch(getExam({}));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      console.log(res);
      setExams(res?.payload.data);
      // dispatch(examList(res?.payload.data));
    }
  };
  const handleChange = (page: number) => {
    setPage(page);
  };
  useEffect(() => {
    getExams();
  }, []);

  return (
    <>
      <div className="max-w-[1000px] p-[24px] w-full mx-auto flex flex-col gap-y-4">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[20px] text-[#1D2026] font-semibold">
              Ngân hàng đề thi
            </h1>
            <button
              onClick={onOpen}
              className="flex gap-x-2 items-center bg-[#FF6636]  text-white p-[10px] rounded-lg"
            >
              <FiPlus />
              <span>Tạo đề thi</span>
            </button>
          </div>
        </div>
        {exams?.listData?.length === 0 ? (
          <div>
            <h1>Không có đề kiểm tra nào</h1>
          </div>
        ) : (
          <>
            <Exams exams={exams} getExams={getExams} />
            <div>
              <PagiantionNew
                onPageChange={handleChange}
                totalCount={exams?.total}
                pageSize={10}
                siblingCount={1}
                currentPage={page}
              />
            </div>
          </>
        )}
      </div>
      <ModalCreateExam isOpen={isOpen} onClose={onClose} getExams={getExams} />
    </>
  );
};

export default MainExam;
