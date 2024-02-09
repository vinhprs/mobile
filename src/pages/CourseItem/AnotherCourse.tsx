import React, { useEffect } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useAppDispatch } from '../../hooks/appHooks';
import { getStudentCourse } from '../../store/actions/course.action';
import { useSelector } from 'react-redux';
import { selectAnotherCourse } from '../../store/reducers/courseSlice';
import { formatMoney } from '../../utils/lib';
import { useNavigate } from 'react-router-dom';
import { getWistList, postWishList } from '../../store/actions/wishlist.action';
import { useToast } from '@chakra-ui/react';
import { LocalStorage } from '../../utils/LocalStorage';
const AnotherCourse = ({ courseDetail }: any) => {
  const userId = LocalStorage.getUserId();

  const toast = useToast();
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const anotherCourseList: any = useSelector(selectAnotherCourse);
  const getAnotherCourse = async (id: any) => {
    const variable = new URLSearchParams({
      categoryId: courseDetail?.categoryId,
      limit: '6',
      page: '1',
    });
    const response = await dispatch(getStudentCourse(variable));
    if (response.meta.requestStatus === 'fulfilled' && response.payload) {
      console.log(response);
    }
  };
  const getWishListItem = async () => {
    const res = await dispatch(getWistList({}));
    if (res.payload && res.meta.requestStatus === 'fulfilled') { /* empty */ }
  };
  const postWishListItem = async (id: any, idCategory: any) => {
    console.log(id);
    const variable = {
      courseId: id,
    };
    const res: any = await dispatch(postWishList(variable));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      toast({
        title: res?.payload.message,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setTimeout(() => {
        getAnotherCourse(idCategory);
        getWishListItem();
      }, 500);
    }
  };
  useEffect(() => {
    if (courseDetail?.categoryId) getAnotherCourse(courseDetail?.categoryId);
  }, [courseDetail?.categoryId]);
  return (
    <div className="flex flex-col gap-y-2">
      {anotherCourseList?.listData?.map((item: any, index: any) => (
        <div className="flex gap-x-3 text-[14px] text-[#1D2026]" key={item?._id}>
          <img
            className="w-[80px] h-[80px] object-cover"
            src={item?.thumbnail_url}
            alt=""
          />
          <div className="flex w-full justify-between">
            <div
              className="flex flex-col gap-y-2 cursor-pointer"
              onClick={() => navigation(`/courses/${item._id}`)}
            >
              <h1 className="font-semibold w-[400px]">{item?.courseName}</h1>
              <div className="flex gap-x-2 items-center">
                <span className="font-medium text-[#4E5566]">
                  Thời lượng: {item?.totalDuration.split('.')[0]} phút
                </span>
              </div>
            </div>
            <div className="flex h-fit gap-x-3 items-center">
              <div className="flex gap-x-5">
                {/* <div className="flex gap-x-1">
                  <BsFillPeopleFill className="text-[20px]" />
                  <span>90,344</span>
                </div> */}
                <h1 className="font-medium text-[#FF6636]">
                  <span>{formatMoney(item?.price)} VND</span>
                </h1>
              </div>
              <div>
                {userId && (
                  <div
                    onClick={() =>
                      postWishListItem(item?._id, item?.categoryId)
                    }
                    className="cursor-pointer w-10 h-10 text-[20px] border-[1px] border-[#FF6636] flex justify-center items-center rounded-full"
                  >
                    {item?.isBookmark ? (
                      <AiFillHeart className="text-[#FF6636]" />
                    ) : (
                      <AiOutlineHeart className="text-[#FF6636]" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnotherCourse;
