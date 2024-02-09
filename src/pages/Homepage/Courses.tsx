import React from 'react';
import TabCourse from './TabCourse';

const Courses = () => {
  return (
    <div className="bg-[#F5F7FA] px-[15px] py-[15px]  mb-[100px]">
      <div className="max-w-[1350px] w-full mx-auto text-[#1D2026] ">
        <h1 className="text-[32px] font-bold mb-2">Nhiều lựa chọn khóa học</h1>
        <p className="text-[18px] font-normal mb-8 text-[#8C94A3]">
          Chọn từ hơn 210.000 khóa học video trực tuyến với những bổ sung mới
          được xuất bản hàng tháng
        </p>
      </div>
      <TabCourse />
    </div>
  );
};

export default Courses;
