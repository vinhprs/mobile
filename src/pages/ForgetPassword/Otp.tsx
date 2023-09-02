import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import { useForm } from 'react-hook-form'

const Otp = () => {
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({
        defaultValues:{
            newPassword:"",
            confirmNewPassword:"",
            otp:""
        }
    })
  return (
    <div className='pt-[140px] pb-[60px] flex justify-center items-center h-full'>
        <div>
            <div className='w-[300px] border-b-[1px] border-[#272829] pb-6'>
                <h1 className='font-bold text-[24px] mb-5'>Đặt lại mật khẩu mới</h1>
                <form>
                    <div className='mb-3 flex flex-col gap-y-3'>
                        <div className='flex items-center gap-x-2 justify-between w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829]'>
                            <input {...register("newPassword")} type={showPass ? "text" :"password"} placeholder='Mật khẩu mới' className='w-full focus:outline-none placeholder:text-[#272829] placeholder:font-semibold'/>
                            {showPass ? (
                            <AiFillEyeInvisible className='cursor-pointer text-[20px]' onClick={()=>setShowPass(false)}/>
                            ):(
                            <AiFillEye className='cursor-pointer text-[20px]' onClick={()=>setShowPass(true)}/>
                            )}
                        </div>
                        <div className='flex items-center gap-x-2 justify-between w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829]'>
                            <input {...register("confirmNewPassword")} type={showConfirmPass ? "text" :"password"} placeholder='Xác nhận lại mật khẩu' className='w-full focus:outline-none placeholder:text-[#272829] placeholder:font-semibold'/>
                            {showConfirmPass ? (
                            <AiFillEyeInvisible className='cursor-pointer text-[20px]' onClick={()=>setShowConfirmPass(false)}/>
                            ):(
                            <AiFillEye className='cursor-pointer text-[20px]' onClick={()=>setShowConfirmPass(true)}/>
                            )}
                        </div>
                        <input {...register("otp")} type="text" placeholder='OTP code' className='focus:outline-none w-[300px] px-3 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold '/>
                    </div>
                    <Button _hover={{bg:"#5B0E7F"}} w="300px" bg="#8614BC" color="white" borderRadius="none" mb={3}>Đổi mật khẩu</Button>
                    <Button _hover={{bg:"#5B0E7F"}} w="300px" bg="#8614BC" color="white" borderRadius="none">Gởi lại mã OTP</Button>
                </form>
            </div>
            <div className='flex gap-x-[1px] justify-center py-5'>
                <span>Bạn đã có tài khoản?</span>
                <Link to="/login" className='font-semibold underline text-[#8614BC]'>Đăng nhập</Link>
            </div>
        </div>
    </div>
  )
}

export default Otp