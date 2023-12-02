import React, { useEffect, useState } from "react";
import Select from "./Select";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import {
  selectCategory,
  selectCategoryById,
  updateGrade,
  updateSubject,
  updateTime,
  updateTitle,
} from "../../../store/reducers/examSlice";
import { useAppDispatch } from "../../../hooks/appHooks";
import {
  getCategory,
  getCategoryById,
} from "../../../store/actions/user.action";

const TitleUpdateExam = ({ item }: any) => {
  const categories = useSelector(selectCategory);
  const categoryById: any = useSelector(selectCategoryById);
  const [itemId, setItemId] = useState(item?.categoryId);
  const [itemSubId, setItemSubId] = useState(item?.subCategoryId);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState(false);

  const dispatch = useAppDispatch();
  const getCategoryId = async (id: any) => {
    const payload = new URLSearchParams({
      categoryId: id,
    });
    const res = await dispatch(getCategoryById(payload));
  };
  const getCategories = async () => {
    const response = await dispatch(getCategory({}));
  };
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    dispatch(updateTitle(e.target.value));
  };
  const changeGrade = (grade: number) => {
    setItemId(grade);
    dispatch(updateGrade(grade));
  };
  const changeSubject = (subject: number) => {
    setItemSubId(subject);
    dispatch(updateSubject(subject));
  };
  const changeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTime(+e.target.value));
  };
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    getCategoryId(itemId);
  }, [itemId]);

  return (
    <div className="text-[14px] grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-y-2">
        <span className="text-[14px]">Tiêu đề</span>
        <input
          defaultValue={item?.title}
          type="text"
          onChange={changeTitle}
          className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <span>Khối</span>
        <div
          className="relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between px-[12px] py-[8px] rounded-lg shadow-md">
            <span>{categoryById?.categoryName}</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          {isOpen && (
            <div className="absolute top-[110%] z-[2] left-0 w-full flex flex-col overflow-hidden bg-white shadow-md rounded-lg transition-all duration-150 ease-in-out opacity-100">
              {categories.map((itemCate: any, index: any) => (
                <span
                  key={item?._id}
                  className="cursor-pointer transition-all duration-200 ease-in-out px-[12px] py-[8px] hover:bg-[#FF6636] hover:text-white"
                  onClick={() => changeGrade(itemCate._id)}
                >
                  {itemCate.categoryName}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <span>Môn học</span>
        <div
          className="relative cursor-pointer"
          onClick={() => setIsOpenSub(!isOpenSub)}
        >
          <div className="flex items-center justify-between px-[12px] py-[8px] rounded-lg shadow-md">
            <span>
              {categoryById?.childs?.filter(
                (item: any) => item?._id === itemSubId
              )[0]?.categoryName || "Môn học"}
            </span>
            <MdOutlineKeyboardArrowDown />
          </div>
          {isOpenSub && (
            <div className="absolute top-[110%] z-[2] left-0 w-full flex flex-col overflow-hidden bg-white shadow-md rounded-lg transition-all duration-150 ease-in-out opacity-100">
              {categoryById?.childs?.map((itemSubId: any, index: any) => (
                <span
                  key={item?._id}
                  className="cursor-pointer transition-all duration-200 ease-in-out px-[12px] py-[8px] hover:bg-[#FF6636] hover:text-white"
                  onClick={() => changeSubject(itemSubId._id)}
                >
                  {itemSubId?.categoryName}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="text-[14px]">Thời gian</span>
        <input
          defaultValue={item?.time}
          type="number"
          onChange={changeTime}
          className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default TitleUpdateExam;
