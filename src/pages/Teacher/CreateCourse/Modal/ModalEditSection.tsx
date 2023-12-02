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
import { useAppDispatch } from "../../../../hooks/appHooks";
import {
  selectCoursesCreated,
  updateSectionName,
} from "../../../../store/reducers/createCourseSlice";
import { useSelector } from "react-redux";

const ModalEditSection = ({ isOpen, onClose, index }: any) => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const course = useSelector(selectCoursesCreated);
  const handleSubmit = () => {
    dispatch(
      updateSectionName({
        sectionIndex: index,
        value: value,
      })
    );
    console.log(value);

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
                defaultValue={course.sections[index].sectionName}
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
