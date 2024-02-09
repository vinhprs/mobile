import React from 'react';
import FavoriteList from './FavoriteList';
import { useSelector } from 'react-redux';
import { selectWishList } from '../../store/reducers/wishListSlice';

const Favorite = () => {
  const wishList = useSelector(selectWishList);
  console.log(wishList);

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-[#1D2026] text-[24px] font-semibold">
        Yêu thích ({wishList.length})
      </h1>
      <FavoriteList />
    </div>
  );
};

export default Favorite;
