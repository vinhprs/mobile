import React, { useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import suneditor from "suneditor";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";
import "katex/dist/katex.min.css";
import { useAppDispatch } from "../../../hooks/appHooks";
import Select from "./Select";
import ModalEditor from "./Modal/ModalEditor";
import { useDisclosure } from "@chakra-ui/react";
import QuestionCreateEachItem from "./QuestionCreateEachItem";
import { CiTrash } from "react-icons/ci";
import {
  deleteQuestion,
  updateAnswerExplain,
} from "../../../store/reducers/examSlice";
import { buttonList } from "../../../utils/type";

const QuestionCreateItem = ({ item, index, questions }: any) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  const [valuesDesc, setValuesDesc] = useState(item.explain);
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const handleChange = (content: any) => {
    console.log(content);
    setValuesDesc(content);

    // setValueDesc(e);
    dispatch(
      updateAnswerExplain({
        questionIndex: index,
        value: content,
      })
    );
  };
  const dispatch = useAppDispatch();
  const [types, setTypes] = useState<any>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const contentRef = useRef<HTMLDivElement>(null);
  //   const contentRefDesc = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.innerHTML = item.title;
  }, [item.title]);

  const handleDeleteQuestion = (ind: any) => {
    dispatch(
      deleteQuestion({
        questionIndex: ind,
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
            <Select
              arraySelect={[
                { id: 1, name: "Nhận biết" },
                { id: 2, name: "Thông hiểu" },
                { id: 3, name: "Vận dụng" },
                { id: 4, name: "Vận dụng cao" },
              ]}
              title="Mức độ"
              classes="flex-1 h-full gap-y-0 w-fit"
              classesMini="w-[150px]"
              type="question"
              typeApi="select"
              types={types}
              setTypes={setTypes}
              dispatch={dispatch}
              index={index}
              // selectTitle="Mức độ"
            />
          </div>
          {questions.length > 1 && (
            <button
              onClick={() => handleDeleteQuestion(index)}
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
          <QuestionCreateEachItem
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
      <ModalEditor
        isOpen={isOpen}
        onClose={onClose}
        index={index}
        title={item.title}
      />
    </div>
  );
};

export default QuestionCreateItem;
