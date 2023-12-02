import React from "react";
import { v4 as uuid4 } from "uuid";
import parse from "html-react-parser";
const ExamDetail = ({ examDetail }: any) => {
  // alert(parse(examDetail?.title).toString());

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-[24px] font-semibold">
        {parse(`${examDetail?.title}`)}
      </h1>
      <div>
        {examDetail?.questions?.map((question: any, index: any) => (
          <div key={question._id} className="flex flex-col gap-y-3">
            <div className="flex gap-x-1">
              <h1 className="">{index + 1})</h1>
              {parse(`${question.title}`)}
            </div>
            <div>
              {question.answerType === "Chọn 1" ? (
                <div className="flex flex-col gap-y-2">
                  {question?.answers?.map((answer: any, indexAnswer: any) => {
                    const id = uuid4();
                    return (
                      <div className="radio-check">
                        <input type="radio" id={id} name={question.title} />
                        <label htmlFor={id}>{parse(`${answer}`)}</label>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col gap-y-2">
                  {question?.answers?.map((answer: any, indexAnswer: any) => {
                    const id = uuid4();
                    return (
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

export default ExamDetail;
