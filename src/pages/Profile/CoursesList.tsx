import React from "react";
import Courses from "./Courses";

const CoursesList = () => {
  return (
    <div className="flex flex-col gap-y-[40px]">
      <h1 className="font-semibold text-[24px] text-[#1D2026]">
        Courses (957)
      </h1>
      <Courses />
    </div>
  );
};

export default CoursesList;
