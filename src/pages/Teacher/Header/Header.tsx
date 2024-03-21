/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import { useAppDispatch } from '../../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../store/reducers/authSlice';
import { getUserInfo } from '../../../store/actions/user.action';
import { Link } from 'react-router-dom';
import { selectNoti, selectNotificationList, updateNotication } from '../../../store/reducers/notificationSlice';
import { getListNotification } from '../../../store/actions/notification.action';
import { convertTimeToAgo } from '../../../utils/lib';
import { SocketContext } from '../../../context/SocketIOProvider';
import { Events } from '../../../utils/type';

const Header = () => {
  const [dataNoti,setDataNoti]:any = useState([]);
  const {socket} = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const userInfo:any = useSelector(selectUserInfo);
  const dataNotifi:any = useSelector(selectNoti);
  const listNoti:any = useSelector(selectNotificationList);
  const getUserInfoDetail =async()=>{
    const res = await dispatch(getUserInfo({}));
    if(res.payload && res.meta.requestStatus==='fulfilled'){
      console.log(res);
      
    }
  };
  const getListNoti = async()=>{
    const res:any= await dispatch(getListNotification({}));
    if(res.payload && res.meta.requestStatus === 'fulfilled'){
      setDataNoti(res?.payload?.data?.listData?.slice(-5));
      console.log(res);
    }
  };
  const onSubscribe = useCallback(() => {
    if (socket) {
      console.log('🚀 ~ Message ~ socket sdasdas:', socket);
      socket.emit(Events.SUBSCRIBE_NOTI,{
        userId:userInfo?._id
      });
    }
  }, [socket,userInfo]);
  const onReceiveNoti = useCallback((data:any)=>{
    dispatch(updateNotication(data));
    console.log('🚀 ~ onReceiveNoti ~ data:', data);
  },[]);
  useEffect(() => {
    onSubscribe();
  }, [onSubscribe, socket, socket?.id]);
  useEffect(() => {
    if (socket) {
      socket.on(Events.CONNECT, () => {
        console.log('Hello ádadawdaw');
        onSubscribe();
      });
      socket.on(Events.RESPONSE_NOTI,(data:any)=>{
        onReceiveNoti(data);
      });
    }
  }, [socket, onSubscribe, onReceiveNoti]); 
  useEffect(()=>{
    getUserInfoDetail();
    getListNoti();
  },[]);
  useEffect(()=>{
    const newArray = [...dataNoti,dataNotifi];
    setDataNoti(newArray.slice(-5));
  },[dataNotifi]);
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
              {
                dataNoti?.some((item:any,index:number)=>item?.status === false) && (

                  <div className="w-[6px] h-[6px] rounded-full bg-[#FF6636] absolute top-[8px] right-[6px]"></div>
                )
              }
              <div className="z-10 modal_title_learn absolute top-[100%] right-[30%] w-[350px] h-fit bg-white border-[1px] border-[#272829]">
                <div className="flex flex-col text-[#272829] gap-y-3">
                  <h1 className="text-base font-semibold px-3 py-2 ">Thông báo</h1>
                  <div className="divide-y h-full flex overflow-auto flex-col-reverse">
                    {dataNoti?.length === 0 ? <p className='text-center'>Hiện không có thông báo nào</p> : (
                      <>
                        {dataNoti?.map((item:any,index:number)=>(
                          <div className="px-3 grid grid-cols-[60px_1fr] py-2 relative transition-all duration-200 hover:bg-slate-200" key={index}>
                            <img
                              src="https://images.pexels.com/photos/9449708/pexels-photo-9449708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                              className="w-[50px] h-[50px] rounded-full border-[1px]"
                            />
                            <div>
                              <div className="line-clamp-2 text-[12px] font-semibold">
                                {item?.content}
                              </div>
                              <span className="text-[12px] text-[#ACADAE]">{convertTimeToAgo(item?.createdAt)}</span>
                            </div>
                            {!item?.status && (
                              <div className='absolute w-[10px] h-[10px] rounded-full bg-[#FF6636] top-1 right-5'></div>
                            )}
                          </div>
                        ))}
                      </>
                    )}
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
