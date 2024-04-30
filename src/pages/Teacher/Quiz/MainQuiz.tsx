import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import ModalCreateQuiz from './Modal/ModalCreateQuiz';
import { useAppDispatch } from '../../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectListQuizs } from '../../../store/reducers/quizSlice';
import { getQuiz } from '../../../store/actions/quiz.action';
import PagiantionNew from '../../../components/Pagination/PagiantionNew';
import Quizs from './Quizs';

const MainQuiz = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page,setPage] = useState(1);
  const dispatch = useAppDispatch();
  const listquizs:any = useSelector(selectListQuizs);
  const getListQuizTeacher = async(page:any)=>{
    const payload = new URLSearchParams({
      page:page
    });
    const res = await dispatch(getQuiz(payload));
    if(res.meta.requestStatus ==='fulfilled'){
      console.log(res);
    }
  };
  const handleChange = (page:number)=>{
    setPage(page);
  };
  useEffect(()=>{
    getListQuizTeacher(1);
  },[]);
  return (
    <>
      <div className="max-w-[1200px] p-[24px] w-full mx-auto flex flex-col gap-y-4">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[20px] text-[#1D2026] font-semibold">
              Ngân hàng Quizz
            </h1>
            <button
              onClick={onOpen}
              className="flex gap-x-2 items-center bg-[#FF6636]  text-white p-[10px] rounded-lg"
            >
              <FiPlus />
              <span>Tạo quizz</span>
            </button>
          </div>
        </div>
        {listquizs?.listData?.length === 0 ? (
          <div className="flex justify-center">
            <h1>Không có đề kiểm tra nào</h1>
          </div>
        ) : (
          <>
            <Quizs listquizs={listquizs} getListQuizTeacher={getListQuizTeacher}/>
            <div>
              <PagiantionNew
                onPageChange={handleChange}
                totalCount={listquizs?.total}
                pageSize={10}
                siblingCount={1}
                currentPage={page}
              />
            </div>
          </>
        )}
      </div>
      {/* <ModalCreateExam isOpen={isOpen} onClose={onClose} getExams={getExams} /> */}
      <ModalCreateQuiz isOpen={isOpen} onClose={onClose} getListQuizTeacher={getListQuizTeacher}/>
    </>
  );
};

export default MainQuiz;