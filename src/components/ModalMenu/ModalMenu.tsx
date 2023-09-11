import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { navbar } from '../../dummydata/dummydata'
import DropdownNavbar from '../DropdownNavbar/DropdownNavbar'
import { Link } from 'react-router-dom'
const ModalMenu = ({isOpen, onClose, drawerRef}:any) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} finalFocusRef={drawerRef}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>
                <Link to="courses" onClick={()=>onClose()}>Danh mục khóa học</Link>
            </DrawerHeader>
            <DrawerBody>
                {navbar.map((item,index)=>(
                    <DropdownNavbar item={item} key={item.id} onClose={onClose}/>
                ))}
            </DrawerBody>
        </DrawerContent>
    </Drawer>
  )
}

export default ModalMenu