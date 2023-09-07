import React from 'react'
import imgSub from "../../image/Homepage/R.jpeg"
import { AiOutlineHeart } from 'react-icons/ai'
import {MdOutlineOndemandVideo,MdOutlineAssignment} from "react-icons/md"
import {IoIosInfinite} from "react-icons/io"
import {AiOutlineTrophy} from "react-icons/ai"
import {RiShareForwardLine} from "react-icons/ri"
const SidebarCourse = () => {
  return (
    <div className='w-full'>
        <img src={imgSub} alt="img" className='h-[150px] object-cover w-full'/>
        <div className='p-5 flex flex-col gap-y-2'>
            <h1 className='text-[30px] font-bold'>₫2,399,000</h1>
            <div className='mb-8'>
                <div className='grid grid-cols-[1fr_45px] items-center gap-x-2 mb-3'>
                    <button className='w-full bg-[#8614BC] text-center text-white font-semibold px-2 h-[45px]'>Thêm vào giỏ hàng</button>
                    <div className='cursor-pointer flex w-[45px] h-[45px] border-[1px] border-[#272829] items-center justify-center'>
                        <AiOutlineHeart className='text-[20px]'/>
                    </div>
                </div>
                <button className='w-full border-[1px] border-[#272829] text-center text[#272829] font-semibold px-2 h-[45px]'>Mua ngay</button>
            </div>
            <div className='flex flex-col gap-y-1 mb-5'>
                <h1 className='font-bold text-[#272829]'>Khóa học này sẽ bao gồm</h1>
                <ul className='text-[14px] text-[#61677A]'>
                    <li className='flex items-center gap-x-2'>
                        <MdOutlineOndemandVideo className='text-[16px]'/>
                        <span>55 giờ học trên video</span>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <MdOutlineAssignment/>
                        <span>39 đề thi</span>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <IoIosInfinite/>
                        <span>Truy cập trọn đời</span>
                    </li>
                    <li className='flex items-center gap-x-2'>
                        <AiOutlineTrophy/>
                        <span>Giấy chứng nhận sau khi hoàn thành</span>
                    </li>
                </ul>
            </div>
            <div className='flex items-center bg-[#8614BC] text-white h-[45px] justify-center gap-x-3'>
                <RiShareForwardLine className='text-[20px]'/>
                <span className='text-[16px] font-semibold'>Share</span>
            </div>
        </div>
    </div>
  )
}

export default SidebarCourse