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
import { updateLectureType } from "../../../../store/reducers/createCourseSlice";

const ModalUploadVideo = ({
  isOpen,
  onClose,
  lectures,
  // setSections,
  itemLecture,
  sections,
  index,
  indexLecture,
}: any) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    // const update = sections.map((section: any, indexSection: any) => {
    //   if (index === indexSection) {
    //     section.lectures = section.lectures.map(
    //       (lecture: any, indexLec: any) => {
    //         if (indexLecture === indexLec) {
    //           lecture.lectureType = "VIDEO";
    //           lecture.url = value;
    //         }
    //         return lecture;
    //       }
    //     );
    //   }
    //   return section;
    // });
    // setSections(update);
    dispatch(
      updateLectureType({
        sectionIndex: index,
        lectureIndex: indexLecture,
        value: "VIDEO",
        urlValue: value,
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
            Đăng tải video
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-y-2">
              <span className="text-[14px]">Link url</span>
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                className="w-full px-[18px] py-[13px] border-[1px] text-[#1D2026] border-[#E9EAF0] outline-none placeholder:text-[#8C94A3]"
                placeholder="Link url..."
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

export default ModalUploadVideo;
