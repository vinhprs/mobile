import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { deleteQuizCorrect, updateQuizCorrect } from '../../../../store/reducers/quizSlice';
import ModalEditorEachTime from '../Modal/ModalEditorEachTime';

const QuizInputUpdate = ({
  answer,
  indexAnswer,
  correctAnswers,
  index,
}:any) => {
  const answerRef = useRef<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const changeCorrectAnswer = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      dispatch(
        updateQuizCorrect({
          quizIndex: index,
          value: +e.target.value,
          title:'update'
        })
      );
    } else {
      // console.log("uncheck");

      dispatch(
        deleteQuizCorrect({
          quizIndex: index,
          value: +e.target.value,
          title:'update'
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
      <ModalEditorEachTime
        isOpen={isOpen}
        onClose={onClose}
        index={index}
        indexQuiz={indexAnswer}
        quiz={answer}
        titleRedux="update"
      />
    </div>
  );
};

export default QuizInputUpdate;