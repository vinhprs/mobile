import React from 'react'
import {BsFillPeopleFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
const AnotherCourse = () => {
  return (
    <div>
        <div className='flex gap-x-3 text-[14px] text-[#272829]'>
            <img className='w-[80px] h-[80px] object-cover' src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-bi-n-thien-nhien-chim-b-nong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className='flex w-full justify-between'>
              <div className='flex flex-col gap-y-2'>
                <h1 className='font-semibold w-[400px]'>[S0] - MẤT GỐC TOÁN HÌNH 12 NĂM 2024 - THẦY NGUYỄN CÔNG NGUYÊN</h1>
                <div className='flex gap-x-2 items-center'>
                  <span className='px-2 py-1 bg-[#ECEB98] text-[#272829] font-medium'>Bestseller</span>
                  <span className='font-medium text-[#61677A]'>Thời lượng: 1.5h</span>
                </div>
              </div>
              <div className='flex h-fit gap-x-3'>
                <div className='flex gap-x-5'>
                  <div className='flex gap-x-1'>
                    <BsFillPeopleFill className='text-[20px]'/>
                    <span>90,344</span>
                  </div>
                  <h1 className='font-medium'><span>đ</span>1,899,000</h1>
                </div>
                <div>
                  <div className='cursor-pointer w-10 h-10 text-[20px] border-[1px] border-[#272829] flex justify-center items-center rounded-full'>
                    <AiOutlineHeart className=''/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AnotherCourse