import React from "react";
import TableListTeacher from "./TableListTeacher";

const DashboardAdminTeacher = () => {
  return (
    <div className=" p-[24px] w-full mx-auto">
      <div className="flex flex-col gap-y-[24px]">
        <h1 className="text-[20px] font-medium">
          Danh sách tài khoản giáo viên
        </h1>
        <div>
          <TableListTeacher />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminTeacher;
