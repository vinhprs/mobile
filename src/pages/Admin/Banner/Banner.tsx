import React from 'react';
import CardBanner from './CardBanner';
import { Button, useDisclosure } from '@chakra-ui/react';
import ModalCreateBanner from './ModalCreateBanner';

const Banner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className=" p-[24px] w-full mx-auto">
      <div className='flex justify-between items-center mb-[20px]'>
        <h1 className='text-[25px] font-semibold text-[#FF6636]'>Banner</h1>
        <div>
          <Button
            bg="#FF6636"
            color="#ffffff"
            fontSize="14px"
            _hover={{
              bg: '#f85b2b',
            }}
            onClick={onOpen}
          >
            Tạo banner
          </Button>
        </div>
      </div>
      <div>
        <div className='gap-3 flex w-full font-semibold bg-[#FF6636] px-3 py-3 text-white rounded-t-2xl'>
          <div className='flex-1'>
            <h1>Banner</h1>
          </div>
          <div className='w-[500px] text-center'>
            <div>Tiêu đề</div>
          </div>
          <div className='w-[300px] text-center'>
            <div>Ngày tạo</div>
          </div>
          <div className='w-[100px] text-center'>
            <div>Hiển thị</div>
          </div>
          <div className='w-[200px] text-center'>
            <div>Hành động</div>
          </div>
        </div>
        <div className='divide-y-2 divide-[#FF6636]'>
          <CardBanner index={1}/>
          <CardBanner index={2}/>
          <CardBanner index={3}/>
          <CardBanner index={4}/>
        </div>
      </div>
      <ModalCreateBanner isOpen={isOpen} onClose={onClose}/>
    </div>
  );
};

export default Banner;