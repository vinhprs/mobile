import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useAppDispatch } from "../../../../hooks/appHooks";
interface DetailProp {
  isOpenDetail: boolean;
  onCloseDetail: () => void;
  id: number;
}
const ModalExamDetail = ({ isOpenDetail, onCloseDetail, id }: DetailProp) => {
  const dispatch = useAppDispatch();
  return (
    <Modal isOpen={isOpenDetail} onClose={onCloseDetail}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{id}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseDetail}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalExamDetail;
