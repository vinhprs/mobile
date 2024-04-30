import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { deleteItemQuizUpdate, deleteQuizItem, explainUpdate, updateQuizExplain } from '../../../../store/reducers/quizSlice';
import { BsFillTrashFill } from 'react-icons/bs';
import SunEditor from 'suneditor-react';
import katex from 'katex';
import { buttonList } from '../../../../utils/type';

import ModalEditorQuiz from '../Modal/ModalEditorQuiz';
import QuizInputUpdate from './QuizInputUpdate';
const QuizUpdateItem = ({quiz,index}:any) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const [valuesExplain, setValuesExplain] = useState(quiz.explain);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.innerHTML = quiz.title;
  }, [quiz.title]);
  const deleteQuestionExam = () => {
    dispatch(
      deleteItemQuizUpdate({
        quizIndex: index,
      })
    );
  };
  const handleChange = (content: any) => {
    console.log(content);
    setValuesExplain(content);

    // setValueDesc(e);
    dispatch(
      explainUpdate({
        quizIndex: index, 
        value: content,
      })
    );
  };
  useEffect(() => {
    setValuesExplain(quiz.explain);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center gap-x-3 justify-between">
              <h1 className=" w-fit text-[14px] font-semibold">
                Câu hỏi {index + 1}
              </h1>
            </div>
            <div className="flex items-center gap-x-3">
              <button
                onClick={deleteQuestionExam}
                className="w-[40px] h-[40px] flex justify-center items-center bg-[#FF6636] rounded-full"
              >
                <BsFillTrashFill className="text-white text-[20px]" />
              </button>
            </div>
          </div>
          <div
            // type="text"
            // name=""
            // id=""
            // defaultValue={question.title}
            // onChange={(e) => (index, e)}
            // onChange={changeTitleQuestion}
            onClick={onOpen}
            ref={contentRef}
            className="w-full h-[38px] leading-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] text-[14px]"
          ></div>
        </div>
        <div className="flex flex-col gap-y-4">
          {quiz.answers.map((answer: any, indexAnswer: number) => (
            <QuizInputUpdate
              key={indexAnswer}
              answer={answer}
              indexAnswer={indexAnswer}
              correctAnswers={quiz.correctAnswers}
              index={index}
            />
          ))}
        </div>
        <div>
          <SunEditor
            setOptions={{
              katex: katex,
              buttonList: buttonList,
            }}
            defaultValue={valuesExplain}
            onChange={handleChange}
            getSunEditorInstance={getSunEditorInstance}
            height=""
            width="100%"
          />
        </div>
      </div>
      {isOpen && (
        <ModalEditorQuiz
          isOpen={isOpen}
          onClose={onClose}
          index={index}
          title={quiz.title}
          titleRedux="update"
        />
      )}
    </>
  );
};

export default QuizUpdateItem;