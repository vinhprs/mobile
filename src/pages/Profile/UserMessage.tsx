import React from 'react';
import { Input } from '@chakra-ui/react';
import UserMess from './UserMess';
const UserMessage = () => {
  return (
    <div className='flex flex-col gap-y-[16px] border-[1px] border-[#E9EAF0]'>
      <div className='flex flex-col gap-y-[16px] px-[24px] pt-[24px]'>
        <h1 className='font-semibold'>Tin nhắn</h1>
        <Input placeholder='Nhập tên giáo viên' className='text-[14px]' focusBorderColor='#FF6636'/>
      </div>
      <div className='max-h-[500px] overflow-y-scroll'>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
        <UserMess/>
      </div>
    </div>
  );
};

export default UserMessage;