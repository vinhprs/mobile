import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

const UserMess = ({item}:any) => {
  const [searchParam] = useSearchParams();
  const navigation = useNavigate();
  const pathnanme = useLocation();
  console.log(pathnanme);
  const [isChange,setIsChange]=useState(false);
  const onClickUser = () =>{
    navigation(`${pathnanme.pathname}?chatID=${item._id}`);
  }; 

  return (
    <div onClick={onClickUser} className={`cursor-pointer grid grid-cols-[60px_1fr] gap-x-[16px] items-center px-[24px] py-[12px] ${searchParam.get('chatID') === item._id.toString() ? 'bg-[#FFDDD1]':''}`}>
      <img src="https://images.pexels.com/photos/5579045/pexels-photo-5579045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[60px] h-[60px] rounded-full'/>
      <div className='text-[#1D2026] text-[14px]'>
        <div className='text-[#1D2026] text-[14px] flex justify-between mb-[5px]'>

          <h1 className='font-semibold'>{item?.teacher?.fullname}</h1>
          <span>{item?.messages?.createdAt}</span>
        </div>
        <p className='line-clamp-1 break-all'>{item?.messages?.message}</p>
      </div>
    </div>
  );
};

export default UserMess;