import React, { useEffect, useRef, useState } from 'react'
import logo from "../../image/Navbar/logo.svg"
import {AiOutlineSearch} from "react-icons/ai"
import { Link } from 'react-router-dom'
import SearchResult from '../SearchResult/SearchResult'
import { useForm } from 'react-hook-form'
import { useDebounce } from '../../hooks/useDebounce'
import { click } from '@testing-library/user-event/dist/click'
const Navbar = () => {
  const [value,setValue]=useState("")
  const [isOpen,setIsOpen] = useState(false)
  const focusRef:any = useRef(null)
  const debouncedValue = useDebounce<string>(value, 500)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues:{
      search:""
    }
  })
  const handleOnSubmit = (data:any)=>{
    console.log(data);
    
  }
  const handleChange =(e:any)=>{
    e.preventDefault()
    setValue(e.target.value)
    console.log(e.target.value);
    
  }
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
    console.log(debouncedValue);
    
  }, [debouncedValue])
  // console.log(debouncedValue);
  const handleOpen = ()=>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    let handler = (e:any)=>{
      if(!focusRef?.current?.contains(e.target)){
        setIsOpen(false)
      }
    }
    document.addEventListener("click",handler)
    return ()=>document.addEventListener("click",handler)
  },[])
  return (
    <div className='fixed top-0 left-0 w-full z-10 bg-white' ref={focusRef}>
        <div className='flex items-center justify-between h-[72px] px-[24px] shadow-xl'>
            <img src={logo} alt="logo-icon" className='w-[130px]'/>
            <form action="" className='w-[50%] relative' onSubmit={handleSubmit(handleOnSubmit)}>
              <div className='flex items-center gap-4 bg-white py-3 px-4 rounded-full border-[1px] border-[#272829]'>
                <button type={value === "" ? "button" : "submit"} className={`${value==="" ? "cursor-default" : "cursor-pointer"}`}>
                  <AiOutlineSearch className='text-[#ccd2d8] text-xl'/>
                </button>
                <input  {...register("search")} ref={focusRef}  type="text" name="search" id="search" className='w-full bg-transparent outline-none text-[#272829]' placeholder='Tìm các khóa học mà bạn quan tâm' onChange={handleChange} onClick={handleOpen}/>
              </div>
              {isOpen && (
                <SearchResult value={value} debouncedValue={debouncedValue}/>
              )}
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