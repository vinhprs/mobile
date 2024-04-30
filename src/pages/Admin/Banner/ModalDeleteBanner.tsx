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
const ModalDeleteBanner = ({isOpen, onClose}:any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Xoá Banner</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>ándkan</p>
        </ModalBody>

        <ModalFooter>
          <Button bg="#FF6636" mr={3} onClick={onClose} color="white">
              Đóng
          </Button>
          <Button variant='ghost'>Xoá</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDeleteBanner;