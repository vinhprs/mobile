import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
const TabInput = ({tags, setTags}:any) => {
  const removeTag = (indexRemove:any)=>{
    setTags([...tags.filter((_:any, index:number) => index !== indexRemove)]);
  };
  const addTags = (event:any) => {
    if (event.target.value !== '') {
      setTags([...tags, event.target.value]);
      
      event.target.value = '';
    }
  };
  return (
    <div className="text-[14px] flex items-start flex-wrap min-h-[60px] p-[8px] border rounded-lg  gap-2">
      <ul id="tags" className='flex flex-wrap ml-[8px] gap-3'>
        {tags.map((tag:any, index:number) => (
          <li key={index} className="flex-1 flex items-center gap-2 p-2 bg-[#FF6636] rounded-lg text-white">
            <span className=''>{tag}</span>
            
            <IoIosCloseCircleOutline className='text-[20px]' onClick={() => removeTag(index)}/>
          </li>
        ))}
      </ul>
      <input
        className='bg-transparent flex-1 border-none outline-none text-[14px]'
        type="text"
        onKeyUp={event => event.key === 'Enter' ? addTags(event) : null}
        placeholder="Nhấn enter để thêm tag"
      />
    </div>
  );
};

export default TabInput;