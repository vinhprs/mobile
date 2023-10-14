import React from "react";
import FavoriteList from "./FavoriteList";

const Favorite = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-[#1D2026] text-[24px] font-semibold">
        Yêu thích (3)
      </h1>
      <FavoriteList />
    </div>
  );
};

export default Favorite;
