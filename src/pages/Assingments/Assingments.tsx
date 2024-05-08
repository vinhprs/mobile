import React, { useEffect, useState } from 'react';
import TitleAssignmet from './TitleAssignmet';
import logo from '../../image/Navbar/logo.svg';
import 'katex/dist/katex.min.css';
import TimeAndQuestions from './TimeAndQuestions';
import QuestionNumber from './QuestionNumber';
import { useLocation } from 'react-router-dom';
import { getExamDetail } from '../../store/actions/exam.action';
import { useAppDispatch } from '../../hooks/appHooks';
import { useSelector } from 'react-redux';
import {
  postExam,
  postExamQuestion,
  selectExamDetail,
  selectExamPost,
} from '../../store/reducers/examSlice';

const Assingments = () => {
  // const [questions, setQuestions] = useState<any>({});
  const dispatch = useAppDispatch();
  const questions: any = useSelector(selectExamDetail);
  const postExamList = useSelector(selectExamPost);
  const search = useLocation().search;
  const params = new URLSearchParams(search).get('id');
  const geExamDetail = async (id: any) => {
    const res: any = await dispatch(getExamDetail(id));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      if (postExamList.answers.length < res.payload?.data.questions?.length) {
        res.payload?.data.questions.map((item: any, index: any) => {
          if (index < res.payload?.data.questions.length - 1) {
            dispatch(
              postExam({
                questionId: 0,
                answer: [0],
              })
            );
          }
        });
      }
    }
  };

  useEffect(() => {
    if (params) {
      geExamDetail(params);
    }
  }, []);
  return (
    <div className="py-[20px] px-[24px] text-[#272829]">
      <div className="flex lg:flex-row gap-2 flex-col items-center justify-around mb-9">
        <img src={logo} alt="logo-icon" className="w-[250px]" />
        <h1 className="uppercase text-[20px] font-semibold">
          {questions?.title}
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-x-3 w-full lg:w-[1100px] mx-auto">
        <div className="flex-1">
          <TitleAssignmet questions={questions} />
        </div>
        <div className="relative lg:fixed h-full w-[300px] right-0 lg:right-[150px] flex flex-col gap-y-3">
          <TimeAndQuestions questions={questions} />
          <QuestionNumber questions={questions} />
        </div>
      </div>
    </div>
  );
};

export default Assingments;
