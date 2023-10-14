import React from "react";
import TabProfile from "./TabProfile";

const Profile = () => {
  return (
    <div className="pt-[100px] pb-[60px] px-[24px] max-w-[1200px] w-full mx-auto">
      <div className="flex justify-between items-center border-[1px] w-full border-[#FF6636] p-[40px] bg-[#FF6636]">
        <div className="flex gap-x-[24px] items-center">
          <img
            src="https://images.pexels.com/photos/2907/car-mustang.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[110px] h-[110px] rounded-full"
          />
          <div className="flex flex-col gap-y-[5px]">
            <h1 className="text-[24px] text-white font-semibold">
              Kevin Gilbert
            </h1>
            <span className="text-white">Web developer</span>
          </div>
        </div>
        <div>
          <div className="text-[18px] font-semibold px-[32px] py-[10px] w-[200px] text-center bg-[#FFEEE8] text-[#FF6636]">
            Học sinh
          </div>
        </div>
      </div>
      <div>
        <TabProfile />
      </div>
    </div>
  );
};

export default Profile;
