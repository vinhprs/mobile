import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {
  selectCartList,
  selectCartListSub,
  selectIsBuyNow,
} from '../../store/reducers/cartSlice';
import ListCoursePayment from './ListCoursePayment';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigation = useNavigate();
  const isBuyNow = useSelector(selectIsBuyNow);
  const cartList: any = useSelector(selectCartList);
  const cartListSub: any = useSelector(selectCartListSub);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation('/');
    }, 12000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="max-w-[1200px] w-full mx-auto text-[#1D2026]">
      <h1 className="font-semibold text-[24px] mb-5 text-center py-[40px] text-green-500">
        Thanh toán khóa học thành công
      </h1>
      <div className="animate-bounce mx-auto h-[100px] w-[100px] border-[1px] border-green-500 rounded-full flex justify-center items-center">
        <FaCheck className="text-[40px] text-green-500" />
      </div>
      <div>
        <div className="">
          {isBuyNow ? (
            <ListCoursePayment cartList={cartListSub} />
          ) : (
            <ListCoursePayment cartList={cartList} />
          )}
        </div>
      </div>
      <div className="text-center mx-auto">
        Bạn sẽ về trang chủ trong vòng{' '}
        <span className="text-green-500">5 giây</span> nữa...
      </div>
    </div>
  );
};

export default PaymentSuccess;
