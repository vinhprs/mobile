import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { updateQuizAnswer } from '../../../../store/reducers/quizSlice';
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
import { buttonList } from '../../../../utils/type';
import katex from 'katex';
const ModalEditorEachTime = ({isOpen, onClose, index,indexQuiz,quiz,titleRedux}:any) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const [value, setValue] = useState('');
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
      updateQuizAnswer({
        quizIndex: indexQuestion,
        answerIndex: indexAnswer,
        value: value,
        title:titleRedux
      })
    );
    onClose();
  };
  useEffect(()=>{
    setValue(quiz);
  },[]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Nhập câu trả lời {indexQuiz+1}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SunEditor
            setOptions={{
              katex: katex,

              buttonList: buttonList,
            }}
            defaultValue={quiz}
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
            onClick={() => updateExam(index, indexQuiz, value)}
            variant="ghost"
          >
            Tạo câu trả lời
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditorEachTime;