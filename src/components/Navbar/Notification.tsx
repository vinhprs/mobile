import React from "react";
import { BiBell } from "react-icons/bi";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div className="title_learn text-[14px] cursor-pointer relative text-[#272829]">
      <div className="cursor-pointer relative">
        <BiBell className="text-[22px]" />
        <div className="w-[10px] h-[10px] absolute top-[-3px] right-0 rounded-full bg-[#8614BC]"></div>
      </div>
      <div className="modal_title_learn absolute top-[100%] right-[50%] w-[350px] h-fit bg-white border-[1px] border-[#272829]">
        <div className="px-3 py-3 flex flex-col text-[#272829] gap-y-3">
          <h1 className="text-base font-semibold">Thông báo</h1>
          <div className="divide-y ">
            <div className="grid grid-cols-[60px_1fr] py-2">
              <img
                src="https://images.pexels.com/photos/9449708/pexels-photo-9449708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-[50px] h-[50px] rounded-full border-[1px]"
              />
              <div>
                <div className="line-clamp-2 text-[12px] font-semibold">
                  If you are a professional working in software engineering or
                  an AGILE / SCRUM then I have amazing news, I've been
                  publishing youtube shorts to help people with their English
                  for AGILE / SCRUM !
                </div>
                <span className="text-[12px] text-[#ACADAE]">20 days ago</span>
              </div>
            </div>
            <div className="grid grid-cols-[60px_1fr] py-2">
              <img
                src="https://images.pexels.com/photos/9449708/pexels-photo-9449708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-[50px] h-[50px] rounded-full border-[1px]"
              />
              <div>
                <div className="line-clamp-2 text-[12px] font-semibold">
                  If you are a professional working in software engineering or
                  an AGILE / SCRUM then I have amazing news, I've been
                  publishing youtube shorts to help people with their English
                  for AGILE / SCRUM !
                </div>
                <p className="text-[12px] text-[#ACADAE]">20 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
