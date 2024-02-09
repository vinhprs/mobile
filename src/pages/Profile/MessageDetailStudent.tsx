import React, { useRef, useState } from 'react';
import { FaFileImage } from 'react-icons/fa6';
import { BsSend } from 'react-icons/bs';
import { IoIosCloseCircle } from 'react-icons/io';
import MessagerUser from './MessagerUser';
const MessageDetailStudent = () => {
  const [images,setImages] = useState<any>([]);
  const refImage = useRef<any>(null);
  const handleImageClick = () => {
    refImage?.current.click();
  };
  const handleImageChange = (event:any) => {
    console.log('🚀 ~ file: MessageDetailStudent.tsx:10 ~ handleImageChange ~ event:', event.target.files[0]);   
    setImages([...images,...Object.values(event.target.files)]); 
  };
  const deleteImage = (id:number)=>{
    console.log(id);
    const newArray = images.filter((item:any,indexItem:number)=>id!==indexItem);
    console.log('🚀 ~ file: MessageDetailStudent.tsx:6 ~ MessageDetailStudent ~ images:', images);
    setImages(newArray);
  };
    
  return (
    <div className='h-full'>
      <div className='px-[24px] py-[48px] border-[1px] border-[#E9EAF0] max-h-[380px] h-full'>
        <div className='h-full overflow-y-scroll'>
          <MessagerUser user="teacher"/>
          <MessagerUser user="teacher"/>
          <MessagerUser user="teacher"/>
          <MessagerUser user="teacher"/>
          <MessagerUser user="student"/>
        </div>
      </div>
      <form className='p-[24px] border-[1px] border-[#E9EAF0] '>
        { images.length>0 && (

          <div className='flex mb-[5px] gap-x-3'>
            {images.map((image:any,index:number)=>(
              <div className='relative' key={index}>

                <img src={URL.createObjectURL(image)} alt="" className='w-[100px] h-[100px]'/>
                <IoIosCloseCircle className='absolute top-1 right-2 text-[18px] cursor-pointer' onClick={()=>deleteImage(index)}/>
              </div>
            ))}
          </div>
        )}
        <div className='flex gap-x-[20px]'>
          <div className='px-[18px] py-[12px] flex gap-x-[12px] items-center border-[1px] border-[#E9EAF0] flex-1'>
            <div onClick={handleImageClick} className='cursor-pointer'>
              <FaFileImage className='text-[20px] text-[#FF6636]' />
            </div>
            <input type="file" className='hidden' multiple onChange={handleImageChange} ref={refImage}/>
            <input type="text" className='w-full outline-none border-none' placeholder='Nhập nội dung'/>
          </div>
          <button className='px-[18px] py-[12px] flex gap-x-[12px] items-center bg-[#FF6636] text-white'>
            <span className='font-semibold'>Gửi tin nhắn</span>
            <BsSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageDetailStudent;