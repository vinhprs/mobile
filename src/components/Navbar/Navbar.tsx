import React, { useEffect, useRef, useState } from 'react';
import logo from '../../image/Navbar/logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchResult from '../SearchResult/SearchResult';
import { useForm } from 'react-hook-form';
import { useDebounce } from '../../hooks/useDebounce';
import { Button, useDisclosure } from '@chakra-ui/react';
import ModalMenu from '../ModalMenu/ModalMenu';
import NavbarLogin from './NavbarLogin';
import { useSelector } from 'react-redux';
import {
  selectAuthUserId,
  selectIsLogged,
} from '../../store/reducers/authSlice';
import { LocalStorage } from '../../utils/LocalStorage';
const Navbar = () => {
  const location = useLocation();
  const [isOpenNav, setIsOpenNav] = useState(false);
  const isLogged = useSelector(selectIsLogged);
  const access_token = LocalStorage.getAccessToken();
  const userId = LocalStorage.getUserId();
  const { isOpen: isOpenMenu, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();
  const focusRef: any = useRef(null);
  const drawerRef: any = useRef();
  const debouncedValue = useDebounce<string>(value, 1000);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: '',
    },
  });
  const handleOnSubmit = (data: any) => {
    console.log(data);
  };
  const handleChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
    console.log(e.target.value);
  };

  // console.log(debouncedValue);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleRouterHome = () => {
    navigation('/');
  };
  useEffect(() => {
    const handler = (e: any) => {
      if (!focusRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.addEventListener('click', handler);
  }, []);
  useEffect(()=>{
    setIsOpenNav(false);
  },[location.pathname]);
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white" ref={focusRef}>
      <div className="flex items-center h-[72px] px-[24px] shadow-xl justify-between lg:justify-start">
        <img
          src={logo}
          alt="logo-icon"
          className="w-[130px] cursor-pointer "
          onClick={handleRouterHome}
        />
        <RxHamburgerMenu onClick={()=>setIsOpenNav(true)} className='block lg:hidden text-[30px]'/>

        <div className={`fixed p-[20px] shadow-xl lg:shadow-none lg:p-[0] h-full bg-white lg:bg-none top-0 right-0 lg:relative ${isOpenNav ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-end lg:items-center flex-1 justify-start lg:justify-around gap-y-3`}>
          <IoClose onClick={()=>setIsOpenNav(false)} className='block lg:hidden'/>
          <Button
            ref={drawerRef}
            onClick={onOpen}
            bg="none"
            _hover={{ bg: 'none' }}
            fontWeight="400"
          >
            Danh mục
          </Button>
          <form
            action=""
            className="w-full lg:w-[50%] relative"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <div className="flex items-center gap-4 bg-white py-3 px-4 rounded-full border-[1px] border-[#272829]">
              <button
                type={value === '' ? 'button' : 'submit'}
                className={`${
                  value === '' ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <AiOutlineSearch className="text-[#ccd2d8] text-xl" />
              </button>
              <input
                {...register('search')}
                ref={focusRef}
                type="text"
                name="search"
                id="search"
                className="w-full bg-transparent outline-none text-[#272829]"
                placeholder="Tìm các khóa học mà bạn quan tâm"
                onChange={handleChange}
                onClick={handleOpen}
              />
            </div>
            {isOpen && (
              <SearchResult value={value} debouncedValue={debouncedValue} />
            )}
          </form>
          <Link to="/teacher">Giáo viên</Link>
          {!userId ? (
            <div className="flex gap-x-3">
              <Link
                to="/login"
                className="bg-[#FFEEE8] px-5 py-3 text-[14px] font-semibold text-[#FF6636]"
              >
                Đăng nhập
              </Link>
              <Link
                to="/signup"
                className="bg-[#FF6636] text-white px-5 py-3 text-[14px] font-semibold"
              >
                Đăng ký
              </Link>
            </div>
          ) : (
            <NavbarLogin />
          )}
        </div>
      </div>
      <ModalMenu isOpen={isOpenMenu} onClose={onClose} drawerRef={drawerRef} />
    </div>
  );
};

export default Navbar;
