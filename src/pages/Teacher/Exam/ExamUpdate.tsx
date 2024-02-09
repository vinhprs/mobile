import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/appHooks';
import { getExamDetail } from '../../../store/actions/exam.action';
import { useSelector } from 'react-redux';
import {
  selectExam,
  selectExamDetail,
  selectExamTemp,
  setUpdateExam,
} from '../../../store/reducers/examSlice';
import moment from 'moment';
import Select from './Select';
import QuestionUpdate from './QuestionUpdate';

const ExamUpdate = ({ item }: any) => {
  //   console.log("🚀 ~ file: ExamUpdate.tsx:4 ~ ExamUpdate ~ item:", item);
  const dispatch = useAppDispatch();
  const exam: any = useSelector(selectExamTemp);
  const getDetailExam = async () => {
    const response: any = await dispatch(getExamDetail(item._id));
    if (response.meta.requestStatus === 'fulfilled' && response.payload) {
      console.log(
        '🚀 ~ file: ExamUpdate.tsx:12 ~ getDetailExam ~ response:',
        response
      );
    }
  };
  useEffect(() => {
    getDetailExam();
  }, []);
  const addQuestion = () => {
    dispatch(
      setUpdateExam({
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
      <h1 className="text-[20px] font-medium mb-3">Cập nhập câu hỏi đề thi</h1>
      <div className="mb-[10px]">
        <span>
          <span className="font-semibold"> Thời gian tạo:</span>{' '}
          {moment(exam?.createdAt).format('DD/MM/YYYY')}
        </span>
      </div>
      <div className="flex flex-col gap-y-4">
        {exam?.questions?.map((question: any, index: number) => (
          // eslint-disable-next-line react/jsx-key
          <QuestionUpdate question={question} index={index} />
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

export default ExamUpdate;
