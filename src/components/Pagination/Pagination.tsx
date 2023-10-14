import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Pagination = () => {
  return (
    <div className="flex justify-center gap-x-4">
      <button className="cursor-pointer w-[50px] h-[50px] text-[#FF6636] rounded-full bg-[#FFEEE8] flex justify-center items-center hover:bg-[#FF6636] hover:text-white transition-all ease-in-out duration-150 disabled:bg-[#6E7485]">
        <BiLeftArrowAlt className=" text-[25px] " />
      </button>
      <button className="cursor-pointer w-[50px] h-[50px] text-[#FF6636] rounded-full bg-[#FFEEE8] flex justify-center items-center hover:bg-[#FF6636] hover:text-white transition-all ease-in-out duration-150">
        <BiRightArrowAlt className=" text-[25px]" />
      </button>
    </div>
  );
};

export default Pagination;
