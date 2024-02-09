import React from 'react';
import { Link } from 'react-router-dom';
const Learning = () => {
  return (
    <div className="title_learn text-[14px] cursor-pointer relative text-[#272829]">
      <h1 className="">My learning</h1>
      <div className="modal_title_learn absolute top-[100%] right-[50%] w-[280px] h-fit bg-white border-[1px] border-[#272829]">
        <div className="px-3 py-3 flex flex-col items-center">
          <h1>no data</h1>
        </div>
        <div className="px-3 py-3 border-[1px]">
          <Link
            to=""
            className="text-white px-2 py-3 text-center w-full block bg-[#272829] font-medium"
          >
            Tới khóa học
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learning;
