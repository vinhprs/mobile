import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import CourseTitle from '../../CourseItem/CourseTitle';
import TabCourse from '../../CourseItem/TabCourse';
import { useAppDispatch } from '../../../hooks/appHooks';
import { getCourseDetail } from '../../../store/actions/course.action';
const ModalDetailExam = ({isOpen,onClose}:any) => {
  const [loading, setLoading] = useState(false);
  const [courseDetail, setCourseDetail] = useState();

  const dispatch = useAppDispatch();
  const getDetailCourse = async (id: any) => {
    const res: any = await dispatch(getCourseDetail(id));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      setLoading(false);
      setCourseDetail(res.payload.data);
      console.log(
        '🚀 ~ file: CourseItem.tsx:23 ~ getDetailCourse ~ res.payload.data:',
        res.payload.data
      );
    }
  };
  useEffect(() => {
    setLoading(true);
    
    getDetailCourse(10);
    
  }, []);
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chi tiết khoá học</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="text-[#272829] flex flex-col gap-y-5">
              <CourseTitle courseDetail={courseDetail} />
              <TabCourse courseDetail={courseDetail} isShow={false}/>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalDetailExam;