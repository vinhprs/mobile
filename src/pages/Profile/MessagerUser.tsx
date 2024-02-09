/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const MessagerUser = ({user}:any) => {
  return (
    <div>
      {user === 'teacher' && (

        <div className='mb-5 flex flex-col'>
          <div className='flex gap-x-2 items-center mb-3'>
            <img src="https://images.pexels.com/photos/5579045/pexels-photo-5579045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[26px] h-[26px] rounded-full'/>
            <h1 className='text-[12px]'>Tim</h1>
          </div>
          <p className='w-[500px] break-all px-[12px] py-[8px] bg-[#FFEEE8]'>Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 😀</p>
        </div>
      )}
      {user === 'student' &&(
        <div className='mb-5 flex flex-col items-end'>
          <div className='flex gap-x-2 items-center mb-3'>
            <img src="https://images.pexels.com/photos/5579045/pexels-photo-5579045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-[26px] h-[26px] rounded-full'/>
            <h1 className='text-[12px]'>Tim</h1>
          </div>
          <p className='w-[500px] break-all px-[12px] py-[8px] bg-[#FF6636] text-white'>Hello and thanks for signing up to the course. If you have any questions about the course or Adobe XD, feel free to get in touch and I'll be happy to help 😀</p>
        </div>
      )}
    </div>
  );
};

export default MessagerUser;