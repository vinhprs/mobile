import React from 'react'
import img from "../../image/Homepage/R.jpeg"
const CourseList = () => {
  return (
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
  )
}

export default CourseList