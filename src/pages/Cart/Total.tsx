import { Button } from '@chakra-ui/react';
import React from 'react';
import { formatMoney } from '../../utils/lib';
import { useSelector } from 'react-redux';
import { selectCartList, updateIsBuyNow } from '../../store/reducers/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/appHooks';

const Total = () => {
  const cartList: any = useSelector(selectCartList);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleNavigate = () => {
    navigate('/cart/payment');
    dispatch(updateIsBuyNow(false));
  };
  return (
    <div className="flex flex-col items-end gap-y-2">
      <div className="mt-3 flex justify-end gap-x-1 text-[20px]">
        <h1 className="font-medium">Tổng tiền:</h1>
        <span className="text-[#FF6636]">
          {formatMoney(cartList?.total)} VND
        </span>
      </div>
      <Button
        isDisabled={cartList?.carts?.length === 0 ? true : false}
        color="white"
        bg="#FF6636"
        _hover={{ bg: '#fe6131' }}
        onClick={handleNavigate}
      >
        Chuyển tới thanh toán{' '}
      </Button>
    </div>
  );
};

export default Total;
