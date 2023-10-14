import React from "react";
import TabCreateCourse from "./TabCreateCourse";

const CreateCourse = () => {
  return (
    <div className="max-w-[1000px] p-[24px] w-full mx-auto">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-[20px] text-[#1D2026] font-semibold">
          Tạo khóa học
        </h1>
        <TabCreateCourse />
      </div>
    </div>
  );
};

export default CreateCourse;
