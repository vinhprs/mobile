import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { BsPlayFill, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import ModalShare from "./ModalShare";

const Mycourse = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="flex flex-col gap-y-2 shadow-[6px_3px_16px_-4px_rgba(0,0,0,0.44)]">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/15591206/pexels-photo-15591206/free-photo-of-l-nh-m-a-t-ph-n-anh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div
            onClick={onOpen}
            className="z-[1] cursor-pointer absolute top-0 right-0 w-[30px] h-[30px] bg-white flex justify-center items-center hover:bg-[#ACADAE]"
          >
            <BsThreeDotsVertical className="text-[#272829] text-[20px]" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center opacity-0 hover:opacity-100 transition-all ease-in-out duration-300">
            <Link
              to=""
              className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full cursor-pointer"
            >
              <BsPlayFill className="text-[30px]" />
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="mb-4">
            <h1 className="font-semibold">
              How to have fluent listening skills in English
            </h1>
            <span className="text-[12px] text-[#ACADAE]">Nguyễn Chí Công</span>
          </div>
          <div>
            <div className="w-full h-[3px] bg-[#D8D9DA] relative after:contents-[''] after:absolute after:top-0 after:left-0 after:w-[60%] after:h-full after:bg-[#8614BC]"></div>
            <div>
              <span className="text-[12px]">100% complete</span>
            </div>
          </div>
        </div>
      </div>
      <ModalShare isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Mycourse;
