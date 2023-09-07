import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const DropdownNavbar = ({item}:any) => {
  return (
    <Accordion allowToggle>
        <AccordionItem border="none">
            <h2>
                <AccordionButton>
                    <Link to="" className='flex-1 text-left'>
                        Lớp {item.class}
                    </Link>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} className='flex flex-col gap-y-3'>
                {item.subject.map((itemSubject:any)=>(
                    <Link to="" key={itemSubject.id} className='px-4 py-3'>
                        <div>{itemSubject.name}</div>
                    </Link>
                ))}
            </AccordionPanel>
        </AccordionItem>
    </Accordion>
  )
}

export default DropdownNavbar