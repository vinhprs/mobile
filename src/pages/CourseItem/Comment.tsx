import React from 'react'

const Comment = () => {
  return (
    <div>
        <div className='flex items-center gap-x-2'>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/874707/pexels-photo-874707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <span className='font-medium'>Nguyễn Cao Hồng Vinh</span>
                <p>Thầy dạy hay quá học kỳ 1 năm nay em được 9.75</p>
            </div>
        </div>
    </div>
  )
}

export default Comment