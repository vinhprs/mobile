import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import CreateBlog from './CreateBlog';

const BlogTeacher = () => {
  const [openCreate,setOpenCreate] = useState(false);
  return (
    <div className=" p-[24px] w-full mx-auto">
      <div className='flex justify-between items-center mb-[20px]'>
        <h1 className='text-[25px] font-semibold text-[#FF6636]'>{!openCreate ? 'Blog của tôi' : 'Tạo bài viết'}</h1>
        <Button
          bg="#FF6636"
          color="#ffffff"
          fontSize="14px"
          _hover={{
            bg: '#f85b2b',
          }}
          onClick={()=>setOpenCreate(!openCreate)}
        >{!openCreate ? 'Tạo bài viết' : 'Bài viết của tôi'}</Button>
      </div>
      {!openCreate ? (
        <div className='flex flex-col gap-3'>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
      ):(
        <div>
          <CreateBlog/>
        </div>
      )}
    </div>
  );
};

export default BlogTeacher;