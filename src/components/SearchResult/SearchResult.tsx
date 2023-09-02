import React from 'react'
import { Spinner } from '@chakra-ui/react'
const SearchResult = ({value,debouncedValue}:any) => {
  return (
    <div className='absolute top-[105%] left-0 w-full bg-white shadow-xl border-[#D8D9DA] border-[1px] rounded-xl p-3'>
        {debouncedValue !== value ? (
            <div className='flex w-full items-center justify-center'>
                <Spinner color='red.500' />
            </div>
        ):(
            <div>
                <div className='flex flex-col gap-y-3'>
                    <div className='flex items-center gap-x-3 cursor-pointer hover:bg-[#D8D9DA] p-3'>
                        <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo-subject" className='w-14 h-14 object-cover'/>
                        <div className=''>
                            <h1 className='text-[#272829] font-bold'>[S1] - Thầy Ngô Toản - Toán 10 - Cánh diều - Năm 2014</h1>
                            <p className='text-[#61677A] italic'>trong Môn toán lớp 10 năm 2024</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3 cursor-pointer hover:bg-[#D8D9DA] p-3'>
                        <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo-subject" className='w-14 h-14 object-cover'/>
                        <div className=''>
                            <h1 className='text-[#272829] font-bold'>[S1] - Thầy Ngô Toản - Toán 10 - Cánh diều - Năm 2014</h1>
                            <p className='text-[#61677A] italic'>trong Môn toán lớp 10 năm 2024</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3 cursor-pointer hover:bg-[#D8D9DA] p-3'>
                        <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo-subject" className='w-14 h-14 object-cover'/>
                        <div className=''>
                            <h1 className='text-[#272829] font-bold'>[S1] - Thầy Ngô Toản - Toán 10 - Cánh diều - Năm 2014</h1>
                            <p className='text-[#61677A] italic'>trong Môn toán lớp 10 năm 2024</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3 cursor-pointer hover:bg-[#D8D9DA] p-3'>
                        <img src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo-subject" className='w-14 h-14 object-cover'/>
                        <div className=''>
                            <h1 className='text-[#272829] font-bold'>[S1] - Thầy Ngô Toản - Toán 10 - Cánh diều - Năm 2014</h1>
                            <p className='text-[#61677A] italic'>trong Môn toán lớp 10 năm 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default SearchResult