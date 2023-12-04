import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useAppDispatch } from "../../../hooks/appHooks";
import { getTeacherCourse } from "../../../store/actions/course.action";
import Course from "./Course";
import PagiantionNew from "../../../components/Pagination/PagiantionNew";
import { useDebounce } from "../../../hooks/useDebounce";
import { Spinner } from "@chakra-ui/react";
const MainCourse = () => {
  const dispatch = useAppDispatch();
  const [listCourses, setListCourse] = useState<any>();
  const [search, setSearch] = useState("");
  const { debouncedValue, loading } = useDebounce<string>(search, 500);
  const [page, setPage] = useState(1);
  const getTeacherCourseData = async (asset?: any) => {
    const payload = new URLSearchParams({
      limit: 12,
      page: page,
      ...asset,
    });
    const res: any = await dispatch(getTeacherCourse(payload));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      setListCourse(res.payload.data);
      console.log(res);
    }
  };
  useEffect(() => {
    const payload = {
      search: debouncedValue,
      page: page,
    };
    getTeacherCourseData(payload);
  }, [debouncedValue, page]);
  useEffect(() => {
    if (debouncedValue !== "") {
      setPage(1);
    }
  }, [debouncedValue]);
  const handleChange = (page: number) => {
    setPage(page);
  };
  return (
    <div className="max-w-[1000px] p-[24px] w-full mx-auto">
      <div className="flex flex-col gap-y-[16px]">
        <div className="flex flex-col gap-y-[6px]">
          <span className="text-[12px]">Tìm kiếm:</span>
          <div className="flex items-center gap-x-[12px] py-[12px] px-[18px] w-full bg-white">
            <CiSearch className="text-[24px]" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-full outline-none text-[14px] placeholder:text-[#8C94A3] text-[#1D2026]"
              placeholder="VD: Ngữ Văn"
            />
          </div>
        </div>
        {/* {debounceSearch !== search && <p>Loading</p>} */}
        {loading ? (
          <div className="flex justify-center">
            <Spinner color="#FF6636" />
          </div>
        ) : (
          <>
            {listCourses?.listData.length > 0 && !loading && (
              <div className={`grid grid-cols-3 gap-3`}>
                {listCourses?.listData.map((item: any, index: any) => (
                  <Course
                    item={item}
                    key={item._id}
                    getTeacherCourseData={getTeacherCourseData}
                  />
                ))}
              </div>
            )}
            {!loading && listCourses?.listData.length === 0 && (
              <p>Không có khóa học</p>
            )}
          </>
        )}
        {listCourses?.listData.length > 0 && (
          <div>
            <PagiantionNew
              onPageChange={handleChange}
              totalCount={listCourses?.total}
              pageSize={12}
              siblingCount={1}
              currentPage={page}
              debouncedValue={debouncedValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCourse;
