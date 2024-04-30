import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  
} from '@chakra-ui/react';
import React from 'react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { updateAddQuiz } from '../../../../store/reducers/createCourseSlice';
import ItemQuizCreate from '../ItemQuizCreate';

const ModalUploadFile = ({ isOpen, onClose,lectures,itemLecture,sections,index,indexLecture }: any) => {
  console.log('🚀 ~ ModalUploadFile ~ indexLecture:', indexLecture);
  console.log('🚀 ~ ModalUploadFile ~ lectures:', lectures);
  const dispatch = useAppDispatch();
  const addQuiz = ()=>{
    dispatch(
      updateAddQuiz({
        sectionIndex:index,
        lectureIndex:indexLecture,
        item:{
          quizzId:0,
          questionTime:0
        }
      })
    );
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="18px" color="#1D2026">
            Đăng tải Quiz
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px]">File</span>
              <div className='flex flex-col gap-2'>
                {lectures.lectures[indexLecture]?.quizzs&&lectures.lectures[indexLecture]?.quizzs.map((quiz:any,indexQuiz:number)=>(
                  <ItemQuizCreate key={index} indexQuiz={indexQuiz} index={index} indexLecture={indexLecture}/>
                ))}
              </div>
            </div>
            <Button onClick={addQuiz} bg="#FF6636" color="white" _hover={{ bg: '#fb5a2a' }}>
                Thêm Quizz
            </Button>
          </ModalBody>
            
          <ModalFooter>
            <div className="flex justify-between w-full">
              <Button onClick={onClose}>Đóng</Button>
              <Button onClick={onClose} bg="#FF6636" color="white" _hover={{ bg: '#fb5a2a' }}>
                Lưu
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalUploadFile;
