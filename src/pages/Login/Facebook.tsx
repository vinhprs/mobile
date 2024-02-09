import React from 'react';
import facebook from '../../image/Login/facebook-svgrepo-com.svg';
import { signInWithFacebook } from '../../config/firebase';
const Facebook = () => {
  return (
    <div className="flex cursor-pointer items-center py-1 px-3 border-[1px] border-[#E9EAF0] w-full gap-x-2" onClick={signInWithFacebook}>
      <img src={facebook} alt="google-icon" className="w-10" />
      <div className="font-semibold">Tiếp tục với Facebook</div>
    </div>
  );
};

export default Facebook;
