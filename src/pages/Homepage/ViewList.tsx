import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import CourseList from './CourseList';
import img from "../../image/Homepage/R.jpeg"

const ViewList = () => {
  return (
    <Swiper
        spaceBetween={50} 
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]} 
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        loop={true}
    >
        <SwiperSlide>
            <Link to="">
                <div className='text-[#272829] cursor-pointer'>
                    <div className='w-full h-[150px] mb-2'>
                        <img src={img} alt="img" className='h-full w-full object-cover'/>
                    </div>
                    <h1 className='text-[16px] font-semibold'>Toán 12</h1>
                    <p className='text-[14px] text-[#61677A] font-medium mb-3'>Thầy Nguyễn Công Chính</p>
                    <div className='flex items-center gap-x-2 text-[14px]'>
                        <span className='text-[14px] text-[#61677A]'>Price: 4600</span>
                        <div className='px-3 py-2 bg-[#ECEB98] w-fit font-medium'>Best seller</div>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="">
                <div className='text-[#272829] cursor-pointer'>
                    <div className='w-full h-[150px] mb-2'>
                        <img src={img} alt="img" className='h-full w-full object-cover'/>
                    </div>
                    <h1 className='text-[16px] font-semibold'>Toán 12</h1>
                    <p className='text-[14px] text-[#61677A] font-medium mb-3'>Thầy Nguyễn Công Chính</p>
                    <div className='flex items-center gap-x-2 text-[14px]'>
                        <span className='text-[14px] text-[#61677A]'>Price: 4600</span>
                        <div className='px-3 py-2 bg-[#ECEB98] w-fit font-medium'>Best seller</div>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="">
                <div className='text-[#272829] cursor-pointer'>
                    <div className='w-full h-[150px] mb-2'>
                        <img src={img} alt="img" className='h-full w-full object-cover'/>
                    </div>
                    <h1 className='text-[16px] font-semibold'>Toán 12</h1>
                    <p className='text-[14px] text-[#61677A] font-medium mb-3'>Thầy Nguyễn Công Chính</p>
                    <div className='flex items-center gap-x-2 text-[14px]'>
                        <span className='text-[14px] text-[#61677A]'>Price: 4600</span>
                        <div className='px-3 py-2 bg-[#ECEB98] w-fit font-medium'>Best seller</div>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="">
                <div className='text-[#272829] cursor-pointer'>
                    <div className='w-full h-[150px] mb-2'>
                        <img src={img} alt="img" className='h-full w-full object-cover'/>
                    </div>
                    <h1 className='text-[16px] font-semibold'>Toán 12</h1>
                    <p className='text-[14px] text-[#61677A] font-medium mb-3'>Thầy Nguyễn Công Chính</p>
                    <div className='flex items-center gap-x-2 text-[14px]'>
                        <span className='text-[14px] text-[#61677A]'>Price: 4600</span>
                        <div className='px-3 py-2 bg-[#ECEB98] w-fit font-medium'>Best seller</div>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="">
                <div className='text-[#272829] cursor-pointer'>
                    <div className='w-full h-[150px] mb-2'>
                        <img src={img} alt="img" className='h-full w-full object-cover'/>
                    </div>
                    <h1 className='text-[16px] font-semibold'>Toán 12</h1>
                    <p className='text-[14px] text-[#61677A] font-medium mb-3'>Thầy Nguyễn Công Chính</p>
                    <div className='flex items-center gap-x-2 text-[14px]'>
                        <span className='text-[14px] text-[#61677A]'>Price: 4600</span>
                        <div className='px-3 py-2 bg-[#ECEB98] w-fit font-medium'>Best seller</div>
                    </div>
                </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="">
                <div className='text-[#272829] cursor-pointer'>
                    <div className='w-full h-[150px] mb-2'>
                        <img src={img} alt="img" className='h-full w-full object-cover'/>
                    </div>
                    <h1 className='text-[16px] font-semibold'>Toán 12</h1>
                    <p className='text-[14px] text-[#61677A] font-medium mb-3'>Thầy Nguyễn Công Chính</p>
                    <div className='flex items-center gap-x-2 text-[14px]'>
                        <span className='text-[14px] text-[#61677A]'>Price: 4600</span>
                        <div className='px-3 py-2 bg-[#ECEB98] w-fit font-medium'>Best seller</div>
                    </div>
                </div>
            </Link>
        </SwiperSlide>

    </Swiper>
  )
}

export default ViewList