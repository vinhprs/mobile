import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';
import { useAppDispatch } from '../../hooks/appHooks';
import { getDetailAction, getListBlogAction } from '../../store/actions/blog.action';
import parse from 'html-react-parser';
import { convertTimeToAgo } from '../../utils/lib';
const DetailBlog = () => {
  const {idblog} = useParams();
  const [detailBlog,setDetailBlog] = useState<any>();
  const [listBlog,setListBlog] = useState<any>();
  const [listBlogTags,setListBlogTags] = useState<any>();
  console.log('🚀 ~ DetailBlog ~ idBlog:', idblog);
  const dispatch = useAppDispatch();
  const getDetailBlog = async(id:any)=>{
    const res:any = await dispatch(getDetailAction(String(id)));
    if(res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ getDetailBlog ~ res:', res);
      setDetailBlog(res?.payload?.data);
      getListlBlogTags(res?.payload?.data?.tags);
    }
  };
  const getListlBlog = async()=>{
    const res:any = await dispatch(getListBlogAction({}));
    if(res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ getDetailBlog ~ res:', res);
      setListBlog(res?.payload?.data);
    }
  };
  const getListlBlogTags = async(tags:any)=>{
    const payload = new URLSearchParams({
      tags:tags
    });
    const res:any = await dispatch(getListBlogAction(payload));
    if(res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ getDetailBlog ~ res:', res);
      setListBlogTags(res?.payload?.data);
    }
  };
  useEffect(()=>{
    getDetailBlog(idblog);
    getListlBlog();
    
  },[idblog]);
  return (
    <div className='pt-[100px] pb-[60px] px-[24px] max-w-[1200px] w-full mx-auto'>
      <div>
        <h1 className='text-[32px] font-semibold mb-[30px]'>{detailBlog?.title && parse(detailBlog?.title)}</h1>
        <div className='flex items-center justify-between mb-[30px]'>
          <div className='flex items-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
              <img className='w-full h-full object-cover' src={detailBlog?.user?.avatar} alt="" />
            </div>
            <div>
              <h1 className='font-semibold'>{detailBlog?.user?.username}</h1>
              <span className='text-[14px] opacity-30'>{convertTimeToAgo(detailBlog?.createdAt)}</span>
            </div>
          </div>
          <div>Lưak chọn hêhhe</div>
        </div>
        <div>
          {detailBlog?.content&&parse(detailBlog?.content)}
        </div>
        <div className='flex items-center gap-3 my-[20px]'>
          {detailBlog?.tags?.map((item:any,index:number)=>(
            <span key={index} className='px-[10px] py-[4px] bg-slate-200 text-[14px] text-slate-500'>{item}</span>
          ))}
          {/* <span className='px-[10px] py-[4px] bg-slate-200 text-[14px] text-slate-500'>Javascript</span> */}
        </div>
        <div>
          <h1 className='mb-[10px] text-[20px] font-semibold'>Bài đăng cùng tác giả</h1>
          <div>
            {listBlog?.listData?.filter((item:any,index:number)=>item?.user?._id === detailBlog?.user?._id && item?._id !== idblog)?.map((itemBlog:any,indexBlog:number)=>(

              <div key={indexBlog} className='flex items-center gap-3'>
                <div className='w-[5px] h-[5px] rounded-full bg-black'></div>
                <Link to={`/blog/${itemBlog?._id}`} className='hover:underline'>{itemBlog?.title && parse(itemBlog?.title)}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full h-[3px] bg-[#FF6636] my-[30px]'></div>
        <div>
          <h1 className='mb-[10px] text-[20px] font-semibold'>Các tin nổi bật khác</h1>
          <div className='flex flex-col gap-3'>
            {listBlogTags?.listData?.map((item:any,index:number)=>(

              <BlogCard key={item?._id} item={item}></BlogCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;