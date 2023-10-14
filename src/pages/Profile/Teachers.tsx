import React from "react";
import TeachersList from "./TeachersList";

const Teachers = () => {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <h1 className="text-[#1D2026] text-[24px] font-semibold ">
        Giáo viên (489)
      </h1>
      <TeachersList />
    </div>
  );
};

export default Teachers;
