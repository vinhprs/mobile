import React from "react";
import google from "../../image/Login/google-logo-search-new-svgrepo-com.svg";
const Google = () => {
  return (
    <div className="flex items-center py-1 px-3 border-[1px] border-[#E9EAF0] w-full gap-x-2">
      <img src={google} alt="google-icon" className="w-10" />
      <div className="font-semibold">Tiếp tục với Google</div>
    </div>
  );
};

export default Google;
