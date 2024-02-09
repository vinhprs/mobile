import React from 'react';
import google from '../../image/Login/google-logo-search-new-svgrepo-com.svg';
import { signInWithGoogle } from '../../config/firebase';
const Google = () => {
  const googleOpen = () => {
    window.open(`${process.env.REACT_APP_API_ENDPOINT}/auth/login-google`, '_self');
  };
  return (
    <div className="cursor-pointer flex items-center py-1 px-3 border-[1px] border-[#E9EAF0] w-full gap-x-2" onClick={googleOpen}>
      <img src={google} alt="google-icon" className="w-10" />
      <div className="font-semibold">Tiếp tục với Google</div>
    </div>
  );
};

export default Google;
