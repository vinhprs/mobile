import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsBarChartFill } from 'react-icons/bs';
import { AiOutlinePlusCircle, AiOutlineMessage } from 'react-icons/ai';
import { FaLayerGroup } from 'react-icons/fa';
import { FiBook, FiSettings } from 'react-icons/fi';
import logo from '../../image/Navbar/sidebar.svg';
import { TfiWrite } from 'react-icons/tfi';
import { GiTeacher } from 'react-icons/gi';
import { PiStudent } from 'react-icons/pi';
import { CiLogout } from 'react-icons/ci';
import { MdOutlineAssignmentTurnedIn } from 'react-icons/md';
import { LocalStorage } from '../../utils/LocalStorage';
import { useAppDispatch } from '../../hooks/appHooks';
import { updateIsLogged, updateUserId } from '../../store/reducers/authSlice';
import { IoCreateOutline } from 'react-icons/io5';
const SidebarAdmin = () => {
  const path = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleNavigate = (id: string, idUser?: string) => {
    if (idUser) {
      navigate(`/admin/${id}/${idUser}`);
    } else {
      navigate(`/admin/${id}`);
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
          onClick={() => handleNavigate('student')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('student') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <PiStudent className="text-[18px]" />
          <span>Tài khoản các học sinh</span>
        </div>
        <div
          onClick={() => handleNavigate('teacher')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('teacher') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <GiTeacher className="text-[18px]" />
          <span>Tài khoản các giáo viên</span>
        </div>
        <div
          onClick={() => handleNavigate('check-courses')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('check-courses') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <MdOutlineAssignmentTurnedIn className="text-[18px]" />
          <span>Kiểm duyệt bài viết</span>
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
          onClick={() => handleNavigate('banner')}
          className={`flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] ${
            path.pathname.includes('banner') === true
              ? 'bg-[#FF6636] text-white'
              : ''
          }`}
        >
          <IoCreateOutline className="text-[18px]" />
          <span>Tạo banner</span>
        </div>
        <div
          // onClick={() => handleNavigate("dashboard")}
          onClick={handleLogout}
          className={'flex gap-x-2 items-center px-[24px] cursor-pointer py-[15px] '}
        >
          <CiLogout className="text-[18px]" />
          <span>Đăng xuất</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
