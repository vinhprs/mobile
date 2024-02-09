import React from 'react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { PiMonitorPlayFill } from 'react-icons/pi';
import { Link, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/appHooks';
import {
  updateCommentList,
  updatePage,
} from '../../store/reducers/commentSlice';
const ListVideoChapter = ({ id, code, lecture, index,slug }: any) => {
  const pathname = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log(
    '🚀 ~ file: ListVideoChapter.tsx:7 ~ ListVideoChapter ~ pathname:',
    pathname
  );
  const handleOnClick = () => {
    dispatch(updateCommentList([]));
    dispatch(updatePage(1));
    setTimeout(() => {
      navigate(`${pathname.pathname}?idLecture=${id}&slug=${slug}`);
    }, 500);
  };
  return (
    <button
      disabled={true}
      onClick={handleOnClick}
      className="grid grid-cols-[20px_1fr] gap-x-3 hover:bg-[#D8D9DA] p-4 cursor-pointer text-left"
    >
      <AiOutlinePlayCircle className="text-[20px] mt-[0.5px]" />
      <div className="flex flex-col gap-y-2">
        <div>
          <span>{index + 1}.</span>
          <span>{lecture?.lectureName}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <PiMonitorPlayFill className="text-[20px]" />
          <div>
            <p>Tài liệu</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ListVideoChapter;
