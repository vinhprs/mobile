import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCommentCourse } from "../../store/reducers/commentSlice";
import { useParams } from "react-router-dom";
import { getCommentsCourse } from "../../store/actions/comment.action";
import { useAppDispatch } from "../../hooks/appHooks";
import { convertTimeToAgo } from "../../utils/lib";

const Comment = () => {
  const { idcourse } = useParams();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const commentCourse = useSelector(selectCommentCourse);
  console.log(
    "🚀 ~ file: Comment.tsx:13 ~ Comment ~ commentCourse:",
    commentCourse
  );
  const getCommentCourseItem = async (id: any, page: number) => {
    const payload = new URLSearchParams({
      limit: "27",
      page: page.toString(),
    });
    const payloadItem = {
      courseId: Number(id),
      queryParam: payload,
    };
    const res = await dispatch(getCommentsCourse(payloadItem));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
    }
  };
  useEffect(() => {
    if (idcourse) {
      getCommentCourseItem(idcourse, page);
    }
  }, [idcourse, page]);
  return (
    <div className="flex flex-col gap-y-3">
      {commentCourse.listData
        .slice(0, 28)
        .map((comment: any, index: number) => (
          <div>
            <div className="grid grid-cols-[50px_1fr] gap-x-2" key={index}>
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={comment?.authorThumbnail}
                  alt=""
                />
              </div>
              <div>
                <span className="font-medium text-[16px] text-[#1D2026]">
                  {comment?.author}
                </span>
                <p className="text-[14px] text-[#4E5566]">{comment?.content}</p>
              </div>
            </div>
            <span className="text-[14px]">
              {convertTimeToAgo(comment?.createdAt)}
            </span>
          </div>
        ))}
    </div>
  );
};

export default Comment;
