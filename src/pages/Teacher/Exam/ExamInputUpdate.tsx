import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../hooks/appHooks';
import {
  deleteAnswerCorretAnswer,
  updateAnswer,
  updateAnswerCorretAnswer,
} from '../../../store/reducers/examSlice';
import ModalEditorEachItem from './Modal/ModalEditorEachItem';
import { useDisclosure } from '@chakra-ui/react';
interface ExamInputUpdateProps {
  answer: any;
  indexAnswer: number;
  correctAnswers?: any;
  index: any;
}
const ExamInputUpdate = ({
  answer,
  indexAnswer,
  correctAnswers,
  index,
}: ExamInputUpdateProps) => {
  const answerRef = useRef<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const changeAnswerQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateAnswer({
        questionIndex: index,
        answerIndex: indexAnswer,
        value: e.target.value,
      })
    );
  };
  const changeCorrectAnswer = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      dispatch(
        updateAnswerCorretAnswer({
          questionIndex: index,
          value: +e.target.value,
        })
      );
    } else {
      // console.log("uncheck");

      dispatch(
        deleteAnswerCorretAnswer({
          questionIndex: index,
          value: +e.target.value,
        })
      );
    }
  };
  useEffect(() => {
    if (!answerRef.current) return;
    answerRef.current.innerHTML = answer;
  }, [answer]);
  return (
    <div className="flex items-center gap-x-3">
      <div className="check">
        <input
          type="checkbox"
          name="question"
          id=""
          defaultChecked={correctAnswers.find(
            (number: number) => number === indexAnswer + 1
          )}
          value={indexAnswer + 1}
          onChange={(e) => changeCorrectAnswer(index, e)}
        />
      </div>
      <div className="flex-1">
        <div
          // type="text"
          // name=""
          // id=""
          // defaultValue={answer}
          // onChange={changeAnswerQuestion}
          onClick={onOpen}
          ref={answerRef}
          className="w-full h-[38px] leading-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] text-[14px]"
        ></div>
      </div>
      <ModalEditorEachItem
        isOpen={isOpen}
        onClose={onClose}
        index={index}
        indexAnswer={indexAnswer}
        answer={answer}
      />
    </div>
  );
};

export default ExamInputUpdate;
