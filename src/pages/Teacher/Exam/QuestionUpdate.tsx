import React, { useEffect, useRef, useState } from 'react';
import SunEditor from 'suneditor-react';
import suneditor from 'suneditor';
import 'suneditor/dist/css/suneditor.min.css';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import Select from './Select';
import { useAppDispatch } from '../../../hooks/appHooks';
import ExamInputUpdate from './ExamInputUpdate';

import { useDebounce } from '../../../hooks/useDebounce';
import {
  deleteQuestion,
  updateAnswerExplain,
  updateAnswerTitle,
} from '../../../store/reducers/examSlice';
import { BsFillTrashFill } from 'react-icons/bs';
import ModalEditor from './Modal/ModalEditor';
import { useDisclosure } from '@chakra-ui/react';
import { buttonList } from '../../../utils/type';
interface QuestionUpdateProps {
  question: any;
  index: any;
}
const QuestionUpdate = ({ question, index }: QuestionUpdateProps) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const [types, setTypes] = useState(question.questionLevel);
  const [valuesExplain, setValuesExplain] = useState(question.explain);
  console.log(
    '🚀 ~ file: QuestionUpdate.tsx:35 ~ QuestionUpdate ~ question.explain:',
    question.explain
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.innerHTML = question.title;
  }, [question.title]);
  const deleteQuestionExam = () => {
    dispatch(
      deleteQuestion({
        questionIndex: index,
        type:'update'
      })
    );
  };
  const handleChange = (content: any) => {
    console.log(content);
    setValuesExplain(content);

    // setValueDesc(e);
    dispatch(
      updateAnswerExplain({
        questionIndex: index,
        value: content,
        type:'update'
      })
    );
  };
  useEffect(() => {
    setValuesExplain(question.explain);
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
              <Select
                arraySelect={[
                  { id: 1, name: 'Nhận biết' },
                  { id: 2, name: 'Thông hiểu' },
                  { id: 3, name: 'Vận dụng' },
                  { id: 4, name: 'Vận dụng cao' },
                ]}
                title={question.questionLevel}
                classes="flex-1 h-full gap-y-0 w-fit"
                classesMini="w-[150px]"
                type="question"
                typeApi="select"
                types={types}
                setTypes={setTypes}
                dispatch={dispatch}
                index={index}
                typeRedux='update'
                // selectTitle="Mức độ"
              />
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
          {question.answers.map((answer: any, indexAnswer: number) => (
            <ExamInputUpdate
              key={indexAnswer}
              answer={answer}
              indexAnswer={indexAnswer}
              correctAnswers={question.correctAnswers}
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
        <ModalEditor
          isOpen={isOpen}
          onClose={onClose}
          index={index}
          title={question.title}
          typeRedux="update"
        />
      )}
    </>
  );
};

export default QuestionUpdate;
