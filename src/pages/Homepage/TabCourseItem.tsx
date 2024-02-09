import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseList from './CourseList';
import { useAppDispatch } from '../../hooks/appHooks';
import { getStudentCourse } from '../../store/actions/course.action';
import { TiStarFullOutline } from 'react-icons/ti';
const TabCourseItem = ({ item, itemSearch }: any) => {
  console.log(
    '🚀 ~ file: TabCourseItem.tsx:8 ~ TabCourseItem ~ itemSearch:',
    itemSearch
  );
  // const dispatch = useAppDispatch();
  // const [getSubject, setGetSubject] = useState<any>([]);
  // const getInformation = async (items: any) => {
  //   const payload = new URLSearchParams({
  //     search: items,
  //   });
  //   const res: any = await dispatch(getStudentCourse(payload));
  //   if (res.payload && res.meta.requestStatus === "fulfilled") {
  //     setGetSubject(res?.payload.data);
  //   }
  // };
  // useEffect(() => {
  //   getInformation(item);
  // }, [item]);
  return (
    <div>
      <h1 className="text-[24px] font-semibold mb-3 uppercase">
        Tìm Hiểu Về Các Khóa Học Chất Lượng Cao trên{' '}
        <span className="text-[#FF6636]">Primeedu</span> cho các bạn học sinh
        THPT
      </h1>
      <div>
        <p className="text-[18px] text-[#61677A] mb-4 flex items-center gap-x-2">
          <TiStarFullOutline className="text-[#FF6636]" />
          <span>
            Hành Trình Học Tập THPT Hiệu Quả: Các Khóa Học Nền Tảng tại Primeedu
          </span>
        </p>
        <p className="text-[18px] text-[#61677A] mb-4 flex items-center gap-x-2">
          <TiStarFullOutline className="text-[#FF6636]" />

          <span>
            Chinh Phục Môn Toán: Khám Phá Các Khóa Học Toán Học Thú Vị trên
            Primeedu
          </span>
        </p>
        <p className="text-[18px] text-[#61677A] mb-4 flex items-center gap-x-2">
          <TiStarFullOutline className="text-[#FF6636]" />

          <span>
            Nâng Cao Ngoại Ngữ: Khám Phá Các Khóa Học Tiếng Anh và Tiếng Nhật
            Tại Primeedu
          </span>
        </p>
        <p className="text-[18px] text-[#61677A] mb-4 flex items-center gap-x-2">
          <TiStarFullOutline className="text-[#FF6636]" />
          <span>
            Học Khoa Học và Văn Hóa: Các Khóa Học Lịch Sử, Địa Lý và Văn Hóa Tại
            Primeedu
          </span>
        </p>
        <p className="text-[18px] text-[#61677A] mb-4 flex items-center gap-x-2">
          <TiStarFullOutline className="text-[#FF6636]" />
          <span>
            Vươn Xa Trong Khoa Học Xã Hội: Các Khóa Học Kỹ Năng Mềm và Tư Duy
            Logic
          </span>
        </p>
      </div>
      <Link
        to={`/courses?search=${itemSearch?.subjectName}`}
        className="mb-6 px-4 font-semibold text-[14px] py-3 inline-block border-[1px] border-[#272829] hover:text-[white] hover:bg-[#272829] transition-all duration-200 ease-in-out"
      >
        Khám phá ngay
      </Link>
      <div className="grid grid-cols-5 gap-x-4">
        {item?.listData?.map((itemList: any, index: any) => (
          <CourseList itemList={itemList} key={itemList?._id} />
        ))}
        {/* <CourseList />
        <CourseList />
        <CourseList />
        <CourseList /> */}
      </div>
    </div>
  );
};

export default TabCourseItem;
