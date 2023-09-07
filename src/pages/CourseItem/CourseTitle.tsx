import React from 'react'
import teacher from "../../image/Course/teacher.png"
const CourseTitle = () => {
  return (
    <div className=' border-[1px] border-[#272829] p-3'>
      <div className='grid grid-cols-[200px_1fr] gap-x-5'>
          <div className='w-full p-2 border-[1px] border-[#D8D9DA]'>
              <img src={teacher} alt="teacher" />
          </div>
          <div className='flex flex-col gap-y-2'>
              <h1 className='text-[24px] font-semibold '>Powerful Business Writing: How to Write Concisely</h1>
              <p className='text-[#61677A] font-medium'>A concise business writing course for punchy, professional and powerful writing – at work, at university, on your blog</p>
              <span>Giáo viên: <span>Thầy Nguyễn Quốc Chí</span></span>
          </div>
      </div>
      <div>
        <ul>
          
        </ul>
      </div>
    </div>
  )
}

export default CourseTitle