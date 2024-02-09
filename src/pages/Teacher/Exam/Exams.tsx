import React, { useEffect, useState } from 'react';
import FilterExam from './FilterExam';
import TableExam from './TableExam';
import { useAppDispatch } from '../../../hooks/appHooks';
import { getExam } from '../../../store/actions/exam.action';
import { useSelector } from 'react-redux';
import { examList, selectExams } from '../../../store/reducers/examSlice';

const Exams = ({ exams, getExams }: any) => {
  //   const dispatch = useAppDispatch();
  //   const exams = useSelector(selectExams);

  //   const getExams = async () => {
  //     const res: any = await dispatch(getExam({}));
  //     if (res.meta.requestStatus === "fulfilled" && res.payload) {
  //       console.log(res);
  //       dispatch(examList(res.payload.data));
  //     }
  //   };
  //   useEffect(() => {
  //     getExams();
  //   }, []);
  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <FilterExam getExams={getExams} />
      </div>
      <div>
        <TableExam exams={exams} getExams={getExams} />
      </div>
    </div>
  );
};

export default Exams;
