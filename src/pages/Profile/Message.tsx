import React, { useCallback, useContext, useEffect } from 'react';
import UserMessage from './UserMessage';
import MessageDetail from './MessageDetail';
import { SocketContext } from '../../context/SocketIOProvider';
import { Events } from '../../utils/type';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/appHooks';
import { updateMess } from '../../store/reducers/chatSlice';

const Message = () => {
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
    }
  }, [socket,id]);
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
    <div className="grid grid-cols-[350px_1fr] gap-x-4">
      <div>
        <UserMessage/>
      </div>
      <div className="h-full pb-[200px]">
        {searchParams.get('chatID') && (
          <MessageDetail id={searchParams.get('chatID')} socket={socket}/>
        )}
      </div>
    </div>
  );
};

export default Message;
