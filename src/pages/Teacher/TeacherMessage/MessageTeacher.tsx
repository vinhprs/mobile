import React from 'react';
import UserMessList from './UserMessList';
import UserMessage from './UserMessage';

const MessageTeacher = () => {
  return (
    <div className="max-w-[1000px] p-[24px] w-full mx-auto">
      <div className='grid grid-cols-[350px_1fr] gap-x-3'>
        <UserMessList/>
        <UserMessage/>
      </div>
    </div>
  );
};

export default MessageTeacher;