import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import BlogCard from './BlogCard';

const BlogAdmin = () => {
  const [openCreate,setOpenCreate] = useState(false);
  return (
    <div className=" p-[24px] w-full mx-auto">
      <div className='flex justify-between items-center mb-[20px]'>
        <h1 className='text-[25px] font-semibold text-[#FF6636]'>{!openCreate ? 'Blog của tôi' : 'Tạo bài viết'}</h1>
      </div>
      
      <div className='flex flex-col gap-3'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    
    </div>
  );
};

export default BlogAdmin;