import React from 'react';
import banner from '../../image/Navbar/153158b7-ef2b-4da5-9a19-4c75d50f73d2.jpg';
import Partner from './Partner';
import Courses from './Courses';
import Achivement from './Achivement';
import View from './View';
import Categories from './Categories';
const Homepage = () => {
  return (
    <div className='text-black pt-[72px]'>
      <div className='relative'>
        <img src={banner} alt="banner" className='mx-auto'/>
        <div className='absolute top-[50px] left-[150px] bg-white w-[450px] p-[24px] bg_banner'>
          <h1 className='text-[32px] font-bold mb-[12px]'>Chào mừng các bạn học sinh đến với Prime Edu</h1>
          <p className=' text-[16px]'>Tất cả khóa học này đều dành cho các bạn, giúp các bạn nâng cao kiến thức cùng với các giảng viên đầy kinh nghiệm</p>
        </div>
      </div>
      <Partner/>
      <Courses/>
      <Achivement/>
      <View/>
      <Categories/>
    </div>
  );
};

export default Homepage;