import React from 'react'
import teacher from "../../image/Course/teacher.png"
import {AiFillStar} from "react-icons/ai"
import {FaBookOpen} from "react-icons/fa"
const CourseTitle = () => {
  return (
    <div className=' border-[1px] border-[#272829] p-6 flex flex-col gap-y-5'>
      <div className='grid grid-cols-[200px_1fr] gap-x-5'>
        <div className='w-full p-2 border-[1px] border-[#D8D9DA] h-fit'>
            <img src={teacher} alt="teacher" />
        </div>
        <div className='flex flex-col gap-y-3'>
            <div className='flex flex-col gap-y-2'>
              <h1 className='text-[24px] font-semibold '>Powerful Business Writing: How to Write Concisely</h1>
              <p className='text-[#61677A] font-medium'>A concise business writing course for punchy, professional and powerful writing – at work, at university, on your blog</p>
              <span>Giáo viên: <span className='text-[#8614BC] font-semibold'>Thầy Nguyễn Quốc Chí</span></span>
            </div>
            <div className='w-full h-[1px] bg-[#D8D9DA]'></div>
            <div className='flex flex-col gap-y-3'>
                <h1 className='text-[20px] font-semibold text-[#8614BC]'>Đôi nét về thầy</h1>
                <ul className='flex flex-col gap-y-2'>
                  <li className='flex items-center gap-x-2'>
                    <div className='w-[24px] h-[24px] flex justify-center items-center border-[1px] border-[#8614BC] rounded-full'>
                      <AiFillStar className='text-[#8614BC]'/>
                    </div>
                    <span>Trình độ Thạc sĩ Toán.</span>
                  </li>
                  <li className='flex items-center gap-x-2'>
                    <div className='w-[24px] h-[24px] flex justify-center items-center border-[1px] border-[#8614BC] rounded-full'>
                      <AiFillStar className='text-[#8614BC]'/>
                    </div>
                    <span>Giáo viên kì cựu của bộ môn hình học, được mệnh danh là Ông vua Hình học.</span>
                  </li>
                  <li className='flex items-center gap-x-2'>
                    <div className='w-[24px] h-[24px] flex justify-center items-center border-[1px] border-[#8614BC] rounded-full'>
                      <AiFillStar className='text-[#8614BC]'/>
                    </div>
                    <span>Đã tham gia luyện thi 20 năm cho nhiều trung tâm luyện thi có uy tín ở Hà Nội.</span>
                  </li>
                  <li className='flex items-center gap-x-2'>
                    <div className='w-[24px] h-[24px] flex justify-center items-center border-[1px] border-[#8614BC] rounded-full'>
                      <AiFillStar className='text-[#8614BC]'/>
                    </div>
                    <span>Có hàng nghìn học sinh các thế hệ theo học.</span>
                  </li>
                  <li className='flex items-center gap-x-2'>
                    <div className='w-[24px] h-[24px] flex justify-center items-center border-[1px] border-[#8614BC] rounded-full'>
                      <AiFillStar className='text-[#8614BC]'/>
                    </div>
                    <span>Phương châm: Học hình không khó.</span>
                  </li>
                </ul>
            </div>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#D8D9DA]'></div>
      <div>
        <ul className='flex flex-col gap-y-3'>
          <li className='grid grid-cols-[20px_1fr] gap-x-4 items-start'>
            <FaBookOpen className='text-[20px] text-[#8614BC]'/>
            <p><span className='text-[#272829] font-semibold'>Mục tiêu:</span> Hệ thống toàn bộ kiến thức hình học 12 và kiến thức hình học 11 phục vụ đắc lực cho Hình 12.</p>
          </li>
          <li className='grid grid-cols-[20px_1fr] gap-x-4 items-start'>
            <FaBookOpen  className='text-[20px] text-[#8614BC]'/>
            <p><span className='text-[#272829] font-semibold'>Đối tượng:</span> Toàn bộ học sinh bắt đầu lên lớp 12 mất gốc toán Hình, những học sinh muốn nâng cao điểm số phần Hình học trong các kì thi.</p>
          </li>
          <li className='grid grid-cols-[20px_1fr] gap-x-4 items-start'>
            <FaBookOpen  className='text-[20px] text-[#8614BC]'/>
            <p><span className='text-[#272829] font-semibold'>Phương pháp:</span> Thiết kế bài giảng theo các vấn đề cụ thể, làm rõ từng vấn đề dưới góc nhìn phù hợp nhất cho học sinh mất gốc. Cung cấp phương pháp giải dễ hiểu, dễ áp dụng và bài tập phù hợp với đối tượng học sinh.</p>
          </li>
          <li className='grid grid-cols-[20px_1fr] gap-x-4 items-start'>
            <FaBookOpen  className='text-[20px] text-[#8614BC]'/>
            <p><span className='text-[#272829] font-semibold'>Nội dung/lợi ích cho HS:</span> Giúp các em học sinh lấy lại kiến thức Hình học căn bản, tự giải quyết được các bài toán Hình ở mức độ dễ và vừa trong đề thi, tăng 1-2 điểm phần Hình.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CourseTitle