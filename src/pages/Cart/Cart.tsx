import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import ListCart from "./ListCart";

const Cart = () => {
  return (
    <Wrapper>
      <div className="max-w-[1200px] w-full mx-auto text-[#272829]">
        <h1 className="font-semibold text-[35px] mb-5">Giỏ hàng</h1>
        <div className="grid grid-cols-[1fr_300px] gap-x-3">
          <div className="">
            <ListCart />
          </div>
          <div className="bg-slate-600"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
