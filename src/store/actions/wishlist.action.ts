import { createAsyncThunk } from "@reduxjs/toolkit";
import { wishlistService } from "../services/wishlist.service";
export const postWishList = createAsyncThunk(
  "wishlist/postWithList",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await wishlistService.postWishList(params);
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getWistList = createAsyncThunk(
  "wishlist/postWishList",
  async (params: any, { dispatch, getState, rejectWithValue }) => {
    try {
      const res = await wishlistService.getWistList();
      return res;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
