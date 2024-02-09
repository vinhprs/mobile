import React from 'react';
import Infomation from './Infomation';
import ChangPass from './ChangPass';

const Setting = () => {
  return (
    <div className="max-w-[1000px] p-[24px] w-full mx-auto">
      <div className="flex flex-col gap-y-[36px]">
        <Infomation />
        <ChangPass />
      </div>
    </div>
  );
};

export default Setting;
