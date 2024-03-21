import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { FaFileImage } from 'react-icons/fa6';
import { IoIosCloseCircle } from 'react-icons/io';
import MessageTeacherUser from './MessageTeacherUser';
import { useSelector } from 'react-redux';
import { selectInputMess } from '../../../store/reducers/chatSlice';
import { useForm } from 'react-hook-form';
import { Events, messChatProps } from '../../../utils/type';
import { yupResolver } from '@hookform/resolvers/yup';
import { inputChatMess } from '../../../schema/schema';
import { selectUserInfo } from '../../../store/reducers/authSlice';

const MessageDetailTeacher = ({getDetailChat,getDetail,socket,id}:any) => {
  const userInfo:any = useSelector(selectUserInfo);
  const dataMess = useSelector(selectInputMess);
  console.log('🚀 ~ MessageDetailStudent ~ dataMess:', dataMess);
  const [detailsChat,setDetailsChat] = useState<any>([]);
  const [images,setImages] = useState<any>([]);
  const refImage = useRef<any>(null);
  const {handleSubmit,register,setValue,formState:{errors,}} = useForm<messChatProps>({
    defaultValues:{
      inputChat:''
    },
    resolver:yupResolver(inputChatMess)
  });
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
  const onSubmit = useCallback((data:any)=>{
    console.log(data);
    socket.emit(Events.SEND_MESSAGE,{
      message: data.inputChat,
      chatId: id
    });
    socket.emit(Events.SEND_NOTI,{
      title:'New message',
      content:`${userInfo?.username} sent you a message ${data.inputChat}`,
      chatId:id,
      userId:getDetail?.student?._id
    });
    setValue('inputChat','');
  },[socket,id]);
  useEffect(() => {
    // Create a new array with the old detailsChat array and the new dataMess
    const newArray = [dataMess, ...detailsChat];
    setDetailsChat(newArray);
  }, [dataMess]); // Include detailsChat in the dependency array since it's being used inside the effect
  useEffect(()=>{
    setDetailsChat(getDetail?.messages);
  },[]);
  return (
    <div className='h-full'>
      <div className='px-[24px] py-[48px] border-[1px] border-[#E9EAF0] max-h-[500px] h-full'>
        <div className='h-full flex overflow-auto flex-col-reverse'>
          {
            detailsChat?.map((item:any,index:number)=>(
              <MessageTeacherUser user={item} key={item._id}/>
            ))
          }
          {/* <MessageTeacherUser user="teacher"/>
          <MessageTeacherUser user="teacher"/>
          <MessageTeacherUser user="teacher"/>
          <MessageTeacherUser user="student"/> */}
        </div>
      </div>
      <form className='p-[24px] border-[1px] border-[#E9EAF0]' onSubmit={handleSubmit(onSubmit)}>
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
            <input type="text" className='w-full outline-none border-none' placeholder='Nhập nội dung' {...register('inputChat')}/>
          </div>
          <button type='submit' className='px-[18px] py-[12px] flex gap-x-[12px] items-center bg-[#FF6636] text-white'>
            <span className='font-semibold'>Gửi tin nhắn</span>
            <BsSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageDetailTeacher;