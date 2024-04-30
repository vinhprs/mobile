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
  Spinner,
} from '@chakra-ui/react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectDetailQuiz } from '../../../../store/reducers/quizSlice';
import { getDetailQuiz } from '../../../../store/actions/quiz.action';
import QuizDetail from '../QuizDetail';
const ModalDetailQuiz = ({isOpenDetail,onCloseDetail,item}:any) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const quizDetail = useSelector(selectDetailQuiz);
  const getQuizDetailItem = async()=>{
    const res = await dispatch(getDetailQuiz(item._id));
    if(res.meta.requestStatus === 'fulfilled'){
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    if(isOpenDetail){
      setIsLoading(true);
      getQuizDetailItem();
    }
  },[isOpenDetail]);
  return (
    <Modal
      isOpen={isOpenDetail}
      size="4xl"
      onClose={onCloseDetail}
      isCentered
      id={item?.title}
    >
      <ModalOverlay />
      <ModalContent h="600px">
        <ModalHeader>Xem đề thi {item?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH="600px" overflowY="scroll">
          {isLoading ? (
            <div>
              <Spinner color="red.500" />
            </div>
          ) : (
            <QuizDetail quizDetail={quizDetail} />
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            bg="#FF6636"
            color="#FFFFFF"
            _hover={{ bg: '#fb5b2a' }}
            borderRadius="none"
            onClick={onCloseDetail}
          >
          Đóng
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDetailQuiz;