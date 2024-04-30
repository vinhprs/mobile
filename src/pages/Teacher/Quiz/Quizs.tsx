import React from 'react';
import TableQuizs from './TableQuizs';

const Quizs = ({listquizs,getListQuizTeacher}:any) => {

  return (
    <div>
      <TableQuizs listquizs={listquizs} getListQuizTeacher={getListQuizTeacher}/>
    </div>
  );
};

export default Quizs;