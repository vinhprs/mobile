import { Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useAppDispatch } from '../../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectListQuizs } from '../../../store/reducers/quizSlice';
import { getQuiz } from '../../../store/actions/quiz.action';
import { deleteItemQuiz, updateLectureQuizId, updateLectureQuizQuestionTime } from '../../../store/reducers/createCourseSlice';

const ItemQuizCreate = ({indexQuiz,index,indexLecture}:any) => {
  const dispatch = useAppDispatch();
  const [menu, setMenu] = useState('Bài Quizz');
  const quizList:any = useSelector(selectListQuizs);
  const getAllListQuiz = async()=>{
    const payload = new URLSearchParams({
      page:'1'
    });
    const res = await dispatch(getQuiz(payload));
    if(res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ getAllListQuiz ~ res:', res);
    }
  };
  const handleDeleteQuizItem = () =>{
    dispatch(deleteItemQuiz({
      sectionIndex:index, lectureIndex:indexLecture,quizIndex:indexQuiz
    }));
  };
  const handleQuizz = (title:any,id:any)=>{
    setMenu(title);
    dispatch(updateLectureQuizId({
      sectionIndex:index, 
      lectureIndex:indexLecture, 
      quizIndex:indexQuiz,
      value:id
    }));
  };
  const handleTiming = (e:any)=>{
    const[hours, mins] = e.target.value.split(':');
    dispatch(updateLectureQuizQuestionTime({
      sectionIndex:index, 
      lectureIndex:indexLecture, 
      quizIndex:indexQuiz,
      value:mins*60
    }));
    console.log(mins);
  };
  useEffect(()=>{
    getAllListQuiz();
  },[]);
  return (
    <div className='flex flex-col gap-2 p-3 border rounded-md'>
      <div className='flex justify-between'>
        <label htmlFor="">Quizz {indexQuiz+1}</label>
        <FaRegTrashAlt onClick={handleDeleteQuizItem}></FaRegTrashAlt>
      </div>
      <Menu>
        <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
          {menu}
        </MenuButton>
        <MenuList>
          {quizList?.listData?.map((item:any,index:number)=>(
            <MenuItem key={item?._id} onClick={()=>handleQuizz(item?.title,item?._id)}>
              {item?.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <input
        type="time"
        className="w-full px-[18px] py-[13px] border-[1px] text-[#1D2026] border-[#E9EAF0] outline-none placeholder:text-[#8C94A3]"
        placeholder="File..."
        onChange={handleTiming}
      />
    </div>
  );
};

export default ItemQuizCreate;