import React from 'react';
import TableListCheckCourses from './TableListCheckCourses';

const DashboardCheckCourses = () => {
  return (
    <div className=" p-[24px] w-full mx-auto">
      <div className="flex flex-col gap-y-[24px]">
        <h1 className="text-[20px] font-medium">
          Danh sách tài khoản giáo viên
        </h1>
        <div>
          <TableListCheckCourses />
        </div>
      </div>
    </div>
  );
};

export default DashboardCheckCourses;