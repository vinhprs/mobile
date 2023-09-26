import React from "react";
import AssignmentList from "./AssignmentList";

const Assignments = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="font-semibold text-xl">Bài tập về tính lượng tủ</h1>
      <div className="flex flex-col gap-y-2">
        <AssignmentList />
        <AssignmentList />
        <AssignmentList />
        <AssignmentList />
        <AssignmentList />
      </div>
    </div>
  );
};

export default Assignments;
