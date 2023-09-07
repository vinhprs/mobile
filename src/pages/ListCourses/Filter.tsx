import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
const Filter = () => {
  return (
    
    <Accordion allowMultiple>
        <AccordionItem >
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        Thời lượng video
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='flex flex-col'>
                <Checkbox colorScheme="purple" value="">0 - 1 tiếng <span>(614)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">1 - 3 tiếng <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">3 - 6 tiếng <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">6 - 17 tiếng <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">17+ tiếng <span>(59)</span></Checkbox>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem >
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        Tính năng
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='flex flex-col'>
                <Checkbox colorScheme="purple" value="">Bài tập <span>(614)</span></Checkbox>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem >
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                        Chủ đề
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='flex flex-col'>
                <Checkbox colorScheme="purple" value="">Toán <span>(614)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Vật Lý <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Hóa học <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Sinh học <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Ngữ văn <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Tiếng anh <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Lịch sử <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Địa lý <span>(59)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Giáo dục công dân <span>(59)</span></Checkbox>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem >
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontWeight={600}>
                       Giá
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='flex flex-col'>
                <Checkbox colorScheme="purple" value="">Free <span>(614)</span></Checkbox>
                <Checkbox colorScheme="purple" value="">Paid <span>(59)</span></Checkbox>
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
  )
}

export default Filter