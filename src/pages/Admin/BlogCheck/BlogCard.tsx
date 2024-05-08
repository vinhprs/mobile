import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import CheckBlog from './CheckBlog';
import parse from 'html-react-parser';
import { convertTimeToAgo } from '../../../utils/lib';
import { useAppDispatch } from '../../../hooks/appHooks';
import { approveBlogAction, getDetailAction } from '../../../store/actions/blog.action';
import { STATUS_BLOG } from '../../../utils/type';
import { useToast } from '@chakra-ui/react';
const BlogCard = ({item}:any) => {
  const toast = useToast();
  const [showBlog, setIsShowBlog] = useState(false);
  const [showReason, setShowReason] = useState(false);
  const [detailBlog,setDetailBlog] = useState<any>();
  const dispatch = useAppDispatch();
  const getDetailBlog = async(id:any)=>{
    const res:any = await dispatch(getDetailAction(String(id)));
    if(res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ getDetailBlog ~ res:', res);
      setDetailBlog(res?.payload?.data);
    }
  };
  const handleClick = ()=>{
    setIsShowBlog(!showBlog);
  };

  useEffect(()=>{
    getDetailBlog(item?._id);
    
  },[item]);
  const approveBlog = async(id:any)=>{
    const payload = {
      '_id':id,
      'status':STATUS_BLOG.ACCEPTED
    };
    try{
      const res = await dispatch(approveBlogAction(payload));
      if(res.meta.requestStatus === 'fulfilled'){
        console.log('🚀 ~ approveBlog ~ res:', res);
        toast({
          title: 'Kiểm duyệt thành công',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position:'top-right'
        });
      }
    }catch(e:any){
      console.log('🚀 ~ approveBlog ~ e:', e);
      
    }
  };
  return (
    <div className='p-[20px] border-[2px] rounded-xl'>
      <div onClick={handleClick} className='cursor-pointer flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
              <img className='w-full h-full object-cover' src={item?.user?.avatar} alt="" />
            </div>
            <span className='font-medium text-[14px]'>{item?.user?.username}</span>
          </div>
          <div>
            
          </div>
        </div>

        <div className='grid grid-cols-7 gap-4'>
          <div className='col-span-5 flex flex-col gap-2'>
            <h1 className='text-[20px] font-semibold uppercase'>{item?.title && parse(item?.title)}</h1>
            <p className='text-[14px] text-slate-400 line-clamp-2'>{item?.previewContent && parse(item?.previewContent)}</p>
            <div>
              <span className='text-[12px] font-medium'>{convertTimeToAgo(item?.createdAt)}</span>
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
            {detailBlog?.content && parse(detailBlog?.content)}
          </div>
        )
      }
      <div className='flex items-center gap-3'>
        <button onClick={()=>approveBlog(item?._id)} className='z-10 flex items-center gap-3 bg-green-500 text-white w-fit p-[8px] rounded-lg'>
          <FaCheck/>
          <div className='text-[14px]'>Được kiểm duyệt</div>
        </button>
        <button onClick={()=>setShowReason(!showReason)} className='z-10 flex items-center gap-3 bg-red-500 text-white w-fit p-[8px] rounded-lg'>
          <IoMdCloseCircleOutline/>
          <div className='text-[14px]'>Không được kiểm duyệt</div>
        </button>
      </div>
      {showReason && (

        <CheckBlog id={item?._id} setShowReason={setShowReason}/>
      )}
    </div>
  );
};

export default BlogCard;