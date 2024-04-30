import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsBarChartFill } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMessage } from 'react-icons/ai';
import { FaLayerGroup } from 'react-icons/fa';
import { FiBook, FiSettings } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';
import { MdQuiz } from 'react-icons/md';
import logo from '../../image/Navbar/sidebar.svg';
import { LocalStorage } from '../../utils/LocalStorage';
import { useAppDispatch } from '../../hooks/appHooks';
import { updateIsLogged, updateUserId } from '../../store/reducers/authSlice';
import { TfiWrite } from 'react-icons/tfi';

const Sidebar = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleNavigate = (id: string, idUser?: string) => {
    if (idUser) {
      navigate(`/teacher/${id}/${idUser}`);
    } else {
      navigate(`/teacher/${id}`);
    }
  };
  const handleLogout = () => {
    LocalStorage.clearToken();
    dispatch(updateIsLogged(false));
    dispatch(updateUserId({}));
    setTimeout(() => {
      navigate('/teacher');
    }, 500);
  };
  return (
    <div className="text-[#8C94A3]">
      <div className="py-[12px] border-b-[1px] border-[#8C94A3]">
        <img src={logo} alt="" />
      </div>
      <div className="py-[12px]">
        <div
          onClick={() => handleNavigate('dashboard')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('dashboard') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <BsBarChartFill className="text-[18px]" />
          <span>Tổng quan</span>
        </div>
        <div
          onClick={() => handleNavigate('create-course')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('create-course') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <AiOutlinePlusCircle className="text-[18px]" />
          <span>Tạo khóa học mới</span>
        </div>
        <div
          onClick={() => handleNavigate('create-combo')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('create-combo') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <AiOutlinePlusCircle className="text-[18px]" />
          <span>Tạo Combo khóa học</span>
        </div>
        <div
          onClick={() => handleNavigate('exam')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('exam') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <FiBook className="text-[18px]" />
          <span>Ngân hàng đề thi</span>
        </div>
        <div
          onClick={() => handleNavigate('quiz')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('quiz') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <MdQuiz className="text-[18px]" />
          <span>Ngân hàng Quizz</span>
        </div>
        <div
          onClick={() => handleNavigate('courses')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('courses') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <FaLayerGroup className="text-[18px]" />
          <span>Khóa học</span>
        </div>
        <div
          onClick={() => handleNavigate('message')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('message') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <AiOutlineMessage className="text-[18px]" />
          <span>Tin nhắn</span>
        </div>
        <div
          onClick={() => handleNavigate('blog')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('blog') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <TfiWrite className="text-[18px]" />
          <span>Blog</span>
        </div>
        <div
          onClick={() => handleNavigate('setting', 'ạdhaskjda')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('setting') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <FiSettings className="text-[18px]" />
          <span>Cài đặt</span>
        </div>
        <div
          onClick={handleLogout}
          className={'flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px]'}
        >
          <CiLogout className="text-[18px]" />
          <span>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
