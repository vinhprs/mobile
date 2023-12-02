import { Button } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartList,
  selectCartListSub,
  selectIsBuyNow,
} from "../../store/reducers/cartSlice";
import { formatMoney } from "../../utils/lib";
import vnpay from "../../image/Payment/202166185_2021396718013233_8499389898242103910_n.png";
import { useAppDispatch } from "../../hooks/appHooks";
import { paymentCart } from "../../store/actions/payment.action";

const PaymentMethod = () => {
  const cartList: any = useSelector(selectCartList);
  const cartListSub: any = useSelector(selectCartListSub);
  const isBuyNow = useSelector(selectIsBuyNow);
  const dispatch = useAppDispatch();
  const handleCheckoutCart = async () => {
    let newArray: any = [];
    if (isBuyNow === false) {
      newArray = cartList?.carts?.map((cart: any) => ({
        cartId: cart?._id,
        price: cart?.course.price,
      }));
    } else {
      newArray = cartListSub?.carts?.map((cart: any) => ({
        courseId: cart?.course?._id,
        price: cart?.course.price,
      }));
    }
    const payload = {
      paymentMethod: "vnpay",
      items: newArray,
    };
    const res: any = await dispatch(paymentCart(payload));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      window.open(res.payload.data);
    }
  };
  return (
    <div className="flex flex-col items-end gap-y-4">
      <div className="mt-3 flex justify-end gap-x-1 text-[20px]">
        <h1 className="font-medium">Tổng tiền:</h1>
        <span className="text-[#FF6636]">
          {formatMoney(cartList?.total)} VND
        </span>
      </div>
      <div className="h-[1px] w-full bg-[#FF6636]"></div>
      <div className="flex flex-col gap-y-2">
        <h1>Chọn phương thức thanh toán</h1>
        <div className="flex items-center gap-x-2">
          <input type="radio" name="" id="" defaultChecked={true} />
          <div className="flex items-center">
            <img
              src={vnpay}
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <span className="text-[14px] font-semibold">VNPAY</span>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#FF6636]"></div>

      <Button
        color="white"
        bg="#FF6636"
        _hover={{ bg: "#fe6131" }}
        onClick={handleCheckoutCart}
      >
        Thanh toán khóa học{" "}
      </Button>
    </div>
  );
};

export default PaymentMethod;
