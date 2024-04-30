import React from 'react';
import { Switch, useDisclosure } from '@chakra-ui/react';
import { BsPencilSquare } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa6';
import ModalUpdateBanner from './ModalUpdateBanner';
import ModalDeleteBanner from './ModalDeleteBanner';
const CardBanner = ({index}:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen:isOpenDelete, onOpen:onOpenDelete, onClose:onCloseDelete } = useDisclosure();
  return (
    <div className='gap-3 flex items-center'>
      <div className="flex-1 w-full">
        <img className=' w-full h-[200px] object-cover' src="https://images.pexels.com/photos/22033622/pexels-photo-22033622/free-photo-of-hoan-ho.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className='w-[500px] text-center'>
        <h1 className='text-[16px]'>
          {index} adkajdkajdjakdajldjal akjndkanka aknsdkajn akjdwkja siuaw ioajdwaw iawdj ạiwda 
        </h1>
      </div>
      <div className='w-[300px] text-center'>
        <h1 className='text-[16px]'>27/04/2002</h1>
      </div>
      <div className='w-[100px] flex justify-center'>
        <Switch colorScheme='orange' />
      </div>
      <div className='w-[200px]'>
        <div className='gap-4 flex items-center justify-center'>
          <BsPencilSquare onClick={onOpen} className='cursor-pointer text-[20px] text-[#FF6636]'/>
          <FaTrash onClick={onOpenDelete} className='cursor-pointer text-[20px] text-[#FF6636]'/>
        </div>
      </div>
      <ModalUpdateBanner index={index} isOpen={isOpen} onClose={onClose}/>
      <ModalDeleteBanner isOpen={isOpenDelete} onClose={onCloseDelete}/>
    </div>
  );
};

export default CardBanner;