import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { PiMonitorPlayFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
const ListVideoChapter = ({ code }: any) => {
  const pathname = useLocation();
  console.log(
    "🚀 ~ file: ListVideoChapter.tsx:7 ~ ListVideoChapter ~ pathname:",
    pathname
  );
  const router = {
    pathname: pathname.pathname,
    search: `?id=${code}`,
  };
  return (
    <Link
      to={router}
      className="flex gap-x-3 hover:bg-[#D8D9DA] p-4 cursor-pointer"
    >
      <AiOutlinePlayCircle className="text-[20px] mt-[0.5px]" />
      <div className="flex flex-col gap-y-2">
        <div>
          <span>6.</span>
          <span>Yarn and NPM commands</span>
        </div>
        <div className="flex items-center gap-x-2">
          <PiMonitorPlayFill className="text-[20px]" />
          <div>
            <p>Tài liệu</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListVideoChapter;
