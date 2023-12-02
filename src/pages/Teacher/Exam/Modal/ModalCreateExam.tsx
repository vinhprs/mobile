import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Select from "../Select";
import Question from "../Question";
import { useAppDispatch } from "../../../../hooks/appHooks";
import { getCategory } from "../../../../store/actions/user.action";
import { isEmptyObject } from "../../../../utils/lib";
import {
  resetCreateExam,
  selectExam,
  updateTime,
  updateTitle,
} from "../../../../store/reducers/examSlice";
import { useSelector } from "react-redux";
import { createExam } from "../../../../store/actions/exam.action";
interface ModaCreateExamProps {
  isOpen: boolean;
  onClose: () => void;
  getExams: any;
}
const ModalCreateExam = ({
  isOpen,
  onClose,
  getExams,
}: ModaCreateExamProps) => {
  const dispatch = useAppDispatch();
  const exam = useSelector(selectExam);
  console.log(
    "🚀 ~ file: ModalCreateExam.tsx:34 ~ ModalCreateExam ~ exam:",
    exam
  );
  const [grade, setGrade] = useState<any>([]);
  const [gradeOne, setGradeOne] = useState<any>({});
  const [gradeTemp, setGradeTemp] = useState<any>([]);
  const [subject, setSubject] = useState<any>([]);
  const [types, setTypes] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const getCategories = async () => {
    const response: any = await dispatch(getCategory({}));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      for (let i = 0; i < response.payload?.data?.length; i++) {
        setGrade((prev: any) => [
          ...prev,
          {
            id: response.payload?.data[i]?._id,
            name: response.payload?.data[i]?.categoryName,
          },
        ]);
      }
      setGradeTemp(response.payload?.data);
    }
  };
  const postExam = async () => {
    const response = await dispatch(createExam(exam));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      setLoading(false);
      onClose();
      getExams();
      console.log(response);
    }
  };
  const clickPostExam = () => {
    setLoading(true);
    postExam();
    dispatch(
      resetCreateExam({
        questions: [
          {
            title: "",
            answers: ["", "", "", ""],
            correctAnswers: [],
            explain: "",
            questionLevel: "Nhận biết",
            answerType: "",
          },
        ],
        title: "",
        categoryId: 0,
        subCategoryId: 0,
        time: 0,
      })
    );
  };
  useEffect(() => {
    if (isOpen) {
      getCategories();
    }
  }, [isOpen]);
  useEffect(() => {
    if (!isEmptyObject(gradeOne)) {
      const newSubject = gradeTemp.filter(
        (item: any) => item._id === gradeOne.id
      );

      let array = [];
      for (let i = 0; i < newSubject[0]?.childs?.length; i++) {
        array.push({
          id: newSubject[0]?.childs[i]?._id,
          name: newSubject[0]?.childs[i]?.categoryName,
        });
      }
      setSubject(array);
    }
  }, [gradeOne]);
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTitle(e.target.value));
  };
  const changeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTime(+e.target.value));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="1200px" h="600px">
        <ModalHeader>Tạo đề thi</ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH="600px" overflowY="scroll">
          <div className="flex flex-col gap-y-3">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-y-2">
                <span className="text-[14px]">Tiêu đề</span>
                <input
                  type="text"
                  onChange={changeTitle}
                  className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566]"
                />
              </div>

              <Select
                arraySelect={grade}
                title=""
                selectTitle="Khối"
                classesMini="w-full"
                type="title"
                typeApi="grade"
                setGradeOne={setGradeOne}
                gradeOne={gradeOne}
                types={types}
                setTypes={setTypes}
                dispatch={dispatch}
              />
              <Select
                arraySelect={subject}
                title=""
                selectTitle="Môn học"
                classesMini="w-full"
                type="title"
                typeApi="subject"
                types={types}
                setTypes={setTypes}
                dispatch={dispatch}
              />
              <div className="flex flex-col gap-y-2">
                <span className="text-[14px]">Thời gian</span>
                <input
                  onChange={changeTime}
                  type="number"
                  className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566]"
                />
              </div>
            </div>
            <div>
              <Question />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="#F5F7FA"
            color="#1D2026"
            mr={3}
            onClick={onClose}
            borderRadius="none"
          >
            Hủy tạo
          </Button>
          <Button
            bg="#FF6636"
            color="#FFFFFF"
            _hover={{ bg: "#fb5b2a" }}
            borderRadius="none"
            isLoading={loading}
            onClick={clickPostExam}
          >
            Tạo đề thi
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCreateExam;
