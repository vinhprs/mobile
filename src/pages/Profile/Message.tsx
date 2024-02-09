import React from 'react';
import UserMessage from './UserMessage';
import MessageDetail from './MessageDetail';

const Message = () => {
  return (
    <div className="grid grid-cols-[350px_1fr] gap-x-4">
      <div>
        <UserMessage/>
      </div>
      <div className="h-full">
        <MessageDetail/>
      </div>
    </div>
  );
};

export default Message;
