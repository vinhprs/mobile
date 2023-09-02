import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import {BiSolidQuoteAltLeft} from "react-icons/bi"
import {AiFillPlayCircle} from "react-icons/ai"
const ListComment = () => {
  return (
    <Swiper spaceBetween={50} 
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]} 
            slidesPerView={3}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            loop={true}
        >
        <SwiperSlide>
            <Link to="">
                <div className='p-6 border-[1px] border-[#272829]'>
                    <div className='border-b-[1px] border-[#272829] pb-6'>
                        <BiSolidQuoteAltLeft className='text-[25px]'/>
                        <div className='text-[16px] font-normal text-[#61677A] mb-2'>Tôi tự hào nói rằng sau vài tháng tham gia khóa học này...<span className='font-semibold text-[#272829]'>tôi đã vượt qua kỳ thi và hiện là Người thực hành đám mây được chứng nhận AWS!</span> Nội dung này chính xác là nội dung mà kỳ thi của ĐCSTQ đề cập.</div>
                        <div className='flex gap-x-2 items-center'>
                            <span className='w-10 h-10 rounded-full flex items-center justify-center bg-[#272829] text-white text-center'>W</span>
                            <span>William</span>
                        </div>
                    </div>
                    <div className='pt-6 flex items-center gap-x-2 text-[#8614BC] hover:text-[#5B0E7F] transition-all ease-in-out duration-150'>
                        <AiFillPlayCircle className='text-[40px] '/>
                        <p className='text-[14px] font-semibold'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                    </div>
                </div> 
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="">
                <div className='p-6 border-[1px] border-[#272829]'>
                    <div className='border-b-[1px] border-[#272829] pb-6'>
                        <BiSolidQuoteAltLeft className='text-[25px]'/>
                        <div className='text-[16px] font-normal text-[#61677A] mb-2'>Tôi tự hào nói rằng sau vài tháng tham gia khóa học này...<span className='font-semibold text-[#272829]'>tôi đã vượt qua kỳ thi và hiện là Người thực hành đám mây được chứng nhận AWS!</span> Nội dung này chính xác là nội dung mà kỳ thi của ĐCSTQ đề cập.</div>
                        <div className='flex gap-x-2 items-center'>
                            <span className='w-10 h-10 rounded-full flex items-center justify-center bg-[#272829] text-white text-center'>W</span>
                            <span>William</span>
                        </div>
                    </div>
                    <div className='pt-6 flex items-center gap-x-2 text-[#8614BC] hover:text-[#5B0E7F] transition-all ease-in-out duration-150'>
                        <AiFillPlayCircle className='text-[40px] '/>
                        <p className='text-[14px] font-semibold'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                    </div>
                </div> 
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="">
                <div className='p-6 border-[1px] border-[#272829]'>
                    <div className='border-b-[1px] border-[#272829] pb-6'>
                        <BiSolidQuoteAltLeft className='text-[25px]'/>
                        <div className='text-[16px] font-normal text-[#61677A] mb-2'>Tôi tự hào nói rằng sau vài tháng tham gia khóa học này...<span className='font-semibold text-[#272829]'>tôi đã vượt qua kỳ thi và hiện là Người thực hành đám mây được chứng nhận AWS!</span> Nội dung này chính xác là nội dung mà kỳ thi của ĐCSTQ đề cập.</div>
                        <div className='flex gap-x-2 items-center'>
                            <span className='w-10 h-10 rounded-full flex items-center justify-center bg-[#272829] text-white text-center'>W</span>
                            <span>William</span>
                        </div>
                    </div>
                    <div className='pt-6 flex items-center gap-x-2 text-[#8614BC] hover:text-[#5B0E7F] transition-all ease-in-out duration-150'>
                        <AiFillPlayCircle className='text-[40px] '/>
                        <p className='text-[14px] font-semibold'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                    </div>
                </div> 
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="">
                <div className='p-6 border-[1px] border-[#272829]'>
                    <div className='border-b-[1px] border-[#272829] pb-6'>
                        <BiSolidQuoteAltLeft className='text-[25px]'/>
                        <div className='text-[16px] font-normal text-[#61677A] mb-2'>Tôi tự hào nói rằng sau vài tháng tham gia khóa học này...<span className='font-semibold text-[#272829]'>tôi đã vượt qua kỳ thi và hiện là Người thực hành đám mây được chứng nhận AWS!</span> Nội dung này chính xác là nội dung mà kỳ thi của ĐCSTQ đề cập.</div>
                        <div className='flex gap-x-2 items-center'>
                            <span className='w-10 h-10 rounded-full flex items-center justify-center bg-[#272829] text-white text-center'>W</span>
                            <span>William</span>
                        </div>
                    </div>
                    <div className='pt-6 flex items-center gap-x-2 text-[#8614BC] hover:text-[#5B0E7F] transition-all ease-in-out duration-150'>
                        <AiFillPlayCircle className='text-[40px] '/>
                        <p className='text-[14px] font-semibold'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                    </div>
                </div> 
            </Link>
        </SwiperSlide>
    </Swiper>
  )
}

export default ListComment