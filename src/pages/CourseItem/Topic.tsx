import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import {MdOndemandVideo,MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowUp} from "react-icons/md"
const Topic = () => {
  return (
    <div className='flex flex-col gap-3'>
        <div>
            <div className='flex gap-x-2 items-center text-[14px]'>
                <h1>7 chuyên đề</h1>
                <div className='w-1 h-1 rounded-full bg-[#61677A]'></div>
                <h1>43 bài giảng</h1>
                <div className='w-1 h-1 rounded-full bg-[#61677A]'></div>
                <h1>Tổng thời lượng: 2h 59m</h1>
            </div>
        </div>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem >
                <h2 className='bg-[#bfc0c2]'>
                    <AccordionButton>
                        <div className='flex items-center gap-x-2 w-full'>
                            <AccordionIcon />
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                        </div>
                        <div className='flex gap-x-2 items-center text-[14px] w-full justify-end'>
                            <h1>2 bài giảng</h1>
                            <div className='w-1 h-1 rounded-full bg-[#61677A]'></div>
                            <h1>5 phút</h1>
                        </div>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <MdOndemandVideo/>
                                <span>Video 1: Chứng minh vuông góc</span>
                            </div>
                            <span className='text-[14px] text-[#61677A]'>00:03</span>
                        </div>
                    </div>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem >
                <h2 className='bg-[#bfc0c2]'>
                    <AccordionButton>
                        <div className='flex items-center gap-x-2 w-full'>
                            <AccordionIcon />
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                        </div>
                        <div className='flex gap-x-2 items-center text-[14px] w-full justify-end'>
                            <h1>2 bài giảng</h1>
                            <div className='w-1 h-1 rounded-full bg-[#61677A]'></div>
                            <h1>5 phút</h1>
                        </div>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default Topic