import React, { useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { formatNumberMoney } from '../../utils/lib';
import CourseNavbar from './CourseNavbar';
import { useAppDispatch } from '../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectCartList } from '../../store/reducers/cartSlice';
import { getCart } from '../../store/actions/cart.action';

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartList: any = useSelector(selectCartList);
  const getCartList = async () => {
    const res = await dispatch(getCart({}));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) { /* empty */ }
  };
  useEffect(() => {
    getCartList();
  }, []);
  return (
    <div className="title_learn text-[14px] cursor-pointer relative text-[#272829]">
      <div className="cursor-pointer relative">
        <AiOutlineShoppingCart className="text-[22px]" />
        <div className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-full bg-[#FF6636] flex justify-center items-center">
          <span className="text-[10px] text-white font-medium">
            {cartList?.carts ? cartList?.carts?.length : 0}
          </span>
        </div>
      </div>
      <div className="modal_title_learn absolute top-[100%] right-[50%] w-[280px] bg-white border-[1px] border-[#272829]">
        {cartList?.carts?.length === 0 ? (
          <div className="px-3 py-3 flex flex-col items-center text-[#ACADAE]">
            <h1>Giỏ hàng của bạn đang trống</h1>
          </div>
        ) : (
          <div className="px-3 py-3 flex flex-col items-center text-[#ACADAE]">
            <div className="flex flex-col gap-y-1 divide-y-2 max-h-[550px] h-fit overflow-y-scroll">
              {cartList?.carts?.map((cart: any, index: any) => (
                <CourseNavbar key={cart?._id} cart={cart?.course} />
              ))}
              {/* <CourseNavbar />
            <CourseNavbar />
            <CourseNavbar />
            <CourseNavbar />
            <CourseNavbar /> */}
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <h1 className="font-semibold text-[18px] text-[#272829]">
                Tổng tiền: <span>{formatNumberMoney(cartList?.total)}VND</span>
              </h1>
              <button
                onClick={() => navigate('/cart')}
                className="divide-none w-full py-3 px-2 border-[2px] border-[#272829] text-[#272829] font-semibold hover:bg-[#FF6636] hover:text-white hover:border-none transition-all ease-in-out duration-300"
              >
                Đi tới giỏ hàng
              </button>
            </div>
          </div>
        )}
        {/* <Link to="" className="px-2 pb-3 text-center w-full block font-medium">
          Tiếp tục mua khóa học
        </Link> */}
      </div>
    </div>
  );
};

export default Cart;
