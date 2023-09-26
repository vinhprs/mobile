import React from "react";
import Video from "./Video";
import TabOption from "./TabOption";
import VideoCourseList from "./VideoCourseList";

const VideoCourse = () => {
  return (
    <div className="pt-[100px] pb-[60px] px-[24px] text-[#272829]">
      <div className="grid grid-cols-[1fr_350px]">
        <div className="flex flex-col gap-y-2">
          <Video />
          <TabOption />
        </div>
        <div className="h-[600px] overflow-y-scroll">
          <VideoCourseList />
        </div>
      </div>
    </div>
  );
};

export default VideoCourse;
