import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCommentCourse } from '../../store/reducers/commentSlice';
import { useParams } from 'react-router-dom';
import { getCommentsCourse } from '../../store/actions/comment.action';
import { useAppDispatch } from '../../hooks/appHooks';
import { convertTimeToAgo } from '../../utils/lib';
import ReactStars from 'react-rating-stars-component';
import SunEditor from 'suneditor-react';
import { buttonList } from '../../utils/type';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Button } from '@chakra-ui/react';
const Comment = () => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  const [valuesDesc, setValuesDesc] = useState('');
  const [rate, setRate] = useState(0);
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  const { idcourse } = useParams();
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const ratingChanged = (newRating:any) => {
    setRate(newRating);
  };
  
  const commentCourse = useSelector(selectCommentCourse);
  console.log(
    '🚀 ~ file: Comment.tsx:13 ~ Comment ~ commentCourse:',
    commentCourse
  );
  const getCommentCourseItem = async (id: any, page: number) => {
    const payload = new URLSearchParams({
      limit: '27',
      page: page.toString(),
    });
    const payloadItem = {
      courseId: Number(id),
      queryParam: payload,
    };
    const res = await dispatch(getCommentsCourse(payloadItem));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) { /* empty */ }
  };
  const handleChange = ()=>{
    
  };
  useEffect(() => {
    if (idcourse) {
      getCommentCourseItem(idcourse, page);
    }
  }, [idcourse, page]);
  return (
    <div className="flex flex-col gap-y-3">
      {commentCourse.listData.length === 0 ? (
        <div>Không có bình luận nào</div>
      ):(
        <>
          <div>

            {commentCourse.listData
              .slice(0, 28)
              .map((comment: any, index: number) => (
                <div key={comment?._id}>
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
          {/* <div>
            <h1 className='text-[20px] font-semibold text-[#FF6636]'>Đánh giá khoá học</h1>
            <div>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <div>
              <SunEditor
                setOptions={{
                  katex:katex,
                  buttonList: buttonList,
                }}
                defaultValue={valuesDesc}
                onChange={handleChange}
                getSunEditorInstance={getSunEditorInstance}
                height=""
                width="100%"
              />
            </div>
            <Button
              marginTop="20px"
              color="white"
              bg="#FF6636"
              _hover={{ bg: '#fe6131' }}
              // onClick={handleNavigate}
            >
              Đánh gía
            </Button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Comment;
