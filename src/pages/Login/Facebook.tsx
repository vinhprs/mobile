import React from 'react'
import facebook from "../../image/Login/facebook-svgrepo-com.svg"
const Facebook = () => {
  return (
    <div className='flex items-center py-1 px-3 border-[1px] border-[#272829] w-[300px] gap-x-2'>
        <img src={facebook} alt="google-icon" className='w-10'/>
        <div className='font-semibold'>Tiếp tục với Facebook</div>
    </div>
  )
}

export default Facebook