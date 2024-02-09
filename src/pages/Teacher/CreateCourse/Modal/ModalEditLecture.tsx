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
import React, { useState } from 'react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { updateLectureName } from '../../../../store/reducers/createCourseSlice';

const ModalEditLecture = ({
  isOpen,
  onClose,
  lectures,
  setSections,
  itemLecture,
  sections,
  index,
  indexLecture,
}: any) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    console.log(value);
    // const update = sections.map((section: any, indexSection: any) => {
    //   if (index === indexSection) {
    //     section.lectures = section.lectures.map(
    //       (lecture: any, indexLec: any) => {
    //         if (indexLecture === indexLec) {
    //           lecture.lectureName = value;
    //         }
    //         return lecture;
    //       }
    //     );
    //   }
    //   return section;
    // });
    // setSections(update);
    dispatch(
      updateLectureName({
        sectionIndex: index,
        lectureIndex: indexLecture,
        value: value,
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
            Chỉnh sửa tên bài học
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px]">Tên bài học</span>
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-[18px] py-[13px] border-[1px] text-[#1D2026] border-[#E9EAF0] outline-none placeholder:text-[#8C94A3]"
                placeholder="Nhập tên bài học..."
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
                _hover={{ bg: '#fb5a2a' }}
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

export default ModalEditLecture;
