import React, { useCallback, useContext, useEffect } from 'react';
import UserMessList from './UserMessList';
import UserMessage from './UserMessage';
import { useAppDispatch } from '../../../hooks/appHooks';
import { useSearchParams } from 'react-router-dom';

import { SocketContext } from '../../../context/SocketIOProvider';
import { Events } from '../../../utils/type';
import { updateMess } from '../../../store/reducers/chatSlice';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../../store/reducers/authSlice';

const MessageTeacher = () => {
  const userInfo:any =useSelector(selectUserInfo);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('chatID');
  const {socket} = useContext(SocketContext);
  const onSubscribe = useCallback(() => {
    if (socket) {
      console.log('🚀 ~ Message ~ socket:', socket);

      socket.emit(Events.SUBSCRIBE, {
        chatId: id,
      });
      socket.emit(Events.SUBSCRIBE_NOTI,{
        chatId:userInfo?._id
      });
    }
  }, [socket,id,userInfo]);
  const onReceiveMessage = useCallback((data:any)=>{
    console.log(data);
    dispatch(updateMess(data));
    
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
      socket.on(Events.RESPONSE_MESSAGE,(data:any)=>{
        onReceiveMessage(data);
      });
    }
  }, [socket, onSubscribe, onReceiveMessage]);
  return (
    <div className="max-w-[1000px] p-[24px] w-full mx-auto">
      <div className='grid grid-cols-[350px_1fr] gap-x-3'>
        <div>
          <UserMessList/>
        </div>
        <div className='h-full'>

          {
            searchParams.get('chatID') && (

              <UserMessage id={searchParams.get('chatID')} socket={socket}/>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MessageTeacher;