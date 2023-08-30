import React from 'react'
import logo from "../../image/Navbar/logo.svg"
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-between h-[72px] px-[24px] shadow-xl'>
            <img src={logo} alt="logo-icon" className='w-[130px]'/>
            <form action="" className='w-[50%] relative'>
              <div className='flex items-center gap-4 bg-white py-3 px-4 rounded-full border-[1px] border-[#272829]'>
                <button type='submit'>
                  <AiOutlineSearch className='text-[#ccd2d8] text-xl'/>
                </button>
                <input type="text" name="" id="" className='w-full bg-transparent outline-none text-[#272829]' placeholder='Tìm các khóa học mà bạn quan tâm'/>
              </div>
              <div className='absolute top-[105%] left-0 w-full bg-red-600 p-3'>
                <div>
                  <div className='flex flex-col gap-y-3'>
                    <div className='flex items-center gap-x-3'>
                      <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo-subject" className='w-14 h-14 object-cover'/>
                      <div className=''>
                        <h1 className='text-[#272829]'>[S1] - Thầy Ngô Toản - Toán 10 - Cánh diều - Năm 2014</h1>
                        <p>trong Môn toán lớp 10 năm 2024</p>
                      </div>
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo-subject" className='w-14 h-14 object-cover'/>
                      <div></div>
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo-subject" className='w-14 h-14 object-cover'/>
                      <div></div>
                    </div>
                    <div>
                      <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo-subject" className='w-14 h-14 object-cover'/>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className='flex gap-x-3'>
              <Link to="/login" className='border-[#272829] border-[1px] px-5 py-3 text-[14px] font-semibold'>Đăng nhập</Link>
              <Link to="/signup" className='bg-[#272829] text-white px-5 py-3 text-[14px] font-semibold'>Đăng ký</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar