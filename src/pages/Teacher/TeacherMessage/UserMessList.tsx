import React, { useEffect, useState } from 'react';
import { Input } from '@chakra-ui/react';
import UserMess from '../../Profile/UserMess';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../hooks/appHooks';
import { getListPersonChat } from '../../../store/actions/chat.actions';
import { selectListChatPerson } from '../../../store/reducers/chatSlice';
const UserMessList = () => {
  const [isLoading,setIsLoading] = useState(false);
  const listPersonChat:any = useSelector(selectListChatPerson);
  const dispatch = useAppDispatch();
  const getListPersonChats = async()=>{
    const res = await dispatch(getListPersonChat({}));
    if(res.meta.requestStatus==='fulfilled'){
      console.log('🚀 ~ getListPersonChats ~ res:', res);
      
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    setIsLoading(true);
    getListPersonChats();
  },[]);
  return (
    <div className='flex flex-col gap-y-[16px] border-[1px] border-[#E9EAF0] bg-white'>
      <div className='flex flex-col gap-y-[16px] px-[24px] pt-[24px]'>
        <h1 className='font-semibold'>Tin nhắn</h1>
        <Input placeholder='Nhập tên giáo viên' className='text-[14px]' focusBorderColor='#FF6636'/>
      </div>
      <div className='max-h-[600px] overflow-y-scroll'>
        {
          listPersonChat?.listData?.map((item:any,index:number)=>(
            
            <UserMess key={item?._id} item={item}/>
          ))
        }
        {/* <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/> */}
      </div>
    </div>
  );
};

export default UserMessList;