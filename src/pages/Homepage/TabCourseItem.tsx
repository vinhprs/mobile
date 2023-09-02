import React from 'react'
import { Link } from 'react-router-dom'
import CourseList from './CourseList'
const TabCourseItem = () => {
  return (
    <div>
        <h1 className="text-[24px] font-semibold mb-3">Ngôn Ngữ Của Sự Logic Và Khám Phá Thế Giới</h1>
        <p className='text-[16px] text-[#61677A] mb-4'>Toán học là môn khoa học trừu tượng nhưng quan trọng, đóng vai trò quyết định trong nhiều khía cạnh của cuộc sống. Nó giúp ta phát triển tư duy logic, kỹ năng giải quyết vấn đề và hiểu sâu hơn về thế giới xung quanh. Toán học không chỉ là một công cụ quý báu để nghiên cứu và sáng tạo mà còn đóng góp tích cực vào sự tiến bộ của xã hội và công nghệ.</p>
        <Link to="" className='mb-6 px-4 font-semibold text-[14px] py-3 inline-block border-[1px] border-[#272829] hover:text-[white] hover:bg-[#272829] transition-all duration-200 ease-in-out'>Khám phá ngay</Link>
        <div className='grid grid-cols-6 gap-x-4'>
            <CourseList/>
            <CourseList/>
            <CourseList/>
            <CourseList/>
            <CourseList/>
            <CourseList/>
        </div>
    </div>
  )
}

export default TabCourseItem