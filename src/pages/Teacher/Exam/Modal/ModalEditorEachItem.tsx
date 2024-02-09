import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import SunEditor from 'suneditor-react';
import suneditor from 'suneditor';
import 'suneditor/dist/css/suneditor.min.css';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { updateAnswer } from '../../../../store/reducers/examSlice';
import { buttonList } from '../../../../utils/type';

const ModalEditorEachItem = ({
  isOpen,
  onClose,
  index,
  indexAnswer,
  answer,
}: any) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const [value, setValue] = useState(answer);
  const dispatch = useAppDispatch();
  const handleChange = (content: any) => {
    console.log(content);
    setValue(content);
  };
  const updateExam = (
    indexQuestion: number,
    indexAnswer: number,
    value: any
  ) => {
    dispatch(
      updateAnswer({
        questionIndex: indexQuestion,
        answerIndex: indexAnswer,
        value: value,
      })
    );
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Nhập câu trả lời</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SunEditor
            setOptions={{
              katex: katex,

              buttonList: buttonList,
            }}
            defaultValue={answer}
            onChange={handleChange}
            getSunEditorInstance={getSunEditorInstance}
            height="300px"
          />
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            onClick={onClose}
            _hover={{ bg: '#ff511c' }}
            bg="#FF6636"
            color="white"
          >
            Close
          </Button>
          <Button
            onClick={() => updateExam(index, indexAnswer, value)}
            variant="ghost"
          >
            Tạo câu trả lời
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditorEachItem;
