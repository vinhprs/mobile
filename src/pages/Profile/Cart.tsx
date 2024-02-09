import React from 'react';
import CartList from './CartList';
import { useSelector } from 'react-redux';

const Cart = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <CartList />
    </div>
  );
};

export default Cart;
