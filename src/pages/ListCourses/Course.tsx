import React, { useState } from 'react'
import imgSub from "../../image/Homepage/R.jpeg"
import {BsCheck2} from "react-icons/bs"
import { Link } from 'react-router-dom'
import {AiOutlineHeart} from "react-icons/ai"
const Course = () => {
  const [isSignIn,setIsSignIn] = useState(true)
  return (
    <div className='course_re'>
      <div className='flex'>
        <div className='flex gap-x-[15px] flex-1 cursor-pointer'>
          <img src={imgSub} alt="" className='w-[150px] object-cover'/>
          <div>
            <h1 className='text-[20px] font-semibold mb-1 text-[#272829]'>React - The Complete Guide 2023 (incl. React Router & Redux)</h1>
            <p className='font-normal'>Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!</p>
            <p className='text-[14px] font-normal text-[#61677A]'>bởi thầy Nguyễn Công Minh</p>
            <span className='text-[14px] font-normal text-[#61677A]'>55 giờ học, 12 chuyên đề</span>
          </div>
        </div>
        <h1 className='w-[250px] text-right text-[20px] font-semibold mb-1 text-[#272829]'><span>đ</span>2,399,000</h1>
      </div>
      <div className='course_ab bg-white w-[400px] z-[2] border-[1px] border-[#272829] shadow-lg p-4'>
        <h1 className='text-[18px] font-semibold mb-3'>Chúng ta sẽ được học những gì?</h1>
        <ul className='flex flex-col gap-y-3 mb-3'>
          <li className='grid grid-cols-[30px_1fr] items-center gap-x-3'>
            <BsCheck2 className='text-[20px]'/>
            <span>Learn React from the ground up and finish the course as an advanced React developer</span>
          </li>
          <li className='grid grid-cols-[30px_1fr] items-center gap-x-3'>
            <BsCheck2 className='text-[20px]'/>
            <span>Build multiple high-quality demo apps, including a fullstack app built with NextJS</span>
          </li>
          <li className='grid grid-cols-[30px_1fr] items-center gap-x-3'>
            <BsCheck2 className='text-[20px]'/>
            <span>Join more than 750,000 students in this course & more than 2,500,000 students I taught across all my courses</span>
          </li>
        </ul>
        {isSignIn ? (
          <div>
            <div className='grid grid-cols-[1fr_40px] items-center gap-5'>
              <button className='w-full bg-[#8614BC] text-center text-white font-semibold px-2 h-[40px]'>Thêm vào giỏ hàng</button>
              <div className='cursor-pointer flex w-[45px] h-[45px] rounded-full border-[1px] border-[#272829] items-center justify-center'>
                <AiOutlineHeart className='text-[20px]'/>
              </div>
            </div>
          </div>
        ):(
          <Link to="/login" className='bg-[#8614BC] w-full block text-center text-white font-semibold px-2 py-2'>Đăng nhập</Link>
        )}
      </div>
    </div>
  )
}

export default Course