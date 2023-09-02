import React from 'react'
import TabCourses from './TabCourses'

const Courses = () => {
  return (
    <div className='max-w-[1350px] w-full mx-auto text-[#272829] mb-[100px]'>
        <h1 className='text-[32px] font-bold mb-2'>Nhiều lựa chọn khóa học</h1>
        <p className='text-[18px] font-normal mb-8 text-[#61677A]'>Chọn từ hơn 210.000 khóa học video trực tuyến với những bổ sung mới được xuất bản hàng tháng</p>
        <TabCourses/>
    </div>
  )
}

export default Courses