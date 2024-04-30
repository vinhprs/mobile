import React from 'react';
import { useAppDispatch } from '../../../../hooks/appHooks';
import { titleUpdate, updateTitle } from '../../../../store/reducers/quizSlice';

const TitleUpdateQuiz = ({item}:any) => {
  const dispatch = useAppDispatch();
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    dispatch(titleUpdate(e.target.value));
  };
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-[14px]">Tiêu đề</span>
      <input
        defaultValue={item?.title}
        type="text"
        onChange={changeTitle}
        className="w-full h-[38px] px-[8px] outline-none border-[1px] border-[#E9EAF0] text-[#4E5566] rounded-lg shadow-md"
      />
    </div>
  );
};

export default TitleUpdateQuiz;