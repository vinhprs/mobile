import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div>
      <div className="w-full h-[600px]">
        <ReactPlayer
          className="w-full h-full"
          controls
          width="100%"
          height="100%"
          loop={true}
          muted={true}
          playing={true}
          url="https://www.youtube.com/watch?v=M-O070P2v6g&list=RDxrfiwHVL7xc&index=13"
        />
      </div>
    </div>
  );
};

export default Video;
