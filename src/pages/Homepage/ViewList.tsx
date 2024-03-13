import React, { useEffect, useState } from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import CourseList from './CourseList';
import img from '../../image/Homepage/R.jpeg';
import { useAppDispatch } from '../../hooks/appHooks';
import { getStudentCourse } from '../../store/actions/course.action';

const ViewList = () => {
  const dispatch = useAppDispatch();
  const [itemList, setItemList] = useState<any>([]);
  const getCourse = async () => {
    const payload = new URLSearchParams({
      limit: '8',
    });
    const res: any = await dispatch(getStudentCourse(payload));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      setItemList(res?.payload.data);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <Swiper
      spaceBetween={50}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={4}
      navigation
      // pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      loop={true}
    >
      {itemList?.listData?.map((item: any, index: any) => (
        <SwiperSlide key={item?._id}>
          <Link to={`/courses/${item && item?._id}`}>
            <CourseList itemList={item} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ViewList;
