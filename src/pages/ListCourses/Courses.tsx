import React, { useState } from "react";
import Course from "./Course";
import Pagination from "./Pagination";
import PagiantionNew from "../../components/Pagination/PagiantionNew";
import { useSelector } from "react-redux";
import { selectCourse, selectLoading } from "../../store/reducers/courseSlice";
import { Spinner } from "@chakra-ui/react";
const Courses = ({ setPage, page }: any) => {
  const course = useSelector(selectCourse);
  const loading = useSelector(selectLoading);
  const handleChange = (page: number) => {
    setPage(page);
  };
  return (
    <div className="flex flex-col gap-y-3">
      <div className="grid grid-cols-1 gap-y-3">
        {loading ? (
          <div className="flex justify-center mb-4">
            <Spinner color="#FF6636" />
          </div>
        ) : (
          <>
            {course.listData.map((item: any, index: any) => (
              <Course key={item._id} item={item} />
            ))}
          </>
        )}
      </div>
      {/* <Pagination /> */}
      <div>
        <PagiantionNew
          onPageChange={handleChange}
          totalCount={course?.total}
          pageSize={10}
          siblingCount={1}
          currentPage={page}
        />
      </div>
    </div>
  );
};

export default Courses;
