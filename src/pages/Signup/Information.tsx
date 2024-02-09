import React from 'react';
import { useSearchParams } from 'react-router-dom';
import FormInformation from './FormInformation';
import { Button } from '@chakra-ui/react';
import image from '../../image/Login/pexels-photo-11798029.jpeg';
import { useNavigate } from 'react-router-dom';
const Information = () => {
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate('/');
  };
  return (
    <div className="grid grid-cols-2">
      <div className="">
        <img src={image} alt="" className="h-full w-full" />
      </div>
      <div className="py-[15px] flex justify-center items-center bg-[#FFEEE8] text-[#1D2026]">
        <div>
          <div className="w-[350px] border-b-[1px] border-[#272829] pb-2">
            <h1 className="font-bold text-[24px] mb-5 text-[#FF6636]">
              Nhập thông tin cơ bản
            </h1>
            <div className="flex flex-col gap-y-3 mb-5">
              <FormInformation />
            </div>
          </div>
          <div className="pt-3">
            <Button
              onClick={handleSkip}
              _hover={{ bg: '#ff5926' }}
              w="100%"
              bg="#FF6636"
              color="white"
              borderRadius="none"
            >
              Bỏ qua
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
