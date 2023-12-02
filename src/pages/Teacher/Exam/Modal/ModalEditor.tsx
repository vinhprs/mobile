import React, { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import SunEditor from "suneditor-react";
import suneditor from "suneditor";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";
import "katex/dist/katex.min.css";
import { useAppDispatch } from "../../../../hooks/appHooks";
import { updateAnswerTitle } from "../../../../store/reducers/examSlice";
import { buttonList } from "../../../../utils/type";

const ModalEditor = ({ isOpen, onClose, index, title }: any) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const [value, setValue] = useState(title);
  const handleChange = (content: any) => {
    console.log(content);
    setValue(content);
  };
  const dispatch = useAppDispatch();
  const updateTitleExam = (indexQuestion: number, value: any) => {
    dispatch(
      updateAnswerTitle({
        questionIndex: indexQuestion,
        value: value,
      })
    );
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} id="modal" isCentered size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Nhập câu hỏi</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SunEditor
            setOptions={{
              katex: katex,
              buttonList: buttonList,
            }}
            defaultValue={title}
            onChange={handleChange}
            getSunEditorInstance={getSunEditorInstance}
            height="300px"
          />
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            onClick={onClose}
            _hover={{ bg: "#ff511c" }}
            bg="#FF6636"
            color="white"
          >
            Đóng
          </Button>
          <Button onClick={() => updateTitleExam(index, value)} variant="ghost">
            Tạo câu hỏi
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditor;
