import React, { useState } from 'react';

const UserMess = () => {
  const [isChange,setIsChange]=useState(false);
  return (
    <div onClick={()=>setIsChange(!isChange)} className={`cursor-pointer grid grid-cols-[60px_1fr] gap-x-[16px] items-center px-[24px] py-[12px] ${isChange ? 'bg-[#FFDDD1]':''}`}>
      <img src="https://images.pexels.com/photos/5579045/pexels-photo-5579045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[60px] h-[60px] rounded-full'/>
      <div className='text-[#1D2026] text-[14px]'>
        <div className='text-[#1D2026] text-[14px] flex justify-between mb-[5px]'>

          <h1 className='font-semibold'>Vinh update nè</h1>
          <span>just now</span>
        </div>
        <p className='line-clamp-1 break-all'>skjdaljsdjawjdlawljalwjdalkwjdakjwdlakjwlk akjndlkawkd kajwdlkadw kjawdlkawd kjawd </p>
      </div>
    </div>
  );
};

export default UserMess;