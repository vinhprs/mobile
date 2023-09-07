import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Courses from './Courses'
import {BsFilter} from "react-icons/bs"
import { Select } from '@chakra-ui/react'
const ListCourses = () => {
  const [openSidebar,setOpenSidebar] = useState(false)
 
  const handleOpenSidebar = ()=>{
    setOpenSidebar(!openSidebar)
  }
  return (
    <div className='pt-[100px] pb-[60px] px-[24px]'>
        <h1 className='text-[32px] font-semibold'>Có 599 kết quả về: <span>Toán 11</span> </h1>
        <div className='flex my-10 items-center justify-between'>
          <div className='flex gap-x-6'>
            <div onClick={handleOpenSidebar} className='cursor-pointer px-2 py-1 border-[1px] border-[#272829] flex items-center w-[100px] justify-center gap-x-2'>
              <BsFilter className='text-[20px]'/>
              <p className='font-semibold'>Lọc</p>
            </div>
            <div className='px-2 py-1 border-[1px] border-[#272829] text-[14px]'>
              <div className='font-semibold'>Sắp xếp theo</div>
              <Select placeholder='Select option' border="none" _focusVisible={{border:"none"}}>
                <option value='option1'>Mới nhất</option>
                <option value='option2'>Liên quan nhất</option>
                <option value='option3'>Nhiều reivew nhất</option>
              </Select>
            </div>
          </div>
          <span className='font-semibold text-[14px] text-[#61677A]'>6,640 results</span>
        </div>
        <div className={`grid ${openSidebar ?"grid-cols-1" :"grid-cols-[300px_1fr]"} gap-x-7`}>
            <div className={` ${openSidebar ? "hidden" : ""}`}>
                <Sidebar/>
            </div>
            <div className=''>
                <Courses/>
            </div>
        </div>
    </div>
  )
}

export default ListCourses