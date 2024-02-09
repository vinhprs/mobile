import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './rootReducers';
import { getWistList } from '../actions/wishlist.action';
const initialState = {
  wishList: [],
};
const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: initialState,
  reducers: {
    updateWishList: (state, actions) => {
      state.wishList = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWistList.fulfilled, (state, actions) => {
      state.wishList = actions.payload.data;
    });
  },
});
export default wishListSlice.reducer;
export const { updateWishList } = wishListSlice.actions;
export const selectWishList = (state: RootState) => state.wishlist.wishList;
