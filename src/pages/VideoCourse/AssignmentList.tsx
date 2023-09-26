import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineAssignment } from "react-icons/md";
const AssignmentList = () => {
  const pathname = useLocation();
  let newPathName =
    pathname?.pathname?.split("/").slice(0, -1).join("/") + "/assignment";
  const router = {
    pathname: newPathName,
    search: `?id=9849664`,
  };
  return (
    <Link to={router}>
      <div className="flex items-center gap-x-2 p-3 border-[1px] border-[#272829]">
        <MdOutlineAssignment className="text-[20px]" />
        <span className="text-[14px] font-semibold text-[#61677A]">
          Bài tập về tính lượng tử và phản chất lượng tử
        </span>
      </div>
    </Link>
  );
};

export default AssignmentList;
