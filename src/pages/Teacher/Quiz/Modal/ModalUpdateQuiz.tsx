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
import TabQuiz from '../TabQuiz/TabQuiz';
import { useSelector } from 'react-redux';
import { selectDetailQuiz, selectDetailQuizTemp, selectQuiz } from '../../../../store/reducers/quizSlice';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { getDetailQuiz, updateQuiz } from '../../../../store/actions/quiz.action';
const ModalUpdateQuiz = ({
  getListQuizTeacher,
  isOpenUpdate,
  item,
  onCloseUpdate,
}:any) => {
  const [isLoading,setIsLoading] = useState(false);
  const quiz = useSelector(selectDetailQuizTemp);
  console.log('🚀 ~ quiz:', quiz);
  const getQuizDetailItem = async()=>{
    const res = await dispatch(getDetailQuiz(item._id));
    if(res.meta.requestStatus === 'fulfilled'){
      setIsLoading(false);
    }
  };
  const dispatch = useAppDispatch();
  const update = async () => {
    const payload = {
      id: item?._id,
      params: quiz,
    };
    const respons = await dispatch(updateQuiz(payload));
    if (respons.payload && respons.meta.requestStatus === 'fulfilled') {
      onCloseUpdate();
      getListQuizTeacher(1);
    }
  };
  useEffect(()=>{
    getQuizDetailItem(); 
  },[]);
  return (
    <Modal
      isOpen={isOpenUpdate}
      onClose={onCloseUpdate}
      isCentered
      id={item?.title}
      size="4xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cập nhập đề thi</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TabQuiz item={item}/>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="#FF6636"
            color="white"
            _hover={{ bg: '#fe5c2b' }}
            mr={3}
            onClick={onCloseUpdate}
          >
            Đóng
          </Button>
          <Button variant="ghost" onClick={update}>
            Cập nhập đề thi
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalUpdateQuiz;