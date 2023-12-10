import React, { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { formatNumberMoney } from "../../utils/lib";
import CourseNavbar from "./CourseNavbar";
import { useSelector } from "react-redux";
import { selectWishList } from "../../store/reducers/wishListSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { getWistList } from "../../store/actions/wishlist.action";
import { addToCart, getCart } from "../../store/actions/cart.action";
import useQueryParams from "../../hooks/useSearchParams";
import useSetQueryParams from "../../hooks/useSetQuery";
import { getStudentCourse } from "../../store/actions/course.action";

const Wishlist = () => {
  const navigate = useNavigate();
  const wishList = useSelector(selectWishList);
  const dispatch = useAppDispatch();
  const getWishLists = async () => {
    const res = await dispatch(getWistList({}));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      console.log(res);
    }
  };
  const getCartList = async () => {
    const res = await dispatch(getCart({}));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
    }
  };
  const queryParam = useQueryParams(
    {
      search: "",
      categoryId: "",
      subCategoryId: "",
      startPrice: "",
      endPrice: "",
      page: 1,
      userId: "",
      startDuration: "",
      endDuration: "",
    },
    window.location.href
  );
  const getListCourse = async (rest?: any) => {
    const payload = new URLSearchParams({
      limit: 10,
      ...rest,
    });
    const res: any = await dispatch(getStudentCourse(payload));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      // dispatch(setUpdateCourse(res.payload.data));
      // dispatch(setLoading(false));
    }
  };
  const addCart = async (id: any) => {
    const payload = {
      courseId: id,
    };
    const res = await dispatch(addToCart(payload));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      console.log("🚀 ~ file: SidebarCourse.tsx:31 ~ addCart ~ res:", res);
    }
  };
  const addToMyCart = (id: any) => {
    addCart(id);
    setTimeout(() => {
      getListCourse({
        ...queryParam.queryParams,
      });
      getCartList();
      getWishLists();
    }, 500);
  };
  useEffect(() => {
    getWishLists();
  }, []);
  return (
    <div className="title_learn text-[14px] cursor-pointer relative text-[#272829]">
      <div className="relative cursor-pointer">
        <FiHeart className="text-[22px]" />
        <div className="absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-full bg-[#FF6636] flex justify-center items-center ">
          <span className="text-[10px] text-white font-medium">
            {wishList.length}
          </span>
        </div>
      </div>
      <div className="modal_title_learn absolute top-[100%] right-[50%] w-[300px]  bg-white border-[1px] border-[#272829]">
        <div className="px-3 py-3 flex flex-col items-center text-[#ACADAE]">
          {/* khi nào rỗng thì hiện */}
          {/* <h1>Các khóa học yêu thích đang trống</h1> */}
          {wishList.length === 0 ? (
            <h1>Các khóa học yêu thích đang trống</h1>
          ) : (
            <div className="flex flex-col gap-y-1 divide-y-2 max-h-[550px] h-fit overflow-y-scroll">
              {wishList?.map((wishlistItem: any, index: number) => (
                <div>
                  <CourseNavbar cart={wishlistItem.course} />
                  {wishlistItem?.course?.isAddToCart ? (
                    <button
                      onClick={() => navigate("/cart")}
                      className="divide-none w-full py-3 px-2 border-[2px] border-[#272829] text-[#272829] font-semibold hover:bg-[#FF6636] hover:border-none hover:text-white transition-all ease-in-out duration-300"
                    >
                      Đi tới giỏ hàng
                    </button>
                  ) : (
                    <button
                      onClick={() => addToMyCart(wishlistItem?.course?._id)}
                      className="divide-none w-full py-3 px-2 border-[2px] border-[#272829] text-[#272829] font-semibold hover:bg-[#FF6636] hover:border-none hover:text-white transition-all ease-in-out duration-300"
                    >
                      Thêm vào giỏ hàng
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* khi nào rỗng thì hiện */}
        {/* <Link to="" className="px-2 pb-3 text-center w-full block font-medium">
          Khám phá liền
        </Link> */}
      </div>
    </div>
  );
};

export default Wishlist;
