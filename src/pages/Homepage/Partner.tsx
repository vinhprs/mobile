import React from 'react';
import vnexpress from '../../image/Homepage/vnexpress.png';
import dantri from '../../image/Homepage/dan-tri.png';
import kenh14 from '../../image/Homepage/kenh-14.png';
import vtv from '../../image/Homepage/vtv.png';
import tuoitre from '../../image/Homepage/tuoitre.png';
import vtc from '../../image/Homepage/vtc.png';
const ImagePartner = [
  {
    id:1,
    imgPartner:vnexpress
  },
  {
    id:2,
    imgPartner:dantri
  },
  {
    id:3,
    imgPartner:kenh14
  },
  {
    id:4,
    imgPartner:vtv
  },
  {
    id:5,
    imgPartner:tuoitre
  },
  {
    id:6,
    imgPartner:vtc
  },
];
const Partner = () => {
  return (
    <div className='my-16'>
      <h1 className='text-center mb-4 text-[24px] font-semibold text-[#272829]'>Các đối tác truyển thông uy tín và các bạn học sinh cả nước tin tưởng</h1>
      <div className='flex justify-center gap-x-5'>
        {ImagePartner.map((item,index)=>(
          <div className='' key={item.id}>
            <img src={item.imgPartner} alt="img partner"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;