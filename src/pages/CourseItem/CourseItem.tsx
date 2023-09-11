import React from 'react'
import SidebarCourse from './SidebarCourse'
import CourseDetail from './CourseDetail'
import TabCourse from './TabCourse'

const CourseItem = () => {
  return (
    <div className='pt-[100px] pb-[60px] px-[24px] max-w-[1200px] mx-auto w-full'>
        <div className='grid grid-cols-[1fr_300px] gap-x-3'>
            <div className='text-[#272829] flex flex-col gap-y-5'>
                <CourseDetail/>
                <TabCourse/>
            </div>
            <div className='shadow-md h-fit'>
                <SidebarCourse/>
            </div>
        </div>
    </div>
  )
}

export default CourseItem