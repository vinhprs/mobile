import React, { useEffect } from 'react';
import MessageDetailTeacher from './MessageDetailTeacher';
import { useAppDispatch } from '../../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectPersonChat } from '../../../store/reducers/chatSlice';
import { getPersonChatDetail } from '../../../store/actions/chat.actions';

const UserMessage = ({id,socket}:any) => {
  const disptach = useAppDispatch();
  const getDetail:any = useSelector(selectPersonChat);
  console.log('🚀 ~ MessageDetail ~ getDetail teahcer:', getDetail);
  const getDetailChat = async(id:any)=>{
    const res = await disptach(getPersonChatDetail(id));
    console.log('🚀 ~ getDetailChat ~ res:', res);
    
  };
  useEffect(()=>{
    getDetailChat(id);
  },[id]);
  return (
    <div className='h-full bg-white'>
      <div className='flex gap-x-[16px] items-center px-[24px] py-[20px] border-[1px] border-[#E9EAF0]'>
        <div className='relative'>
          <img src="https://images.pexels.com/photos/5579045/pexels-photo-5579045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[60px] h-[60px] rounded-full'/>
          <div className='absolute w-[10px] h-[10px] rounded-full bg-[#23BD33] bottom-[2px] right-[5px]'></div>
        </div>
        <h1 className='font-semibold'>Vinh update nè</h1>
      </div>
      <MessageDetailTeacher getDetailChat={getDetailChat} getDetail={getDetail} socket={socket} id={id}/>
    </div>
  );
};

export default UserMessage;