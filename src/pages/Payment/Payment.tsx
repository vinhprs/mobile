import React from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import ListCoursePayment from './ListCoursePayment';
import PaymentMethod from './PaymentMethod';
import { useSelector } from 'react-redux';
import {
  selectCartList,
  selectCartListSub,
  selectIsBuyNow,
} from '../../store/reducers/cartSlice';

const Payment = () => {
  const isBuyNow = useSelector(selectIsBuyNow);
  const cartList: any = useSelector(selectCartList);
  const cartListSub: any = useSelector(selectCartListSub);
  console.log('🚀 ~ file: Payment.tsx:10 ~ Payment ~ isBuyNow:', isBuyNow);
  return (
    <Wrapper>
      <div className="max-w-[1200px] w-full mx-auto text-[#1D2026]">
        <h1 className="font-semibold text-[24px] mb-5 text-center py-[40px] bg-[#F5F7FA]">
          Thanh toán khóa học
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-x-3">
          <div className="">
            {isBuyNow ? (
              <ListCoursePayment cartList={cartListSub} />
            ) : (
              <ListCoursePayment cartList={cartList} />
            )}
          </div>
          <div className="h-fit p-[10px]">
            <PaymentMethod />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Payment;
