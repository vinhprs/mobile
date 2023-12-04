import React from "react";
import TableListStudent from "./TableListStudent";

const DashboardAdmin = () => {
  return (
    <div className=" p-[24px] w-full mx-auto">
      <div className="flex flex-col gap-y-[24px]">
        <h1 className="text-[20px] font-medium">
          Danh sách tài khoản học viên
        </h1>
        <div>
          <TableListStudent />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
