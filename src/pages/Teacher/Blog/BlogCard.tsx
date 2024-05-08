import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Button, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import UpdateBlog from './UpdateBlog';
import LogBlog from './LogBlog';
import { convertTimeToAgo } from '../../../utils/lib';
import parse from 'html-react-parser';
import { STATUS_BLOG } from '../../../utils/type';

const BlogCard = ({item,getListBlog}:any) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    if(item?.status !== STATUS_BLOG.PENDING){

      navigate(`/blog/${item?._id}`);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenLock, onOpen:onOpenLock, onClose:onCloseLock } = useDisclosure();
  return (
    <div className='cursor-pointer p-[20px] border-[2px] rounded-xl flex flex-col gap-4'>

      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src={item?.user?.avatar} alt="" />
          </div>
          <span className='font-medium text-[14px]'>{item?.user?.username}</span>
        </div>
        <div className='text-[14px]'>
          <Menu>
            <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
              Lựa chọn
            </MenuButton>
            <MenuList>
              <MenuItem onClick={onOpen}>Cập nhập blog</MenuItem>
              <MenuItem onClick={onOpenLock}>Xoá bài viết</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      
      <div onClick={handleClick} className='grid grid-cols-7 gap-4'>
        <div className='col-span-5 flex flex-col gap-2'>
          <h1 className='text-[20px] font-semibold uppercase'>{parse(item?.title)}</h1>
          <p className='text-[14px] text-slate-400 line-clamp-2'>{parse(item?.previewContent)}</p>
          <div>
            <span className='text-[12px] font-medium'>{convertTimeToAgo(item?.createdAt)}</span>
          </div>
          <div className='flex gap-3 items-center'>
            {item?.tags?.map((itemTag:any,index:number)=>(
              <div className='p-2 rounded-md text-[14px] text-white bg-[#FF6636]' key={index}>
                {itemTag}
              </div>
            ))}
          </div>
          {item?.status === STATUS_BLOG.PENDING && (

            <div className='flex items-center gap-3 text-yellow-300'>
              <HiDotsHorizontal/>
              <div className='text-[14px]'>Đang chờ kiểm duyệt</div>
            </div>
          )}
          {item?.status === STATUS_BLOG.ACCEPTED && (

            <div className='flex items-center gap-3 text-green-500'>
              <FaCheck/>
              <div className='text-[14px]'>Kiểm duyệt thành công</div>
            </div>
          )}
          {item?.status === STATUS_BLOG.DECLINED && (

            <div className='flex items-center gap-3 text-red-500'>
              <IoMdCloseCircleOutline/>
              <div className='text-[14px]'>Không qua kiểm duyệt được</div>
            </div>
          )}

        </div>
        <div className='col-span-2'>
          <div className='h-[180px] w-full rounded-2xl overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/19762800/pexels-photo-19762800/free-photo-of-qu-n-short-ng-i-cai-gh-tieu-di-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </div>
      </div>
      <UpdateBlog getListBlog={getListBlog} isOpen={isOpen} onClose={onClose} item={item}/>
      <LogBlog getListBlog={getListBlog} isOpen={isOpenLock} onClose={onCloseLock} item={item}/>

    </div>
  );
};

export default BlogCard;