import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ModalEditSection = ({
  isOpen,
  onClose,
  itemSection,
  setSections,
  sections,
  index,
}: any) => {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    console.log(value);
    // setSections();
    setSections(
      sections.map((item: any, indexSection: any) => {
        if (index === indexSection) {
          return { ...item, sectionName: value };
        } else {
          return item;
        }
      })
    );
    onClose();
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="18px" color="#1D2026">
            Chỉnh sửa tiêu đề khóa học
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px]">Tiêu đề</span>
              <input
                type="text"
                onChange={(e: any) => setValue(e.target.value)}
                className="w-full px-[18px] py-[13px] border-[1px] text-[#1D2026] border-[#E9EAF0] outline-none placeholder:text-[#8C94A3]"
                placeholder="Nhập tiêu đề..."
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="flex justify-between w-full">
              <Button onClick={onClose}>Đóng</Button>
              <Button
                onClick={handleSubmit}
                bg="#FF6636"
                color="white"
                _hover={{ bg: "#fb5a2a" }}
              >
                Lưu
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalEditSection;
