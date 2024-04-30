import React, { useEffect, useState } from 'react';
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
import Question from '../Question';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { resetCreateQuiz, selectQuiz, updateTitle } from '../../../../store/reducers/quizSlice';
import { createQuiz } from '../../../../store/actions/quiz.action';
const ModalCreateQuiz = ({isOpen,onClose,getListQuizTeacher}:any) => {
  const dispatch = useAppDispatch();
  const quiz = useSelector(selectQuiz);
  console.log('🚀 ~ ModalCreateQuiz ~ quiz:', quiz);
  const [types, setTypes] = useState<any>('');
  const [loading, setLoading] = useState(false);
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTitle(e.target.value));
  };
  const postQuiz = async () => {
    const response = await dispatch(createQuiz(quiz));
    if (response.meta.requestStatus === 'fulfilled' && response.payload) {
      setLoading(false);
      onClose();
      getListQuizTeacher(1);
      console.log(response);
    }
  };
  const clickPostQuiz = () => {
    setLoading(true);
    postQuiz();
    dispatch(
      resetCreateQuiz({
        questions: [
          {
            title: '',
            answers: ['', '', '', ''],
            correctAnswers: [],
            explain: '',
            questionLevel: 'Nhận biết',
            answerType: '',
          },
        ],
        title: '',
      })
    );
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="1200px" h="600px">
        <ModalHeader>Tạo quizz</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH="600px" overflowY="scroll">
          <div className='flex flex-col gap-y-3'>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px]">Tiêu đề</span>
              <input
                type="text"
                onChange={changeTitle}
                className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566]"
              />
            </div>
            <div>
              <Question></Question>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="#F5F7FA"
            color="#1D2026"
            mr={3}
            onClick={onClose}
            borderRadius="none"
          >
            Hủy tạo
          </Button>
          <Button
            bg="#FF6636"
            color="#FFFFFF"
            _hover={{ bg: '#fb5b2a' }}
            borderRadius="none"
            isLoading={loading}
            onClick={clickPostQuiz}
          >
            Tạo Quizz
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateQuiz;