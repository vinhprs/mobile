import { createAsyncThunk } from '@reduxjs/toolkit';
import { cartService } from '../services/cart.service';
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await cartService.addToCart(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getCart = createAsyncThunk(
  'cart/getCart',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await cartService.getMyCart();
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteCart = createAsyncThunk(
  'cart/deleteCart',
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await cartService.deleteCart(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
