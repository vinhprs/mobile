import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form"
import SignupForm from './SignupForm'
const Signup = () => {
  return (
    <div className='pt-[140px] pb-[60px] flex justify-center items-center h-full'>
        <div>
            <div className='w-[300px] border-b-[1px] border-[#272829] pb-6'>
                <h1 className='font-bold text-[24px] mb-5'>Đăng ký tài khoản PrimeEdu của bạn</h1>
                <div className='flex flex-col gap-y-3 mb-5'>
                    <SignupForm/>
                </div>
            </div>
            <div className='flex gap-x-[1px] justify-center py-5'>
                <span>Bạn đã có tài khoản?</span>
                <Link to="/login" className='font-semibold underline text-[#8614BC]'>Đăng nhập</Link>
            </div>
        </div>
    </div>
  )
}

export default Signup