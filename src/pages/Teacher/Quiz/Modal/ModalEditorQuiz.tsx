import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { updateQuizTitle } from '../../../../store/reducers/quizSlice';
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
import katex from 'katex';
import { buttonList } from '../../../../utils/type';
const ModalEditorQuiz = ({isOpen,onClose,index,title,titleRedux}:any) => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const [value, setValue] = useState('');
  const handleChange = (content: any) => {
    console.log(content);
    setValue(content);
  };
  const dispatch = useAppDispatch();
  const updateTitleQuiz = (indexQuestion: number, value: any) => {
    dispatch(
      updateQuizTitle({
        quizIndex: indexQuestion,
        value: value,
        title:titleRedux
      })
    );
    onClose();
  };
  useEffect(()=>{
    setValue(title);
  },[]);
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
            _hover={{ bg: '#ff511c' }}
            bg="#FF6636"
            color="white"
          >
          Đóng
          </Button>
          <Button onClick={() => updateTitleQuiz(index, value)} variant="ghost">
          Tạo câu hỏi
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditorQuiz;