import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../hooks/appHooks';
import { deleteQuizItem, updateQuizExplain } from '../../../store/reducers/quizSlice';
import { useDisclosure } from '@chakra-ui/react';
import { CiTrash } from 'react-icons/ci';
import SunEditor from 'suneditor-react';
import katex from 'katex';
import { buttonList } from '../../../utils/type';
import QuizQuestionCreateEachItem from './QuizQuestionCreateEachItem';
import ModalEditorQuiz from './Modal/ModalEditorQuiz';

const QuizQuestionCreateItem = ({item,index, questions}:any) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  const [valuesDesc, setValuesDesc] = useState(item.explain);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const contentRef = useRef<HTMLDivElement>(null);
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const handleChange = (content: any) => {
    console.log(content);
    setValuesDesc(content);

    // setValueDesc(e);
    dispatch(
      updateQuizExplain({
        quizIndex: index,
        value: content,
      })
    );
  };
  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.innerHTML = item.title;
  }, [item.title]);
  const handleDeleteQuizQuestion = (ind: any) => {
    dispatch(
      deleteQuizItem({
        quizIndex: ind,
      })
    );
  };
  return (
    <div className="flex flex-col gap-y-[16px]">
      <div className="flex flex-col gap-y-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-1 gap-x-3 items-center">
            <h1 className=" w-fit text-[14px] font-semibold">
              Câu hỏi {index + 1}
            </h1>
          </div>
          {questions.length > 1 && (
            <button
              onClick={() => handleDeleteQuizQuestion(index)}
              className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#FF6636]"
            >
              <CiTrash className="text-[16px] text-white" />
            </button>
          )}
        </div>
        <div>
          <div
            // type="text"
            // name=""
            // id=""
            // value={item.title}
            // onChange={(e) => updateTitleExam(index, e)}
            onClick={onOpen}
            ref={contentRef}
            className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] text-[14px] leading-[38px]"
          >
            {/* {item.title} */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[10px]">
        {item.answers.map((answer: string, indexAnswer: number) => (
          <QuizQuestionCreateEachItem
            key={indexAnswer}
            indexAnswer={indexAnswer}
            index={index}
            item={item}
            answer={answer}
          />
        ))}
      </div>
      <div>
        <SunEditor
          setOptions={{
            katex: katex,
            buttonList: buttonList,
          }}
          defaultValue={valuesDesc}
          onChange={handleChange}
          getSunEditorInstance={getSunEditorInstance}
          height=""
          width="100%"
        />
      </div>
      <ModalEditorQuiz
        isOpen={isOpen}
        onClose={onClose}
        index={index}
        title={item.title}
        titleRedux="create"
      />
    </div>
  );
};

export default QuizQuestionCreateItem;