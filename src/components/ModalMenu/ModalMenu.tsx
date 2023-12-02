import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { navbar } from "../../dummydata/dummydata";
import DropdownNavbar from "../DropdownNavbar/DropdownNavbar";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appHooks";
import { getCategory } from "../../store/actions/user.action";
const ModalMenu = ({ isOpen, onClose, drawerRef }: any) => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState<any>([]);
  const getCategorySidebar = async () => {
    const res: any = await dispatch(getCategory({}));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      setCategory(res?.payload.data);
    }
  };
  useEffect(() => {
    getCategorySidebar();
  }, []);
  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      finalFocusRef={drawerRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Link to="courses" onClick={() => onClose()}>
            Danh mục khóa học
          </Link>
        </DrawerHeader>
        <DrawerBody>
          {category?.map((item: any, index: number) => (
            <DropdownNavbar item={item} key={item?._id} onClose={onClose} />
          ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalMenu;
