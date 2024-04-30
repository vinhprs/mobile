import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectDetailQuizTemp, setAddQuiz, updateAddQuestion } from '../../../../store/reducers/quizSlice';
import { getDetailQuiz } from '../../../../store/actions/quiz.action';
import moment from 'moment';
import QuizUpdateItem from './QuizUpdateItem';

const QuizUpdate = ({item}:any) => {
  const dispatch = useAppDispatch();
  const quizs:any = useSelector(selectDetailQuizTemp);
  const getQuizDetail= async()=>{
    const res = await dispatch(getDetailQuiz(item?._id));
    if(res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ getQuizDetail ~ res:', res);
        
    }
  };
  useEffect(() => {
    getQuizDetail();
  }, []);
  const addQuiz = () => {
    dispatch(
      updateAddQuestion({
        title: '',
        answers: ['', '', '', ''],
        correctAnswers: [],
        explain: '',
        questionLevel: 'Nhận biết',
      })
    );
  };
  return (
    <div>
      <h1 className="text-[20px] font-medium mb-3">Cập nhập câu hỏi quizz</h1>
      <div className="mb-[10px]">
        <span>
          <span className="font-semibold"> Thời gian tạo:</span>{' '}
          {moment(quizs?.createdAt).format('DD/MM/YYYY')}
        </span>
      </div>
      <div className="flex flex-col gap-y-4">
        {quizs?.questions?.map((quizItem: any, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <QuizUpdateItem quiz={quizItem} index={index} />
        ))}
      </div>
      <button
        onClick={addQuiz}
        className="bg-[#FF6636] text-white text-[14px] px-[12px] py-[8px] mt-[24px]"
      >
        Thêm câu hỏi
      </button>
    </div>
  );
};

export default QuizUpdate;