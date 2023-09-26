import React from "react";
import Comment from "./Comment";

const CommentVideoCourse = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="font-semibold text-xl">
        Tất cả câu hỏi trong khóa học này{" "}
        <span className="text-[#ACADAE]">(4215)</span>
      </h1>
      <div className="mx-4">
        <div className="flex flex-col gap-y-3 mb-5">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        <button className="w-full px-2 py-4 bg-[#61677A] text-white rounded-xl">
          Xem thêm ...
        </button>
      </div>
    </div>
  );
};

export default CommentVideoCourse;
