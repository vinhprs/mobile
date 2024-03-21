/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BiBell } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/appHooks';
import { getListNotification } from '../../store/actions/notification.action';
import { useSelector } from 'react-redux';
import { selectNoti, selectNotificationList, updateNotication } from '../../store/reducers/notificationSlice';
import { convertTimeToAgo } from '../../utils/lib';
import { SocketContext } from '../../context/SocketIOProvider';
import { Events } from '../../utils/type';
import { selectUserInfo } from '../../store/reducers/authSlice';

const Notification = () => {
  const [dataNoti,setDataNoti]:any = useState([]);
  const userInfo:any = useSelector(selectUserInfo);
  const {socket} = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const listNoti:any = useSelector(selectNotificationList);
  const dataNotifi:any = useSelector(selectNoti);
  const [isLoading, setIsLoading] = useState(false);
  const getNotifications = async()=>{
    const res:any = await dispatch(getListNotification({}));
    if(res.meta.requestStatus === 'fulfilled'){
      console.log('🚀 ~ getNotifications ~ res:', res);
      setIsLoading(false);
      setDataNoti(res?.payload?.data?.listData?.slice(-5));
    }
  };
  const onSubscribe = useCallback(() => {
    if (socket) {
      console.log('🚀 ~ Message ~ socket:', socket);
      socket.emit(Events.SUBSCRIBE_NOTI,{
        userId:userInfo?._id
      });
    }
  }, [socket,userInfo]);
  const onReceiveNoti = useCallback((data:any)=>{
    console.log('🚀 ~ onReceiveNoti ~ data:', data);
    dispatch(updateNotication(data));
  },[]);
  useEffect(() => {
    onSubscribe();
  }, [onSubscribe, socket, socket?.id]);
  useEffect(() => {
    if (socket) {
      socket.on(Events.CONNECT, () => {
        console.log('Hello');
        onSubscribe();
      });
      socket.on(Events.RESPONSE_NOTI,(data:any)=>{
        onReceiveNoti(data);
      });
    }
  }, [socket, onSubscribe, onReceiveNoti]);
  useEffect(()=>{
    setIsLoading(true);
    getNotifications();
  },[]);
  useEffect(()=>{
    const newArray = [...dataNoti,dataNotifi];
    setDataNoti(newArray.slice(-5));
  },[dataNotifi]);
  return (
    <div className="title_learn text-[14px] cursor-pointer relative text-[#272829]">
      <div className="cursor-pointer relative">
        <BiBell className="text-[22px]" />
        {dataNoti?.some((item:any,index:number)=>item?.status === false) && (
          <div className="w-[10px] h-[10px] absolute top-[-3px] right-0 rounded-full bg-[#FF6636]"></div>
        )}
      </div>
      <div className="modal_title_learn absolute top-[100%] right-[50%] w-[350px] h-fit bg-white border-[1px] border-[#272829]">
        <div className=" flex flex-col text-[#272829] gap-y-3">
          <h1 className="text-base font-semibold px-3 py-2">Thông báo</h1>
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
  );
};

export default Notification;
