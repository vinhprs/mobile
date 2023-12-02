import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { useAppDispatch } from "../../../../hooks/appHooks";
import { getExamDetail } from "../../../../store/actions/exam.action";
import { useSelector } from "react-redux";
import {
  selectExamDetail,
  setExamDetail,
} from "../../../../store/reducers/examSlice";
import ExamDetail from "../ExamDetail";
interface DetailProp {
  isOpenDetail: boolean;
  onCloseDetail: () => void;
  item: any;
}
const ModalExamDetail = ({ isOpenDetail, onCloseDetail, item }: DetailProp) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const examDetail = useSelector(selectExamDetail);

  const getDetailExam = async () => {
    const response: any = await dispatch(getExamDetail(item._id));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      console.log(response);
      setIsLoading(false);
      dispatch(setExamDetail(response.payload?.data));
    }
  };
  useEffect(() => {
    if (isOpenDetail) {
      setIsLoading(true);
      getDetailExam();
    }
  }, [isOpenDetail]);
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
            <ExamDetail examDetail={examDetail} />
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            bg="#FF6636"
            color="#FFFFFF"
            _hover={{ bg: "#fb5b2a" }}
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

export default ModalExamDetail;
