import React from 'react'
import ViewList from './ViewList'

const View = () => {
  return (
    <div className='max-w-[1350px] w-full mx-auto text-[#272829] mb-[100px]'>
        <h1 className='text-[32px] font-bold mb-[50px]'>Làm thế nào những người học như bạn đạt được mục tiêu của họ</h1>
        <div>
            <ViewList/>
        </div>
    </div>
  )
}

export default View