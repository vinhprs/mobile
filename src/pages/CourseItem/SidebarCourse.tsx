import React, { useEffect, useMemo, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsPeople, BsFacebook } from 'react-icons/bs';
import { SiGoogleclassroom } from 'react-icons/si';
import { FiCopy } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { formatMoney } from '../../utils/lib';
import moment from 'moment';
import { useAppDispatch } from '../../hooks/appHooks';
import { getCategoryById } from '../../store/actions/user.action';
import {
  addToCart,
  getCart,
} from '../../store/actions/cart.action';
import { LocalStorage } from '../../utils/LocalStorage';
import { getWistList, postWishList } from '../../store/actions/wishlist.action';
import { updateCartSub, updateIsBuyNow } from '../../store/reducers/cartSlice';
import { useToast } from '@chakra-ui/react';
import {FacebookIcon,FacebookShareButton} from 'react-share';
const SidebarCourse = ({ courseDetail, getDetailCourse }: any) => {
  const [categoryID, setCategoryID] = useState<any>({});
  const [description, setDescription] = useState<any>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const access_token = LocalStorage.getAccessToken();
  const toast = useToast();
  const location = useLocation();
  console.log('🚀 ~ SidebarCourse ~ location:', location);
  
  const addCart = async (id: any) => {
    const payload = {
      courseId: id,
    };
    const res = await dispatch(addToCart(payload));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      console.log('🚀 ~ file: SidebarCourse.tsx:31 ~ addCart ~ res:', res);
    } else { /* empty */ }
  };
  const getCartList = async () => {
    const res = await dispatch(getCart({}));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      console.log(res);
    }
  };
  const postWishListItem = async (id: any) => {
    const payload = {
      courseId: id,
    };
    const res = await dispatch(postWishList(payload));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      console.log(res);
    }
  };
  const getWishListItem = async () => {
    const res = await dispatch(getWistList({}));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      console.log(res);
    }
  };
  const getCategoryId = async (id: any, subId: any) => {
    const payload = new URLSearchParams({
      categoryId: id,
    });
    const res: any = await dispatch(getCategoryById(payload));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      console.log(
        '🚀 ~ file: SidebarCourse.tsx:27 ~ getCategoryId ~ res:',
        res
      );
      setCategoryID(res.payload.data);
      setDescription(
        res.payload.data.childs.filter((item: any) => item._id === subId)[0]
          .description
      );
    }
  };
  const sumTimeLecture = useMemo(() => {
    let time = 0;
    courseDetail?.sections.map((item: any) => {
      item?.lectures.map((itemLec: any) => {
        time += itemLec.duration;
      });
    });

    return time;
  }, []);
  const addToMyCart = () => {
    addCart(courseDetail?._id);
    setTimeout(() => {
      getDetailCourse(courseDetail?._id);
      getCartList();
    }, 500);
  };
  const handleDeleteCart = () => {
    navigate('/cart');
  };
  const handlePostWishList = (id: any) => {
    postWishListItem(id);
    setTimeout(() => {
      getDetailCourse(id);
      getWishListItem();
    }, 500);
  };
  const handleBuyNow = () => {
    dispatch(updateIsBuyNow(true));
    dispatch(updateCartSub(courseDetail));
    setTimeout(() => {
      navigate('/cart/payment');
    }, 500);
  };
  const copyLink = async()=>{
    await navigator.clipboard.writeText(`https://staging.primeedu.io.vn${location.pathname}`);
    toast({
      title: 'Successfully',
      description: 'Sao chép link thành công',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position:'top-right'
    });
  };
  useEffect(() => {
    if (courseDetail) {
      getCategoryId(courseDetail?.categoryId, courseDetail?.subCategoryId);
    }
  }, [courseDetail]);
  return (
    <div className="w-full shadow-[0px_6px_16px_0px_rgba(0,0,0,0.06)] bg-white border-[1px] border-[#E9EAF0]">
      <div className="py-[24px] divide-y-2">
        <div className="px-[24px] pb-[24px] ">
          <div className="flex justify-between items-center mb-[5px]">
            <h1 className="text-[#1D2026] text-[24px] font-normal">
              {formatMoney(courseDetail?.price)}VND
            </h1>
            <span className="px-[6px] py-[4px] text-[12px] text-[#FF6636] bg-[#FFEEE8] font-medium">
              {courseDetail?.courseName.split('-')[0]}
            </span>
          </div>
          <span className="px-[6px] py-[4px] text-[12px] text-[#342F98] bg-[#EBEBFF] font-medium">
            {courseDetail?.courseName.split('-')[1]}
          </span>
        </div>
        <div className="px-[24px] py-[24px] text-[14px] flex flex-col gap-y-3">
          <div className="flex justify-between items-center text-[#6E7485]">
            <div className="flex gap-x-1 items-center">
              <AiOutlineClockCircle className=" text-[20px]" />
              <span className="text-[#1D2026]">Tổng thời gian khóa học</span>
            </div>
            <span>
              {moment.duration(sumTimeLecture, 'minutes').asHours().toFixed(0)}{' '}
              giờ
            </span>
          </div>
          <div className="flex justify-between items-center text-[#6E7485]">
            <div className="flex gap-x-1 items-center">
              <BsPeople className=" text-[20px]" />
              <span className="text-[#1D2026]">Tổng số học viên</span>
            </div>
            <span>69,852,855</span>
          </div>
          <div className="flex justify-between items-center text-[#6E7485]">
            <div className="flex gap-x-1 items-center">
              <SiGoogleclassroom className=" text-[20px]" />
              <span className="text-[#1D2026]">Khối</span>
            </div>
            <span>{categoryID?.categoryName}</span>
          </div>
        </div>
        <div className="px-[24px] py-[24px]">
          {!access_token ? (
            <Link
              to="/login"
              className="text-center h-[56px] text-white text-[18px] font-semibold bg-[#FF6636] block leading-[56px]"
            >
              Đăng nhập để mua khóa học
            </Link>
          ) : (
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-3">
                {courseDetail?.isPaid ? (
                  <button
                    onClick={() => navigate('video')}
                    className="text-center w-full h-[56px] text-white text-[14px] font-semibold bg-[#FF6636] block leading-[56px] hover:bg-[#fb5c2b] transition ease-in-out duration-200"
                  >
                    Đi tới bài học
                  </button>
                ) : (
                  <button
                    onClick={handleBuyNow}
                    className="text-center w-full h-[56px] text-white text-[14px] font-semibold bg-[#FF6636] block leading-[56px] hover:bg-[#fb5c2b] transition ease-in-out duration-200"
                  >
                    Mua ngay
                  </button>
                )}
                {courseDetail?.isPaid === false && (
                  <>
                    {courseDetail?.isAddToCart ? (
                      <button
                        onClick={handleDeleteCart}
                        className="text-center w-full h-[56px] text-[#FF6636] text-[14px] font-semibold bg-[#FFEEE8] block leading-[56px] hover:bg-[#fde2d8] transition ease-in-out duration-200"
                      >
                        Đi đến giỏ hàng
                      </button>
                    ) : (
                      <button
                        onClick={addToMyCart}
                        className="text-center w-full h-[56px] text-[#FF6636] text-[14px] font-semibold bg-[#FFEEE8] block leading-[56px] hover:bg-[#fde2d8] transition ease-in-out duration-200"
                      >
                        Thêm vào giỏ hàng
                      </button>
                    )}
                  </>
                )}
              </div>
              {courseDetail?.isPaid === false && (
                <button
                  onClick={() => handlePostWishList(courseDetail?._id)}
                  className="text-center w-full border-[1px] border-[#E9EAF0] h-[56px] text-[#4E5566] text-[14px] font-semibold bg-[#fffff] block leading-[56px] hover:bg-[#FF6636] hover:text-white transition ease-in-out duration-200"
                >
                  {courseDetail?.isBookmark
                    ? 'Xóa khỏi yêu thích'
                    : 'Thêm vào yêu thích'}
                </button>
              )}
            </div>
          )}
        </div>
        <div className="px-[24px] py-[24px] text-[14px] flex-col gap-y-2 hidden lg:flex">
          <h1 className="text-[#1D2026] text-[16px] font-medium">
            Khóa học này bao gồm
          </h1>
          <p className="whitespace-break-spaces">{description}</p>
          {/* <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2">
              <AiOutlineClockCircle className="text-[18px] text-[#FF6636]" />
              <span className="text-[#4E5566]">Truy cập trọn đời</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FiFileText className="text-[18px] text-[#FF6636]" />
              <span className="text-[#4E5566]">
                Tệp bài tập miễn phí và tài nguyên có thể tải xuống
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <BiLayer className="text-[18px] text-[#FF6636]" />
              <span className="text-[#4E5566]">Hoàn toàn 100% trực truyến</span>
            </div>
          </div> */}
        </div>
        <div className="px-[24px] py-[24px] text-[14px] hidden lg:flex flex-col gap-y-2 ">
          <h1 className="text-[#1D2026] text-[16px] font-medium">
            Chia sẻ khóa học này
          </h1>
          <div className="flex items-center gap-x-2">
            <div onClick={copyLink} className="cursor-pointer flex gap-x-2 items-center bg-[#F5F7FA] text-[#4E5566] px-[20px] py-[12px] w-fit">
              <FiCopy className="text-[18px]" />
              <span>Sao chép link</span>
            </div>
            <div>
              <div className="cursor-pointer flex gap-x-2 items-center bg-[#F5F7FA] text-[#4E5566] h-[45px] w-[45px] justify-center ">
                <FacebookShareButton url={`https://staging.primeedu.io.vn${location.pathname}`}>
                  <BsFacebook className="text-[18px]" />
                </FacebookShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCourse;
