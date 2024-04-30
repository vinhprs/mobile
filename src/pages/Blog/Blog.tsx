import React from 'react';
import Pagination from '../../components/Pagination/Pagination';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <div className="pt-[100px] pb-[60px] px-[24px] max-w-[1200px] w-full mx-auto">
      <div>
        <h1 className='text-[25px] text-[#FF6636] font-semibold'>Bài viết nổi bật</h1>
        <p className='text-[14px]'>Tổng hợp các bài viết chia sẻ về kinh nghiệm, phương pháp dạy học và một số kiến thức bổ ích cho các bạn học sinh</p>
        <div className='grid grid-cols-7 gap-5 mt-[20px]'>
          <div className='col-span-5'>
            <div className='flex flex-col gap-3 mb-[50px]'>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
            </div>
            <Pagination/>
          </div>
          <div className='col-span-2'>
            <h1 className='text-[16px] text-slate-400 mb-[20px] uppercase font-medium'>Các chủ đề được đề xuất</h1>
            <div className='flex flex-wrap gap-3'>
              <div className='px-[16px] py-[8px] rounded-full bg-slate-200 text-[14px] font-semibold uppercase'>html/css</div>
              <div className='px-[16px] py-[8px] rounded-full bg-slate-200 text-[14px] font-semibold uppercase'>html/css</div>
              <div className='px-[16px] py-[8px] rounded-full bg-slate-200 text-[14px] font-semibold uppercase'>html/css</div>
              <div className='px-[16px] py-[8px] rounded-full bg-slate-200 text-[14px] font-semibold uppercase'>html/css</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;