import React, { useEffect, useState } from 'react';
// import PaginationNew from '../../components/Pagination/PagiantionNew';
import BlogCard from './BlogCard';
import { useAppDispatch } from '../../hooks/appHooks';
import { getListBlogAction } from '../../store/actions/blog.action';
import PagiantionNew from '../../components/Pagination/PagiantionNew';
import { STATUS_BLOG } from '../../utils/type';

const Blog = () => {
  const [page,setPage] = useState(1);
  const [list, setList] = useState<any>();
  const dispatch = useAppDispatch();
  const listBlog = async()=>{
    const payload = new URLSearchParams({
      limit: '12',
      page: page.toString(),
      status:STATUS_BLOG.ACCEPTED
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
    <div className="pt-[100px] pb-[60px] px-[24px] max-w-[1200px] w-full mx-auto">
      <div>
        <h1 className='text-[25px] text-[#FF6636] font-semibold'>Bài viết nổi bật</h1>
        <p className='text-[14px]'>Tổng hợp các bài viết chia sẻ về kinh nghiệm, phương pháp dạy học và một số kiến thức bổ ích cho các bạn học sinh</p>
        <div className='grid grid-cols-7 gap-5 mt-[20px]'>
          <div className='col-span-5'>
            <div className='flex flex-col gap-3 mb-[50px]'>
              {list?.listData?.map((item:any,index:number)=>(

                <BlogCard key={item?._id} item={item}/>
              ))}
            </div>
            <PagiantionNew
              onPageChange={handleChange}
              totalCount={list?.total}
              pageSize={10}
              siblingCount={1}
              currentPage={page}
            />
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