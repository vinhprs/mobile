import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidMessageDetail } from "react-icons/bi";
const Comment = () => {
  return (
    <div className=" p-3 border-[1px] rounded-xl hover:bg-slate-200">
      <div className="grid grid-cols-[48px_1fr_100px] gap-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/745767/pexels-photo-745767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <h1 className="font-semibold">Nguyễn Cao Hồng Vinh</h1>
          <p className="text-[14px] line-clamp-1">
            Hi Max. I love your lectures. However this one is very confusing.
            When you started using `extra` Hi Max. I love your lectures. However
            this one is very confusing. When you started using `extra` Hi Max. I
            love your lectures. However this one is very confusing. When you
            started using `extra` Hi Max. I love your lectures. However this one
            is very confusing. When you started using `extra` Hi Max. I love
            your lectures. However this one is very confusing. When you started
            using `extra` Hi Max. I love your lectures. However this one is very
            confusing. When you started using `extra` Hi Max. I love your
            lectures. However this one is very confusing. When you started using
            `extra` Hi Max. I love your lectures. However this one is very
            confusing. When you started using `extra` Hi Max. I love your
            lectures. However this one is very confusing. When you started using
            `extra` Hi Max. I love your lectures. However this one is very
            confusing. When you started using `extra`
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <span className="font-semibold">2656</span>
            <div className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-[#272829]">
              <AiOutlineLike className="text-[16px]" />
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="font-semibold text-[#ACADAE]">2656</span>
            <div className="cursor-pointer">
              <BiSolidMessageDetail className="text-[16px]" />
            </div>
          </div>
        </div>
      </div>
      <span className="text-[14px]">3 phút trước</span>
    </div>
  );
};

export default Comment;
