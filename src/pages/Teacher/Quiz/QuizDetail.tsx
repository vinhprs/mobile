import React from 'react';
import { v4 as uuid4 } from 'uuid';
import parse from 'html-react-parser';
const QuizDetail = ({quizDetail}:any) => {
  console.log('🚀 ~ QuizDetail ~ quizDetail:', quizDetail);
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-[24px] font-semibold">
        {parse(`${quizDetail?.title}`)}
      </h1>
      <div>
        {quizDetail?.questions?.map((question: any, index: any) => (
          <div key={question._id} className="flex flex-col gap-y-3">
            <div className="flex gap-x-1">
              <h1 className="">{index + 1})</h1>
              <div>{parse(`${question.title}`)}</div>
            </div>
            <div>
              {question.answerType === 'Chọn 1' ? (
                <div className="flex flex-col gap-y-2">
                  {question?.answers?.map((answer: any, indexAnswer: any) => {
                    const id = uuid4();
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className="radio-check">
                        <input type="radio" id={id} name={question.title} disabled={indexAnswer+1 === question?.correctAnswers[0] ? false : true } checked={indexAnswer+1 === question?.correctAnswers[0]}/>
                        <label htmlFor={id}>{parse(`${answer}`)}</label>
                      </div>
                    );
                  })}
                  <div className='flex items-center gap-x-2'>
                    <h1>Đáp án:</h1>
                    <div className='font-semibold'>{parse(`${question?.explain}`)}</div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-y-2">
                  {question?.answers?.map((answer: any, indexAnswer: any) => {
                    const id = uuid4();
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className="check flex items-center gap-x-[10px]">
                        <input type="checkbox" id={id} />
                        <label htmlFor={id}>{parse(`${answer}`)}</label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizDetail;