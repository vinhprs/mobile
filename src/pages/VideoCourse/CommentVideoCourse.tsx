/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from 'react';
import { Button, Textarea, useToast } from '@chakra-ui/react';
import Comment from './Comment';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/appHooks';
import { getComments, postComment } from '../../store/actions/comment.action';
import { useSelector } from 'react-redux';
import {
  selectCommentLecture,
  selectCommentList,
  selectPageComment,
  updateCommentList,
  updatePage,
} from '../../store/reducers/commentSlice';

const CommentVideoCourse = () => {
  const comment = useSelector(selectCommentList);
  const page = useSelector(selectPageComment);
  const [valueComment, setValueComment] = useState('');
  const toast = useToast();
  const [loadingPost, setLoadingPost] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);
  // const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const search = useLocation().search;
  const params = new URLSearchParams(search).get('idLecture');
  console.log(
    '🚀 ~ file: CommentVideoCourse.tsx:14 ~ CommentVideoCourse ~ params:',
    params
  );
  const commentsLecture: any = useSelector(selectCommentLecture);
  // const [comment, setComment] = useState<any>([]);
  console.log(
    '🚀 ~ file: CommentVideoCourse.tsx:16 ~ CommentVideoCourse ~ comment:',
    comment
  );
  const getComment = async (page: number, params: string) => {
    const payload = new URLSearchParams({
      limit: '5',
      page: page.toString(),
    });
    const payloadParam = {
      lectureId: params,
      queryParam: payload,
    };
    const res: any = await dispatch(getComments(payloadParam));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      if (loadingComment) {
        dispatch(updateCommentList(res?.payload?.data?.listData));
      } else {
        dispatch(
          updateCommentList([...comment, ...res?.payload?.data?.listData])
        );
      }
      setLoadingPost(false);
    }
  };
  const postCommentItem = async () => {
    const payload = {
      lectureId: Number(params),
      content: valueComment,
    };
    const res: any = await dispatch(postComment(payload));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      toast({
        title: res?.payload.message,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setValueComment('');
      setTimeout(() => {
        if (params) {
          dispatch(updateCommentList([...[res?.payload?.data],...comment]));
          setLoadingPost(false);

        }
      }, 500);
    }
  };
  const handlePost = () => {
    setLoadingPost(true);
    postCommentItem();
  };
  useEffect(() => {
    if (params) {
      console.log('hekllo');

      // setComment([]);
      getComment(page, params);
    }
  }, [page, params]);
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-semibold text-xl">Bình luận của bạn</h1>
        <Textarea
          value={valueComment}
          onChange={(e) => setValueComment(e.target.value)}
          placeholder="Bình luận của bạn ..."
        />
        <Button
          textColor="white"
          w="fit-content"
          bg="#FF6636"
          _hover={{
            bg: '#ff511c',
          }}
          onClick={handlePost}
          isLoading={loadingPost}
        >
          Đăng
        </Button>
      </div>
      <h1 className="font-semibold text-xl">
        Tất cả câu hỏi trong khóa học này{' '}
        <span className="text-[#ACADAE]">({comment.length})</span>
      </h1>
      <div className="mx-4">
        <div className="flex flex-col gap-y-3 mb-5">
          {comment?.map((item: any, index: any) => (
            <Comment item={item} key={index}/>
          ))}
        </div>
        {page < commentsLecture.totalPage && (
          <button
            onClick={() => dispatch(updatePage(page + 1))}
            className="w-full px-2 py-4 bg-[#FF6636] text-white rounded-xl"
          >
            Xem thêm ...
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentVideoCourse;
