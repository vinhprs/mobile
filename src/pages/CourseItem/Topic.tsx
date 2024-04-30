import React, { useEffect, useMemo } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import {
  MdOndemandVideo,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import moment from 'moment';
import { timeLecture } from '../../utils/lib';
import ReactPlayer from 'react-player';
const Topic = ({ courseDetail,isShow }: any) => {
  const sumLecture = useMemo(() => {
    let sum = 0;
    let time = 0;
    courseDetail?.sections?.map((item: any) => {
      sum += item?.lectures?.length;
      item?.lectures?.map((itemLec: any) => {
        time += itemLec?.duration;
      });
    });

    return sum;
  }, []);
  const sumTimeLecture = useMemo(() => {
    let time = 0;
    courseDetail?.sections?.map((item: any) => {
      item?.lectures?.map((itemLec: any) => {
        time += itemLec?.duration;
      });
    });

    return time;
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex gap-x-2 items-center text-[14px]">
          <h1>{courseDetail?.sections?.length} chuyên đề</h1>
          <div className="w-1 h-1 rounded-full bg-[#61677A]"></div>
          <h1>{sumLecture} bài giảng</h1>
          <div className="w-1 h-1 rounded-full bg-[#61677A]"></div>
          <h1>
            Tổng thời lượng:{' '}
            {moment.duration(sumTimeLecture, 'minutes').asHours().toFixed(0)}{' '}
            giờ
          </h1>
        </div>
      </div>
      <Accordion defaultIndex={[0]} allowMultiple>
        {courseDetail?.sections?.map((section: any, indexSec: any) => (
          <AccordionItem key={section._id}>
            <h2 className="bg-[#FF6636] text-white">
              <AccordionButton display="flex">
                <div className="flex items-center gap-x-2 w-full">
                  <AccordionIcon />
                  <Box as="span" flex="1" textAlign="left">
                    {section.sectionName}
                  </Box>
                </div>
                <div className="flex gap-x-2 items-center text-[14px] w-full justify-end">
                  <h1>{section.lectures.length} bài giảng</h1>
                  <div className="w-1 h-1 rounded-full bg-[#ffffff]"></div>
                  <h1>
                    {moment
                      .duration(timeLecture(section?.lectures), 'minutes')
                      .asHours()
                      .toFixed(0)}{' '}
                    giờ
                  </h1>
                </div>
              </AccordionButton>
            </h2>
            {section?.lectures?.map((lecture: any, indexLec: any) => (
              <AccordionPanel pb={4} key={indexLec}>
                <div>
                  <div className="flex items-center justify-between gap-x-2">
                    <div className="flex items-center gap-x-5">
                      <MdOndemandVideo />
                      <span>{lecture.lectureName}</span>
                    </div>
                    <span className="text-[14px] text-[#61677A] w-[100px] text-end">
                      {moment
                        .duration(lecture.duration, 'minutes')
                        .asHours()
                        .toFixed(0)}
                      h :
                      {moment
                        .duration(lecture.duration, 'minutes')
                        .minutes()
                        .toFixed(0)}
                      m
                    </span>
                  </div>
                </div>
              </AccordionPanel>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Topic;
