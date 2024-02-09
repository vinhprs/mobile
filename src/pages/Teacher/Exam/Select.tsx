import { Fade, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useAppDispatch } from '../../../hooks/appHooks';
import {
  updateAnswerExplain,
  updateAnswerQuestionLevel,
  updateGrade,
  updateSubject,
} from '../../../store/reducers/examSlice';
interface SelectProps {
  title: string;
  selectTitle?: string;
  arraySelect: Array<any>;
  classes?: string;
  classesMini?: string;
  type: string;
  typeApi: 'grade' | 'subject' | 'select';
  gradeOne?: object;
  setGradeOne?: any;
  types?: string;
  setTypes?: any;
  dispatch?: any;
  index?: number;
}
const Select = ({
  arraySelect,
  selectTitle,
  title,
  classes,
  classesMini,
  type,
  typeApi,
  gradeOne,
  setGradeOne,
  setTypes,
  types,
  dispatch,
  index,
}: SelectProps) => {
  const [select, setSelect] = useState(title);
  const { isOpen: isOpenFaded, onToggle } = useDisclosure();
  // const [array, setArray] = useState<any>([]);
  // console.log(arraySelect);
  // useEffect(() => {
  //   if (typeApi === "grade") {
  //     console.log(arraySelect);

  //     for (let i = 0; i < arraySelect.length; i++) {
  //       setArray(array.push(arraySelect[i]?.categoryName));
  //     }
  //   }
  // }, [typeApi]);

  const selectString = (title: string, id: number) => {
    if (typeApi === 'grade') {
      const payload = {
        id: id,
        name: title,
      };
      setGradeOne({ ...gradeOne, ...payload });
      dispatch(updateGrade(id));
    }
    if (typeApi === 'subject') {
      dispatch(updateSubject(id));
    }
    if (typeApi === 'select') {
      dispatch(
        updateAnswerQuestionLevel({
          questionIndex: index,
          value: title,
        })
      );
    }
    setSelect(title);
    onToggle();
  };
  return (
    <div
      className={`w-full flex flex-col ${
        typeApi === 'select' ? '' : 'gap-y-2'
      } ${classes}`}
    >
      <span className="text-[14px]">{selectTitle}</span>
      <div
        className={`relative cursor-pointer px-[8px] h-[38px] text-[14px] bg-white border-[1px]  border-[#E9EAF0] text-[#4E5566] ${classesMini}`}
      >
        <div
          onClick={() => {
            setTypes(typeApi);

            onToggle();
          }}
          className="flex justify-between items-center h-full gap-x-2"
        >
          <span>{select}</span>
          <MdOutlineKeyboardArrowDown />
        </div>
        {isOpenFaded && typeApi === types && (
          <div className="absolute top-[100%] left-0 w-full z-10">
            <Fade in={isOpenFaded}>
              <div className="w-full py-[10px] border-[0.5px] border-[#E9EAF0] bg-white">
                {arraySelect.map((item: any, index: number) => (
                  <p
                    key={item.id}
                    className="py-[5px] px-[10px] hover:text-white hover:bg-[#FF6636]"
                    onClick={() => selectString(item?.name, item?.id)}
                  >
                    {item?.name}
                  </p>
                ))}
              </div>
            </Fade>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
