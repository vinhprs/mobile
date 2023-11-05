import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import CourseList from "./CourseList";
import img from "../../image/Homepage/R.jpeg";

const ViewList = () => {
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
      loop={true}
    >
      <SwiperSlide>
        <Link to="">
          <CourseList />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="">
          <CourseList />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="">
          <CourseList />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="">
          <CourseList />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="">
          <CourseList />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="">
          <CourseList />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default ViewList;
