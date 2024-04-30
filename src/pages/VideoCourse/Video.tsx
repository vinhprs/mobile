import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom';
import VideoAndQuizz from './VideoAndQuizz';

const Video = ({ courseDetail }: any) => {
  const [type, setType] = useState<any>([]);
  const search = useLocation().search;
  const paramsLecture = new URLSearchParams(search).get('slug');
  useEffect(() => {
    if (paramsLecture) {
      const newArrayType = courseDetail?.sections?.map((section: any) => {
        return section?.lectures?.filter(
          (lecture: any) => lecture?.slug === paramsLecture
        );
      });
      setType(newArrayType?.sort((a: any, b: any) => b.length - a.length)[0]);
    }
  }, [courseDetail?.sections, paramsLecture]);
  return (
    <div>
      {paramsLecture ? (
        <VideoAndQuizz/>
        // <div className="w-full h-full lg:h-[600px]">
          
      //   <ReactPlayer
      //     onProgress={(duration)=>{
              
      //       setPlayed(Math.floor(duration.playedSeconds));
      //     }}
      //     ref={videoRef}
      //     className="w-full h-full"
      //     controls
      //     width="100%"
      //     height="100%"
      //     loop={true}
      //     muted={true}
      //     playing={isPause}
      //     config={{
      //       file: {
      //         attributes: {
      //           crossOrigin: 'true',
      //         },
      //       },
      //     }}
      //     url={[
      //       `https://staging.primeedu.io.vn/api/v1/course/lecture/${paramsLecture}`,
      //     ]}
      //   />
      // </div>
      ) : (
        <div className="h-[600px] w-full overflow-hidden">
          <div className="relative">
            <div className="card absolute top-[30%] translate-y-[-30%] left-[20px] max-w-[500px] w-full px-5 py-3">
              <div className="text-white flex flex-col gap-y-2">
                <h1 className="text-[25px] font-semibold">
                  {courseDetail?.courseName}
                </h1>
                <p className="text-[14px] italic">
                  {courseDetail?.description}
                </p>
                <Link
                  to={''}
                  className="text-[14px] px-[16px] py-[8px] bg-white w-fit text-[#FF6636] hover:bg-[#FF6636] hover:text-white transition-all duration-150 ease-in-out"
                >
                  Bắt đầu học
                </Link>
              </div>
            </div>
            <img
              src={courseDetail?.thumbnail_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
