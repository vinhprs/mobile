import React from 'react';
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
import TabUpdate from '../TabUpdate';
import { useSelector } from 'react-redux';
import {
  selectExam,
  selectExamTemp,
} from '../../../../store/reducers/examSlice';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { updateExam } from '../../../../store/actions/exam.action';
interface UpdateProp {
  isOpenUpdate: boolean;
  onCloseUpdate: () => void;
  item: any;
  getExams: any;
}
const ModalUpdateExam = ({
  getExams,
  isOpenUpdate,
  item,
  onCloseUpdate,
}: UpdateProp) => {
  const exam = useSelector(selectExamTemp);
  const dispatch = useAppDispatch();
  const update = async () => {
    const payload = {
      id: item?._id,
      params: exam,
    };
    const respons = await dispatch(updateExam(payload));
    if (respons.payload && respons.meta.requestStatus === 'fulfilled') {
      onCloseUpdate();
      getExams();
    }
  };
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
          <TabUpdate item={item} />
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

export default ModalUpdateExam;
