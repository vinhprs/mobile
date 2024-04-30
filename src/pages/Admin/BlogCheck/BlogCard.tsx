import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import CheckBlog from './CheckBlog';

const BlogCard = () => {
  const [showBlog, setIsShowBlog] = useState(false);
  const [showReason, setShowReason] = useState(false);
  const handleClick = ()=>{
    setIsShowBlog(!showBlog);
  };
  return (
    <div className='p-[20px] border-[2px] rounded-xl'>
      <div onClick={handleClick} className='cursor-pointer flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/19762800/pexels-photo-19762800/free-photo-of-qu-n-short-ng-i-cai-gh-tieu-di-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <span className='font-medium text-[14px]'>Nguyễn Thanh Hoà</span>
          </div>
        </div>

        <div className='grid grid-cols-7 gap-4'>
          <div className='col-span-5 flex flex-col gap-2'>
            <h1 className='text-[20px] font-semibold uppercase'>LÀ THÀNH VIÊN CỦA F8. BẠN ĐÃ THỰC SỰ SỬ DỤNG {'F8'} HIỆU QUẢ CHƯA?</h1>
            <p className='text-[14px] text-slate-400 line-clamp-2'>`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)</p>
            <div>
              <span className='text-[12px] font-medium'>19 ngày trước</span>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='h-[180px] w-full rounded-2xl overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/19762800/pexels-photo-19762800/free-photo-of-qu-n-short-ng-i-cai-gh-tieu-di-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </div>
        </div>
      </div>
      {
        showBlog && (
          <div className='my-[20px]'>
            <p>Hello</p>
          </div>
        )
      }
      <div className='flex items-center gap-3'>
        <button className='z-10 flex items-center gap-3 bg-green-500 text-white w-fit p-[8px] rounded-lg'>
          <FaCheck/>
          <div className='text-[14px]'>Được kiểm duyệt</div>
        </button>
        <button onClick={()=>setShowReason(!showReason)} className='z-10 flex items-center gap-3 bg-red-500 text-white w-fit p-[8px] rounded-lg'>
          <IoMdCloseCircleOutline/>
          <div className='text-[14px]'>Không được kiểm duyệt</div>
        </button>
      </div>
      {showReason && (

        <CheckBlog/>
      )}
    </div>
  );
};

export default BlogCard;