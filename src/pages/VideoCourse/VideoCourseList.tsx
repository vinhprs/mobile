import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import ListVideoChapter from './ListVideoChapter';
import { timeLecture } from '../../utils/lib';
const VideoCourseList = ({ courseDetail }: any) => {
  return (
    <Accordion className="h-full" allowMultiple>
      {courseDetail?.sections?.map((section: any, index: any) => (
        <AccordionItem key={section?._id}>
          <div>
            <AccordionButton flexDirection="column" alignItems="start" w="100%">
              <Box
                flex="1"
                className="flex items-center justify-between w-full"
              >
                <Box
                  as="span"
                  textAlign="left"
                  fontFamily="16px"
                  fontWeight={600}
                >
                  {section?.sectionName}
                </Box>
                <AccordionIcon />
              </Box>
              <div className="text-[13px]">
                <span>
                  0/{section?.lectures.length} |{' '}
                  {timeLecture(section?.lectures)} phút
                </span>
              </div>
            </AccordionButton>
          </div>
          <AccordionPanel p={0}>
            {section?.lectures?.map((lecture: any, indexLec: any) => (
              <ListVideoChapter
                id={lecture?._id}
                code={lecture?.url}
                lecture={lecture}
                key={lecture?._id}
                index={indexLec}
                slug={lecture?.slug}
              />
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}

      {/* <AccordionItem>
        <div>
          <AccordionButton flexDirection="column" alignItems="start" w="100%">
            <Box flex="1" className="flex items-center justify-between w-full">
              <Box
                as="span"
                textAlign="left"
                fontFamily="16px"
                fontWeight={600}
              >
                Chương 1: Giới thiệu
              </Box>
              <AccordionIcon />
            </Box>
            <div className="text-[13px]">
              <span>0/5 | 26 phút</span>
            </div>
          </AccordionButton>
        </div>
        <AccordionPanel p={0}>
          <ListVideoChapter code="jasdkasdasj" />
        </AccordionPanel>
      </AccordionItem> */}
    </Accordion>
  );
};

export default VideoCourseList;
