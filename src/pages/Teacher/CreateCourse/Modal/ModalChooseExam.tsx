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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectExams } from "../../../../store/reducers/examSlice";
import { useAppDispatch } from "../../../../hooks/appHooks";
import { getExam } from "../../../../store/actions/exam.action";
import { MdKeyboardArrowDown } from "react-icons/md";
import { updateLectureExamId } from "../../../../store/reducers/createCourseSlice";
const ModalChooseExam = ({
  isOpen,
  onClose,
  lectures,
  // setSections,
  itemLecture,
  sections,
  index,
  indexLecture,
}: any) => {
  const exams: any = useSelector(selectExams);
  const [valueExam, setValueExam] = useState("Đề thi");
  const [valueExamId, setValueExamId] = useState(0);
  const dispatch = useAppDispatch();
  const getExamsList = async () => {
    const res = await dispatch(getExam({}));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
    }
  };
  const handleClick = (id: number, title: string) => {
    setValueExam(title);
    setValueExamId(id);
    // dispatch(
    //   updateLectureExamId({
    //     sectionIndex: index,
    //     lectureIndex: indexLecture,
    //     value: id,
    //   })
    // );
  };
  const handleSubmit = () => {
    dispatch(
      updateLectureExamId({
        sectionIndex: index,
        lectureIndex: indexLecture,
        value: valueExamId,
      })
    );
  };
  useEffect(() => {
    getExamsList();
  }, []);
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chọn đề thi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Menu>
              <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}>
                {valueExam}
              </MenuButton>
              <MenuList>
                {exams?.listData?.map((itemExam: any, indexExam: number) => (
                  <MenuItem
                    onClick={() => handleClick(itemExam?._id, itemExam?.title)}
                  >
                    {itemExam?.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Đóng
            </Button>
            <Button onClick={handleSubmit} variant="ghost">
              Thêm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalChooseExam;
