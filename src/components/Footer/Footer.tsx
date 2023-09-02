import React from 'react'
import logo from "../../image/Navbar/logo.svg"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='grid grid-cols-2 px-[24px] h-[200px] py-[36px] border-t-2 border-[#272829]'>
        <div className='flex flex-col justify-between'>
            <img src={logo} alt="logo-icon" className='w-[250px]'/>
            <div className='flex gap-x-2'>
                <Link to="">Điều khoản sử dụng</Link>
                <div className='w-[2px] h-full bg-slate-600'></div>
                <Link to="">Thông báo bảo mật</Link>
            </div>
        </div>
        <div className=''>
            <div className='grid grid-cols-2'>
                <div>
                    <ul>
                        <li>
                            <Link to="">Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link to="">Liên hệ</Link>
                        </li>
                        <li>
                            <Link to="">Giúp dỡ và hỗ trợ</Link>
                        </li>
                        <li>
                            <Link to="">Các điều khoản và chính sách</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="">Các khóa học</Link>
                        </li>
                        <li>
                            <Link to="">Các khóa học yêu thích</Link>
                        </li>
                        <li>
                            <Link to="">Các khóa học nổi bật</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-right font-semibold'>© 2023 PrimeEdu, Inc.</div>
        </div>
    </div>
  )
}

export default Footer