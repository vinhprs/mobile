/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../store/reducers/authSlice';

const MessageTeacherUser = ({user}:any) => {
  const userInfo:any = useSelector(selectUserInfo);
  return (
    <div>
      {user?.sender?._id !== userInfo?._id && (

        <div className='mb-5 flex flex-col'>
          <div className='flex gap-x-2 items-center mb-3'>
            <img src="https://images.pexels.com/photos/5579045/pexels-photo-5579045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[26px] h-[26px] rounded-full'/>
            <h1 className='text-[12px]'>{user?.sender?.username}</h1>
          </div>
          <p className='w-[500px] break-all px-[12px] py-[8px] bg-[#FFEEE8] rounded-full'>{user.message}</p>
        </div>
      )}
      {user?.sender?._id === userInfo?._id &&(
        <div className='mb-5 flex flex-col items-end'>
          <div className='flex gap-x-2 items-center mb-3'>
            <img src="https://images.pexels.com/photos/5579045/pexels-photo-5579045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[26px] h-[26px] rounded-full'/>
            <h1 className='text-[12px]'>{user?.sender?.username}</h1>
          </div>
          <p className='w-[500px] break-all px-[12px] py-[8px] bg-[#FF6636] text-white rounded-full'>{user.message}</p>
        </div>
      )}
    </div>
  );
};

export default MessageTeacherUser;