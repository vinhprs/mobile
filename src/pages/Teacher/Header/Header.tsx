/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { useAppDispatch } from '../../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../store/reducers/authSlice';
import { getUserInfo } from '../../../store/actions/user.action';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useAppDispatch();
  const userInfo:any = useSelector(selectUserInfo);
  const getUserInfoDetail =async()=>{
    const res = await dispatch(getUserInfo({}));
    if(res.payload && res.meta.requestStatus==='fulfilled'){
      console.log(res);
      
    }
  };
  useEffect(()=>{
    getUserInfoDetail();
  },[]);
  return (
    <div className="bg-white">
      <div className="p-[24px] max-w-[1000px] mx-auto ">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-medium text-[14px] text-[#6E7485]">
              Chào bạn
            </span>
            <h1 className="font-semibold text-[20px] text-[#FF6636]">{userInfo?.fullname}</h1>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="title_learn w-[30px] h-[30px] flex justify-center items-center bg-[#F5F7FA] relative">
              <AiOutlineBell className="text-[21px] text-[#1D2026]" />
              <div className="w-[6px] h-[6px] rounded-full bg-[#FF6636] absolute top-[8px] right-[6px]"></div>
              <div className="modal_title_learn absolute top-[100%] right-[30%] w-[350px] h-fit bg-white border-[1px] border-[#272829]">
                <div className="px-3 py-3 flex flex-col text-[#272829] gap-y-3">
                  <h1 className="text-base font-semibold">Thông báo</h1>
                  <div className="divide-y ">
                    <div className="grid grid-cols-[60px_1fr] py-2">
                      <img
                        src="https://images.pexels.com/photos/9449708/pexels-photo-9449708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="w-[50px] h-[50px] rounded-full border-[1px]"
                      />
                      <div>
                        <div className="line-clamp-2 text-[12px] font-semibold">
                  If you are a professional working in software engineering or
                  an AGILE / SCRUM then I have amazing news, I've been
                  publishing youtube shorts to help people with their English
                  for AGILE / SCRUM !
                        </div>
                        <span className="text-[12px] text-[#ACADAE]">20 days ago</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-[60px_1fr] py-2">
                      <img
                        src="https://images.pexels.com/photos/9449708/pexels-photo-9449708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="w-[50px] h-[50px] rounded-full border-[1px]"
                      />
                      <div>
                        <div className="line-clamp-2 text-[12px] font-semibold">
                  If you are a professional working in software engineering or
                  an AGILE / SCRUM then I have amazing news, I've been
                  publishing youtube shorts to help people with their English
                  for AGILE / SCRUM !
                        </div>
                        <p className="text-[12px] text-[#ACADAE]">20 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={userInfo?.avatar ? userInfo?.avatar:'https://images.pexels.com/photos/17528251/pexels-photo-17528251/free-photo-of-d-i-n-c-s-a-s-c-d-p-ch-p-nh-d-ng-v-t.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                alt=""
                className="rounded-full w-[30px] h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
