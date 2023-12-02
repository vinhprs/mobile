import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowDownShort, BsArrowUpShort, BsTrash } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { LectureProp, SectionsProp } from "./FormCreateVideo";
import ModalEditLecture from "./Modal/ModalEditLecture";
import ModalUploadVideo from "./Modal/ModalUploadVideo";
import ModalUploadFile from "./Modal/ModalUploadFile";
import { useAppDispatch } from "../../../hooks/appHooks";
import {
  deleteLectureItem,
  swapLecture,
  updateLecture,
} from "../../../store/reducers/createCourseSlice";
interface LectureProps {
  indexLecture: number;
  index: number;
  itemLecture: LectureProp;
  lectures: SectionsProp;
  sections: Array<SectionsProp>;
  // setSections: any;
}
const Lecture = ({
  index,
  itemLecture,
  lectures,
  indexLecture,
  sections,
}: LectureProps) => {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenUpload,
    onOpen: onOpenUpload,
    onClose: onCloseUpload,
  } = useDisclosure();
  const {
    isOpen: isOpenUploadFile,
    onOpen: onOpenUploadFile,
    onClose: onCloseUploadFile,
  } = useDisclosure();
  const swapItem = (index1: number, index2: number) => {
    // console.log("🚀 ~ file: Lecture.tsx:25 ~ swapItem ~ index2:", index2);
    // console.log("🚀 ~ file: Lecture.tsx:25 ~ swapItem ~ index1:", index1);

    // if (
    //   index1 < 0 ||
    //   index2 < 0 ||
    //   index1 >= sections[index].lectures.length ||
    //   index2 >= sections[index].lectures.length
    // ) {
    //   return;
    // }
    // const newArray = [...sections]; // Create a copy of the original array
    // // [newArray[index], newArray[index2]] = [newArray[index2], newArray[index1]]; // Swap the items
    // [sections[index].lectures[index1], sections[index].lectures[index2]] = [
    //   sections[index].lectures[index2],
    //   sections[index].lectures[index1],
    // ];

    // setSections(newArray);
    dispatch(
      swapLecture({
        indexOne: index1,
        indexTwo: index2,
        sectionIndex: index,
      })
    );
  };
  const deleteLecture = () => {
    if (sections[index].lectures.length === 1) {
      dispatch(
        updateLecture({
          sectionIndex: index,
          value: [],
        })
      );
      // sections[index].lectures = [];
      // console.log(sections);

      // setSections([...sections]);
    } else {
      console.log("hello");
      dispatch(
        deleteLectureItem({
          sectionIndex: index,
          lectureIndex: indexLecture,
        })
      );
      // const newArray = [...sections];
      // newArray[index].lectures.splice(indexLecture, 1);
      // setSections(newArray);
    }
  };
  return (
    <>
      <div className="flex justify-between gap-x-3 items-center">
        <div className="px-[20px] py-[12px] bg-white flex items-center gap-x-2 w-full">
          <RxHamburgerMenu className="text-[#1D2026]" />
          <h1 className="text-[#1D2026] text-[14px] font-medium">
            Bài học: {itemLecture.lectureName}
          </h1>
        </div>
        <div className="flex gap-x-3 items-center">
          <Menu>
            <MenuButton
              fontSize="14px"
              borderRadius="none"
              bg="#FFEEE8"
              color="#FF6636"
              _expanded={{ bg: "#FF6636", color: "#ffffff" }}
              _hover={{
                bg: "#FF6636",
                color: "#ffffff",
              }}
              as={Button}
              rightIcon={<MdKeyboardArrowDown />}
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onOpenUpload}>Đăng tải video</MenuItem>
              <MenuItem onClick={onOpenUploadFile}>Tải file lên</MenuItem>
              <MenuItem>Đề thi</MenuItem>
            </MenuList>
          </Menu>
          <HiOutlinePencilSquare
            className="cursor-pointer text-[18px]"
            onClick={onOpen}
          />
          <BsTrash
            className="cursor-pointer text-[18px]"
            onClick={deleteLecture}
          />
          <div className="flex gap-x-2 text-[#1D2026]">
            <div
              className={` w-[30px] h-[30px] flex justify-center items-center bg-white ${
                indexLecture === 0
                  ? "cursor-not-allowed text-[#6E7485]"
                  : "hover:bg-[#FF6636] hover:text-white transition-all ease-in-out duration-150"
              } `}
              onClick={() => swapItem(indexLecture, indexLecture - 1)}
            >
              <BsArrowUpShort className="text-[18px]" />
            </div>
            <div
              onClick={() => swapItem(indexLecture, indexLecture + 1)}
              className={` w-[30px] h-[30px] flex justify-center items-center bg-white ${
                indexLecture === sections[index].lectures.length - 1
                  ? "cursor-not-allowed text-[#6E7485]"
                  : "hover:bg-[#FF6636] hover:text-white transition-all ease-in-out duration-150"
              } `}
            >
              <BsArrowDownShort className="text-[18px]" />
            </div>
          </div>
        </div>
      </div>
      <ModalEditLecture
        isOpen={isOpen}
        onClose={onClose}
        lectures={lectures}
        // setSections={setSections}
        itemLecture={itemLecture}
        sections={sections}
        index={index}
        indexLecture={indexLecture}
      />
      <ModalUploadVideo
        isOpen={isOpenUpload}
        onClose={onCloseUpload}
        lectures={lectures}
        // setSections={setSections}
        itemLecture={itemLecture}
        sections={sections}
        index={index}
        indexLecture={indexLecture}
      />
      <ModalUploadFile
        isOpen={isOpenUploadFile}
        onClose={onCloseUploadFile}
        lectures={lectures}
        // setSections={setSections}
        itemLecture={itemLecture}
        sections={sections}
      />
    </>
  );
};

export default Lecture;
