import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import UpdateBlog from './UpdateBlog';
import LogBlog from './LogBlog';

const BlogCard = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('');
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenLock, onOpen:onOpenLock, onClose:onCloseLock } = useDisclosure();
  return (
    <div onClick={handleClick} className='cursor-pointer p-[20px] border-[2px] rounded-xl flex flex-col gap-4'>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/19762800/pexels-photo-19762800/free-photo-of-qu-n-short-ng-i-cai-gh-tieu-di-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <span className='font-medium text-[14px]'>Nguyễn Thanh Hoà</span>
        </div>
        <div className='text-[14px]'>
          <Menu>
            <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
              Lựa chọn
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onOpen}>Cập nhập blog</MenuItem>
              <MenuItem onClick={onOpenLock}>Khoá bài viết</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>

      <div className='grid grid-cols-7 gap-4'>
        <div className='col-span-5 flex flex-col gap-2'>
          <h1 className='text-[20px] font-semibold uppercase'>LÀ THÀNH VIÊN CỦA F8. BẠN ĐÃ THỰC SỰ SỬ DỤNG {'F8'} HIỆU QUẢ CHƯA?</h1>
          <p className='text-[14px] text-slate-400 line-clamp-2'>`F8` sẽ đưa bạn đến chính xác từng vị trí xảy ra vấn đề. F8 là phím tắt mặc định trong VScode các bạn nhé (không phải cài thêm bất cứ Extensions nào)</p>
          <div>
            <span className='text-[12px] font-medium'>19 ngày trước</span>
          </div>
          <div className='flex items-center gap-3 text-yellow-300'>
            <HiDotsHorizontal/>
            <div className='text-[14px]'>Đang chờ kiểm duyệt</div>
          </div>
          <div className='flex items-center gap-3 text-green-500'>
            <FaCheck/>
            <div className='text-[14px]'>Kiểm duyệt thành công</div>
          </div>
          <div className='flex items-center gap-3 text-red-500'>
            <IoMdCloseCircleOutline/>
            <div className='text-[14px]'>Không qua kiểm duyệt được</div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='h-[180px] w-full rounded-2xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/19762800/pexels-photo-19762800/free-photo-of-qu-n-short-ng-i-cai-gh-tieu-di-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </div>
      </div>
      <UpdateBlog isOpen={isOpen} onClose={onClose}/>
      <LogBlog isOpen={isOpenLock} onClose={onCloseLock}/>
    </div>
  );
};

export default BlogCard;