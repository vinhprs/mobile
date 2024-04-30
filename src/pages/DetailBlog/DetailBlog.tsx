import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';

const DetailBlog = () => {
  return (
    <div className='pt-[100px] pb-[60px] px-[24px] max-w-[1200px] w-full mx-auto'>
      <div>
        <h1 className='text-[32px] font-semibold mb-[30px]'>Sự khác biệt giữa var, let và const trong JavaScript</h1>
        <div className='flex items-center justify-between mb-[30px]'>
          <div className='flex items-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/19762800/pexels-photo-19762800/free-photo-of-qu-n-short-ng-i-cai-gh-tieu-di-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
              <h1 className='font-semibold'>TTnguyen</h1>
              <span className='text-[14px] opacity-30'>9 tháng trước</span>
            </div>
          </div>
          <div>Lưak chọn hêhhe</div>
        </div>
        <div>
            Bìa viết
        </div>
        <div className='flex items-center gap-3 my-[20px]'>
          <span className='px-[10px] py-[4px] bg-slate-200 text-[14px] text-slate-500'>Front-end</span>
          <span className='px-[10px] py-[4px] bg-slate-200 text-[14px] text-slate-500'>Javascript</span>
        </div>
        <div>
          <h1 className='mb-[10px] text-[20px] font-semibold'>Bài đăng cùng tác giả</h1>
          <div>
            <div className='flex items-center gap-3'>
              <div className='w-[5px] h-[5px] rounded-full bg-black'></div>
              <Link to="" className='hover:underline'>Trong Javascript cũng có {'Typescript'} mà bấy lâu nay ta không biết</Link>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-[5px] h-[5px] rounded-full bg-black'></div>
              <Link to="" className='hover:underline'>Trong Javascript cũng có {'Typescript'} mà bấy lâu nay ta không biết</Link>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-[5px] h-[5px] rounded-full bg-black'></div>
              <Link to="" className='hover:underline'>Trong Javascript cũng có {'Typescript'} mà bấy lâu nay ta không biết</Link>
            </div>
          </div>
        </div>
        <div className='w-full h-[3px] bg-[#FF6636] my-[30px]'></div>
        <div>
          <h1 className='mb-[10px] text-[20px] font-semibold'>Các tin nổi bật khác</h1>
          <div className='flex flex-col gap-3'>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;