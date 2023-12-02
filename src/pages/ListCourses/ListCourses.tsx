import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Courses from "./Courses";
import { BsFilter } from "react-icons/bs";
import { Select } from "@chakra-ui/react";
import { useAppDispatch } from "../../hooks/appHooks";
import { getStudentCourse } from "../../store/actions/course.action";
import {
  selectCourse,
  selectLoading,
  setLoading,
  setUpdateCourse,
} from "../../store/reducers/courseSlice";
import { useSelector } from "react-redux";
import useQueryParams from "../../hooks/useSearchParams";
import Filter from "./Filter";
import { useLocation } from "react-router-dom";
import useSetQueryParams from "../../hooks/useSetQuery";
import { selectAuthUserId } from "../../store/reducers/authSlice";
import { LocalStorage } from "../../utils/LocalStorage";
const ListCourses = () => {
  const param = useLocation();
  const dispatch = useAppDispatch();
  const course = useSelector(selectCourse);
  const [page, setPage] = useState(1);
  const loading = useSelector(selectLoading);
  const [openSidebar, setOpenSidebar] = useState(false);
  const userId = LocalStorage.getUserId();
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
  const setQuery = useSetQueryParams();
  const getListCourse = async (rest?: any) => {
    const payload = new URLSearchParams({
      limit: 10,
      ...rest,
    });
    const res: any = await dispatch(getStudentCourse(payload));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      dispatch(setUpdateCourse(res.payload.data));
      dispatch(setLoading(false));
    }
  };
  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  useEffect(() => {
    dispatch(setLoading(true));
    getListCourse({
      ...queryParam.queryParams,
      page: page,
      userId: userId ? userId : "",
    });
    setQuery(queryParam.queryParams, {
      page: page,
      userId: userId ? userId : "",
    });
  }, [param.search, page]);

  return (
    <div className="pt-[100px] pb-[60px] px-[24px] text-[#1D2026]">
      <h1 className="text-[32px] font-semibold">
        {/* Có 599 kết quả về: <span className="text-[#FF6636]">Toán 11</span>{" "} */}
      </h1>
      <div className="flex my-10 items-center justify-between">
        <div className="flex gap-x-6">
          <div
            onClick={handleOpenSidebar}
            className="cursor-pointer px-2 py-1 border-[1px] border-[#272829] flex items-center w-[100px] justify-center gap-x-2"
          >
            <BsFilter className="text-[20px]" />
            <p className="font-semibold">Lọc</p>
          </div>
          {/* <div className="px-2 py-1 border-[1px] border-[#272829] text-[14px]">
            <div className="font-semibold">Sắp xếp theo</div>
            <Select
              placeholder="Select option"
              border="none"
              _focusVisible={{ border: "none" }}
            >
              <option value="option1">Mới nhất</option>
              <option value="option2">Liên quan nhất</option>
              <option value="option3">Nhiều reivew nhất</option>
            </Select>
          </div> */}
        </div>
        <span className="font-semibold text-[14px] text-[#1D2026]">
          {course.listData.length}{" "}
          <span className="text-[#4E5566] font-normal">kết quả</span>
        </span>
      </div>
      <div
        className={`grid ${
          openSidebar ? "grid-cols-1" : "grid-cols-[300px_1fr]"
        } gap-x-7`}
      >
        <div className={` ${openSidebar ? "hidden" : ""}`}>
          <Filter setPage={setPage} />
        </div>
        <div className="">
          <Courses
            page={page}
            setPage={setPage}
            getListCourse={getListCourse}
          />
        </div>
      </div>
    </div>
  );
};

export default ListCourses;
