import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../hooks/appHooks';
import { deleteQuizCorrect, updateQuizCorrect } from '../../../store/reducers/quizSlice';
import ModalEditorEachTime from './Modal/ModalEditorEachTime';

const QuizQuestionCreateEachItem = ({indexAnswer,item,index,answer}:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const contentRef = useRef<HTMLDivElement>(null);
  const updateCorrectAnswerQuiz = (
    indexQuestion: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      dispatch(
        updateQuizCorrect({
          quizIndex: indexQuestion,
          value: +e.target.value,
          title:'create'
        })
      );
    } else {
      console.log('uncheck');

      dispatch(
        deleteQuizCorrect({
          quizIndex: indexQuestion,
          value: +e.target.value,
          title:'create'
        })
      );
    }
  };
  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.innerHTML = answer;
  }, [answer]);
  return (
    <div className="flex gap-x-4 items-center" key={indexAnswer}>
      <div className="check">
        <input
          type="checkbox"
          name="question"
          id=""
          disabled={
            item.answers.length - item.correctAnswers.length === 1 && true
          }
          value={indexAnswer + 1}
          onChange={(e) => updateCorrectAnswerQuiz(index, e)}
        />
      </div>
      <div className="flex-1">
        <div
          onClick={onOpen}
          //   type="text"
          //   name=""
          //   id=""
          // value={answer}
          // onChange={(e) => updateExam(index, indexAnswer, e)}
          ref={contentRef}
          className="w-full h-[38px] px-[8px] leading-[38px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] text-[14px]"
        >
          {/* {answer} */}
        </div>
      </div>
      {/* <ModalEditorEachItem
        isOpen={isOpen}
        onClose={onClose}
        index={index}
        indexAnswer={indexAnswer}
        answer={answer}
      /> */}
      <ModalEditorEachTime isOpen={isOpen} onClose={onClose} index={index} indexQuiz={indexAnswer} quiz={answer} titleRedux="create"/>
    </div>
  );
};

export default QuizQuestionCreateEachItem;