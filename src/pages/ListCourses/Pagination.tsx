import React from 'react'
import {MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight} from "react-icons/md"
const Pagination = () => {
  return (
    <div className='my-5 flex justify-center gap-x-2'>
        <button className='flex justify-center items-center text-[#272829] hover:text-[#8614BC] w-[40px] h-[40px] rounded-full border-[2px] border-[#272829] hover:border-[#8614BC] transition-all ease-in-out duration-150'>
            <MdOutlineKeyboardArrowLeft className='text-[25px]'/>
        </button>
        <button className='flex justify-center items-center text-[#272829] hover:text-[#8614BC] w-[40px] h-[40px] rounded-full border-[2px] border-[#272829] hover:border-[#8614BC] transition-all ease-in-out duration-150'>
            <MdOutlineKeyboardArrowRight className='text-[25px]'/>
        </button>
    </div>
  )
}

export default Pagination