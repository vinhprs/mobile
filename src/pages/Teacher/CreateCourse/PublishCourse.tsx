import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { selectCoursesCreated } from '../../../store/reducers/createCourseSlice';
import { useAppDispatch } from '../../../hooks/appHooks';
import { createCourse } from '../../../store/actions/course.action';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const PublishCourse = () => {
  const selectedCourse = useSelector(selectCoursesCreated);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  console.log(
    '🚀 ~ file: PublishCourse.tsx:8 ~ PublishCourse ~ selectedCourse:',
    selectedCourse
  );

  const createCourseHandle = async () => {
    const res:any = await dispatch(createCourse(selectedCourse));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      console.log(res);
      toast({
        title: 'Tạo khoá học thành công',
        description: `Tạo khoá ${res.payload.data.courseName}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      navigate('/teacher/courses');
    } else {
      console.log('err');
    }

    // console.log(form);
  };
  return (
    <div className="px-[40px] py-[24px] text-[#1D2026]">
      <h1 className="font-semibold text-[24px] text-[#1D2026]">
        Đăng tải khóa học
      </h1>
      <div className="flex justify-end mt-3">
        <button
          onClick={createCourseHandle}
          className="text-[14px] h-[48px] px-[24px] font-semibold text-white bg-[#FF6636] hover:bg-[#fe5a27]"
        >
          Lưu khóa học
        </button>
      </div>
    </div>
  );
};

export default PublishCourse;
