import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import ListCart from "./ListCart";
import Total from "./Total";

const Cart = () => {
  return (
    <Wrapper>
      <div className="max-w-[1200px] w-full mx-auto text-[#1D2026]">
        <h1 className="font-semibold text-[24px] mb-5 text-center py-[40px] bg-[#F5F7FA]">
          Giỏ hàng
        </h1>
        <div className="grid grid-cols-[1fr_300px] gap-x-3">
          <div className="">
            <ListCart />
          </div>
          <div className="h-fit p-[10px]">
            <Total />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
