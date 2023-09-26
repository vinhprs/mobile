import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import ListVideoChapter from "./ListVideoChapter";
const VideoCourseList = () => {
  return (
    <Accordion className="h-full" allowMultiple>
      <AccordionItem>
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
          <ListVideoChapter code="65466464" />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
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
      </AccordionItem>
    </Accordion>
  );
};

export default VideoCourseList;
