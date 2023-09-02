import React from 'react'
import Google from './Google'
import Facebook from './Facebook'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className='pt-[72px] flex justify-center items-center h-[73vh]'>
        <div className='w-[300px]'>
            <h1 className='font-bold text-[24px] mb-5'>Đăng nhập vào tài khoản PrimeEdu của bạn</h1>
            <div className='flex flex-col gap-y-3'>
                <Google/>
                <Facebook/>
                <LoginForm/>
            </div>
        </div>
    </div>
  )
}

export default Login