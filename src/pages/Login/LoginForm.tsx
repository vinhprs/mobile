import { Button } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({
        defaultValues:{
            email:"",
            password:""
        }
    })
  return (
    <div>
        <form action="">
          <div className='flex flex-col gap-y-3 mb-3'>
              <input type="text" placeholder='Email' className='w-[300px] px-1 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold'/>
              <input type="password" placeholder='Mật khẩu' className='w-[300px] px-1 py-3 outline-none border-[1px] border-[#272829] placeholder:text-[#272829] placeholder:font-semibold'/>
          </div>
          <Button _hover={{bg:"#5B0E7F"}} w="300px" bg="#8614BC" color="white" borderRadius="none">Đăng nhập</Button>
        </form>
    </div>
  )
}

export default LoginForm