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
interface PropsChild {
  sections: Array<SectionsProp>;
  setSections: any;
  item: SectionsProp;
  index: number;
}
const Sections = ({ item, setSections, index, sections }: PropsChild) => {
  console.log(item.lectures);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteSection = () => {
    if (sections.length === 1) {
      setSections([]);
    } else {
      console.log("hello");

      const newArray = [...sections];
      newArray.splice(index, 1);
      setSections(newArray);
    }
  };
  const addLecture = () => {
    const itemLec = {
      // id: uuid4(),
      lectureName: "",
      lectureType: "",
      amount: "",
      url: "",
    };
    // console.log([...item.lectures, itemLec]);
    sections[index].lectures.push(itemLec);
    console.log(sections);

    setSections([...sections]);
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
            setSections={setSections}
          />
        ))}
      </div>
      <ModalEditSection
        isOpen={isOpen}
        onClose={onClose}
        itemSection={item}
        setSections={setSections}
        sections={sections}
        index={index}
      />
    </div>
  );
};

export default Sections;
