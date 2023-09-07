import React from 'react'
import SidebarCourse from './SidebarCourse'
import CourseDetail from './CourseDetail'

const CourseItem = () => {
  return (
    <div className='pt-[100px] pb-[60px] px-[24px] max-w-[1200px] mx-auto w-full'>
        <div className='grid grid-cols-[1fr_300px] gap-x-3'>
            <div className='text-[#272829]'>
                <CourseDetail/>
            </div>
            <div className='shadow-md'>
                <SidebarCourse/>
            </div>
        </div>
    </div>
  )
}

export default CourseItem