import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/appHooks';
import { useSelector } from 'react-redux';
import { selectQuizLectureList, updateQuizId } from '../../store/reducers/quizSlice';
import { getQuizzByLecture } from '../../store/actions/quiz.action';
import { TbRuler } from 'react-icons/tb';
import QuizVideo from './QuizVideo';
import { LocalStorage } from '../../utils/LocalStorage';

const VideoAndQuizz = () => {
  const search = useLocation().search;
  const videoRef: any = useRef(null);
  const [played, setPlayed] = useState(0);
  console.log('🚀 ~ VideoAndQuizz ~ played:', played);
  const [isPause, setIsPause] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const paramsLecture = new URLSearchParams(search).get('slug');
  const idLecture = new URLSearchParams(search).get('idLecture');
  const quizLectureList:any = useSelector(selectQuizLectureList);
  const getQuizLectureList = async(id:any)=>{
    const res = await dispatch(getQuizzByLecture(id));
    setIsLoading(true);
    if(res.meta.requestStatus === 'fulfilled'){
      setIsLoading(true);
    }
  };
  useEffect(()=>{
    getQuizLectureList(idLecture);
    
  },[]);
  return (
    <div>
      <div className="w-full h-full lg:h-[600px] relative">
        
        <>
          {quizLectureList?.map((item:any,index:number)=>(
            <QuizVideo played={played} key={item?._id} item={item} setIsPause={setIsPause} isPause={isPause} quizList={quizLectureList} videoRef={videoRef}/>
          ))}
        </>
    
     
        <ReactPlayer
          onProgress={(duration)=>{
            setPlayed(Math.floor(duration.playedSeconds));
          }}
          ref={videoRef}
          progressInterval={123}
          className="w-full h-full"
          controls
          width="100%"
          height="100%"
          loop={true}
          muted={true}
          playing={isPause}
          
          config={{
            file: {
              attributes: {
                crossOrigin: 'true',
              },
            },
          }}
          url={[
            `https://staging.primeedu.io.vn/api/v1/course/lecture/${paramsLecture}`,
          ]}
        />
        
      </div>
    </div>
  );
};

export default VideoAndQuizz;