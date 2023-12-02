import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useAppDispatch } from "../../hooks/appHooks";
import { getStudentCourse } from "../../store/actions/course.action";
import { Link } from "react-router-dom";
import { formatMoney } from "../../utils/lib";
const SearchResult = ({ value, debouncedValue }: any) => {
  const dispatch = useAppDispatch();
  const [searchCourseList, setSearchCourseList] = useState<any>([]);
  console.log(
    "🚀 ~ file: SearchResult.tsx:8 ~ SearchResult ~ searchCourseList:",
    searchCourseList
  );
  const getSearchListCourse = async (search: any) => {
    const payload: any = new URLSearchParams({
      limit: "5",
      search: search,
    });
    const res: any = await dispatch(getStudentCourse(payload));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      setSearchCourseList(res?.payload.data);
    }
  };
  useEffect(() => {
    getSearchListCourse(debouncedValue.debouncedValue);
  }, [debouncedValue.debouncedValue]);

  return (
    <div className="absolute top-[105%] left-0 w-full bg-white shadow-xl border-[#D8D9DA] border-[1px] rounded-xl p-3">
      {debouncedValue.debouncedValue !== value ? (
        <div className="flex w-full items-center justify-center">
          <Spinner color="red.500" />
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-y-3">
            {searchCourseList?.listData?.length === 0 ? (
              <p className="text-[#1D2026]">Không có khóa học</p>
            ) : (
              <>
                {searchCourseList?.listData?.map((item: any, index: any) => (
                  <Link
                    to={`/courses/${item?._id}`}
                    key={item._id}
                    className="flex items-center gap-x-3 text-[#1D2026] cursor-pointer hover:bg-[#FF6636] hover:text-white  p-3"
                  >
                    <img
                      src={item?.thumbnail_url}
                      alt="logo-subject"
                      className="w-14 h-14 object-cover"
                    />
                    <div className="flex flex-col gap-y-2">
                      <h1 className="text-[#272829] font-bold ">
                        {item?.courseName}
                      </h1>
                      <div className="text-[12px] italic flex gap-x-2">
                        <span className="px-[3px] py-[2px] bg-[#EBEBFF] text-[#564FFD]">
                          {item?.category.categoryName}
                        </span>
                        <span className="px-[3px] py-[2px] bg-[#FFF2E5] text-[#FD8E1F]">
                          {formatMoney(item?.price)}VND
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  to={`/courses?search=${debouncedValue.debouncedValue}`}
                  className="text-[14px] italic hover:text-[#FF6636]"
                >
                  Xem tất cả kết quả về {debouncedValue.debouncedValue}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
