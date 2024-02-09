import { getCart } from '../actions/cart.action';
import { RootState } from './rootReducers';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cartList: {},
  cartListSub: {
    carts: [
      {
        course: {},
      },
    ],
  },
  isBuyNow: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    updateCart: (state, actions) => {
      state.cartList = actions.payload;
    },
    updateCartSub: (state: any, actions: any) => {
      state.cartListSub.carts[0].course = actions.payload;
    },
    updateIsBuyNow: (state, actions) => {
      state.isBuyNow = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, actions) => {
      state.cartList = actions.payload.data;
    });
  },
});
export default cartSlice.reducer;
export const { updateCart, updateCartSub, updateIsBuyNow } = cartSlice.actions;
export const selectCartList = (state: RootState) => state.cart.cartList;
export const selectCartListSub = (state: RootState) => state.cart.cartListSub;
export const selectIsBuyNow = (state: RootState) => state.cart.isBuyNow;
