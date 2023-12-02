import moment from "moment";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidMessageDetail } from "react-icons/bi";
import { convertTimeToAgo } from "../../utils/lib";
const Comment = ({ item }: any) => {
  return (
    <div className=" p-3 border-[1px] rounded-xl hover:bg-slate-200">
      <div className="grid grid-cols-[48px_1fr_100px] gap-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={item?.authorThumbnail}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-semibold">{item?.author}</h1>
          <p className="text-[14px] line-clamp-1">{item?.content}</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">{item?.likeCount}</span>
            <div className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-[#272829]">
              <AiOutlineLike className="text-[16px]" />
            </div>
          </div>
          {/* <div className="flex items-center gap-x-2">
            <span className="font-semibold text-[#ACADAE]">2656</span>
            <div className="cursor-pointer">
              <BiSolidMessageDetail className="text-[16px]" />
            </div>
          </div> */}
        </div>
      </div>
      <span className="text-[14px]">{convertTimeToAgo(item?.createdAt)}</span>
    </div>
  );
};

export default Comment;
