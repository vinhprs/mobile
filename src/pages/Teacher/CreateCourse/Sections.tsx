import { RxHamburgerMenu } from "react-icons/rx";
import { BsArrowDownShort, BsArrowUpShort, BsPlusLg } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { BsTrash } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { LectureProp, SectionsProp } from "./FormCreateVideo";
import ModalEditSection from "./Modal/ModalEditSection";
import Lecture from "./Lecture";
import { v4 as uuid4 } from "uuid";
import { useAppDispatch } from "../../../hooks/appHooks";
import {
  addLectureItem,
  deleteSectionItem,
  updateSections,
} from "../../../store/reducers/createCourseSlice";
import { genSlug } from "../../../utils/lib";
interface PropsChild {
  sections: Array<SectionsProp>;
  item: SectionsProp;
  index: number;
}
const Sections = ({ item, index, sections }: PropsChild) => {
  console.log(item.lectures);
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteSection = () => {
    if (sections.length === 1) {
      dispatch(updateSections([]));
    } else {
      dispatch(
        deleteSectionItem({
          sectionIndex: index,
        })
      );
    }
  };
  const addLecture = () => {
    const itemLec = {
      lectureName: "",
      lectureType: "",
      amount: "",
      url: "",
      slug:genSlug(10)
    };
    dispatch(
      addLectureItem({
        sectionIndex: index,
        item: itemLec,
      })
    );
  };
  console.log(sections);

  return (
    <div className="w-full text-[14px]">
      <div className="flex justify-between mb-[10px]">
        <div className="flex items-center gap-x-2 text-[14px]">
          <RxHamburgerMenu className="text-[#1D2026]" />
          <h1 className="text-[#1D2026] font-semibold">
            Chuyên đề {index + 1}:{" "}
            <span className="font-normal">{item.sectionName}</span>
          </h1>
        </div>
        <div className="flex gap-x-3">
          <BsPlusLg
            className="cursor-pointer text-[18px]"
            onClick={addLecture}
          />
          <HiOutlinePencilSquare
            className="cursor-pointer text-[18px]"
            onClick={onOpen}
          />
          <BsTrash
            className="cursor-pointer text-[18px]"
            onClick={deleteSection}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        {item.lectures.map((itemLecture: any, indexLecture: any) => (
          <Lecture
            indexLecture={indexLecture}
            key={itemLecture.id}
            itemLecture={itemLecture}
            lectures={item}
            sections={sections}
            index={index}
          />
        ))}
      </div>
      {isOpen && (
        <ModalEditSection isOpen={isOpen} onClose={onClose} index={index} />
      )}
    </div>
  );
};

export default Sections;
