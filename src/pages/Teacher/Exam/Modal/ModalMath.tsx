import React, { useState } from "react";
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
import EquationEditor from "equation-editor-react";
interface ModalMathProps {
  isOpen: boolean;
  onClose: () => void;
  equation?: any;
  setEquation?: any;
  setValue?: any;
}
const ModalMath = ({
  isOpen,
  onClose,
  equation,
  setEquation,
  setValue,
}: ModalMathProps) => {
  const onChange = () => {
    setValue((prev: any) => prev + String.raw`${equation}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {" "}
          <div className="flex items-center min-h-[40px]  p-2 border-[1px] border-black rounded-lg">
            <EquationEditor
              value={equation}
              onChange={setEquation}
              autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
              autoOperatorNames="sin cos tan"
            />
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Đóng
          </Button>
          <Button onClick={onChange} variant="ghost">
            Tạo công thức
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalMath;
