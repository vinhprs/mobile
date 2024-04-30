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
import React from 'react';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { PiWarningCircleThin } from 'react-icons/pi';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { deleteQuiz } from '../../../../store/actions/quiz.action';

const ModalDeleteQuiz = ({isOpenDelete,onCloseDelete,item,getListQuizTeacher}:any) => {
  const dispatch = useAppDispatch();
  const deleteExamItem = async () => {
    const res = await dispatch(deleteQuiz(item?._id));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      onCloseDelete();
      getListQuizTeacher(1);
      console.log(res);
    }
  };
  const onClickDelete = () => {
    deleteExamItem();
  };
  return (
    <Modal
      id={item?.title}
      isOpen={isOpenDelete}
      onClose={onCloseDelete}
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" alignItems="center" gap="0 10px">
          <MdOutlineDeleteSweep className="text-[22px]" />
          <span className="text-[20px]">Xóa đề thi</span>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex items-center gap-x-3 justify-center">
            <PiWarningCircleThin className="text-[24px] text-[#E34444]" />
            <span className="font-medium">
              Bạn thực sự muốn xóa đề thi{' '}
              <span className="text-[#FF6636]">{item?.title}</span>
            </span>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            bg="#FF6636"
            color="white"
            _hover={{ bg: '#fe5c2b' }}
            mr={3}
            onClick={onCloseDelete}
          >
            Đóng
          </Button>
          <Button variant="ghost" onClick={onClickDelete}>
            Xóa
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDeleteQuiz;