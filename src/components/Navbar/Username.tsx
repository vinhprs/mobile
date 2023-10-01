import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appHooks";
import { updateTabCourse } from "../../store/reducers/courseTabSlice";

const Username = () => {
  const dispatch = useAppDispatch();
  const handleClickToCourseTab = (index: number) => {
    dispatch(updateTabCourse(index));
  };
  return (
    <div className="title_learn text-[14px] cursor-pointer relative text-[#272829]">
      <div className="cursor-pointer">
        <div className="w-[30px] h-[30px] bg-[#272829] flex justify-center items-center rounded-full">
          <h1 className="text-white">TK</h1>
        </div>
      </div>

      <div className="modal_title_learn absolute top-[100%] right-[50%] w-[300px] h-fit bg-white border-[1px] border-[#272829]">
        <div className="px-2 py-3 divide-y-[1px]">
          <div className="grid grid-cols-[80px_1fr] gap-x-2 items-center pb-3">
            <img
              src="https://images.pexels.com/photos/9449708/pexels-photo-9449708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-[80px] h-[80px] rounded-full border-[1px]"
            />
            <div>
              <h1 className="text-base font-medium">TheKiet</h1>
              <span className="text-[12px] text-[#ACADAE]">
                baovan301@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col py-3 gap-y-2">
            <Link
              to="mylearning"
              className="text-[14px] font-medium text-[#61677A] hover:text-[#272829] transition-all ease-in-out duration-200"
              onClick={() => handleClickToCourseTab(0)}
            >
              Khóa học của tôi
            </Link>
            <Link
              to="mylearning"
              className="text-[14px] font-medium text-[#61677A] hover:text-[#272829] transition-all ease-in-out duration-200"
              onClick={() => handleClickToCourseTab(1)}
            >
              Khóa học yêu thích
            </Link>
            <Link
              to="cart"
              className="text-[14px] font-medium text-[#61677A] hover:text-[#272829] transition-all ease-in-out duration-200"
            >
              Giỏ hàng của tôi
            </Link>
          </div>
          <div className="flex flex-col py-3 gap-y-2">
            <Link
              to=""
              className="text-[14px] font-medium text-[#61677A] hover:text-[#272829] transition-all ease-in-out duration-200"
            >
              Thông báo
            </Link>
            <Link
              to=""
              className="text-[14px] font-medium text-[#61677A] hover:text-[#272829] transition-all ease-in-out duration-200"
            >
              Tin nhắn
            </Link>
          </div>
          <div className="flex flex-col py-3 gap-y-2">
            <Link
              to=""
              className="text-[14px] font-medium text-[#61677A] hover:text-[#272829] transition-all ease-in-out duration-200"
            >
              Cài đặt tài khoản
            </Link>
            <Link
              to=""
              className="text-[14px] font-medium text-[#61677A] hover:text-[#272829] transition-all ease-in-out duration-200"
            >
              Đăng xuất
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Username;
