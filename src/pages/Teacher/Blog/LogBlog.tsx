import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
} from '@chakra-ui/react';
import parse from 'html-react-parser';
import { useAppDispatch } from '../../../hooks/appHooks';
import { deleteBloglAction } from '../../../store/actions/blog.action';
const LogBlog = ({isOpen,onClose,item,getListBlog}:any) => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const deleteBlog = async(id:any)=>{
    const res = await dispatch(deleteBloglAction(id));
    if(res.meta.requestStatus==='fulfilled'){
      console.log('🚀 ~ deleteBlog ~ res:', res);
      onClose();
      getListBlog();
      toast({
        title: 'Xoá thành công',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:'top-right'
      });
    }else{
      toast({
        title: 'Xoá không thành công',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position:'top-right'
      });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Xoá bài viết</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className=''>
            Bạn có muốn xoá bài viết <span className='font-semibold text-red-500'>{item?.title && parse(item?.title)}</span>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
              Đóng
          </Button>
          <Button bg="#FF6636" mr={3} onClick={()=>deleteBlog(item?._id)} color="white">
              Xoá
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogBlog;