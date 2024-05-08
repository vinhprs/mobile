import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { useAppDispatch } from '../../../hooks/appHooks';
import { getListBlogAction } from '../../../store/actions/blog.action';
import PagiantionNew from '../../../components/Pagination/PagiantionNew';

const BlogAdmin = () => {
  const [openCreate,setOpenCreate] = useState(false);
  const [page,setPage] = useState(1);
  const [list, setList] = useState<any>();
  const dispatch = useAppDispatch();
  const listBlog = async()=>{
    const payload = new URLSearchParams({
      limit: '12',
      page: page.toString(),
    });
    try{
      const res:any = await dispatch(getListBlogAction(payload));
      if(res.meta.requestStatus === 'fulfilled'){
        setList(res?.payload?.data);
      }
    }catch(e:any){
      console.log('🚀 ~ listBlog ~ e:', e);

    }
  };
  const handleChange = (page: number) => {
    setPage(page);
  };
  useEffect(()=>{
    listBlog();
  },[page]);
  return (
    <div className=" p-[24px] w-full mx-auto">
      <div className='flex justify-between items-center mb-[20px]'>
        <h1 className='text-[25px] font-semibold text-[#FF6636]'>{!openCreate ? 'Blog của tôi' : 'Tạo bài viết'}</h1>
      </div>
      
      <div className='flex flex-col gap-3'>
        {list?.listData?.map((item:any,index:number)=>(

          <BlogCard key={item?._id} item={item}/>
        ))}
      </div>
      <div className='mt-4'>
        <PagiantionNew
          onPageChange={handleChange}
          totalCount={list?.total}
          pageSize={10}
          siblingCount={1}
          currentPage={page}
        />
      </div>
    </div>
  );
};

export default BlogAdmin;