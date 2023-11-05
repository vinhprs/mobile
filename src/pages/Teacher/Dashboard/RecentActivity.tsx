import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
const RecentActivity = () => {
  const [menu, setMenu] = useState("Hôm nay");
  const handleSetmenu = (menu: string) => {
    setMenu(menu);
  };
  return (
    <div className="max-w-[430px] w-full bg-white flex flex-col gap-y-[16px]">
      <div className="flex justify-between px-[20px] py-[16px] items-center border-b-[1px] shadow-[0px_-1px_0px_0px_#E9EAF0]">
        <span className="text-[#1D2026] text-[16px] font-normal ">
          Hoạt động gần đây
        </span>
        <Menu>
          <MenuButton
            p={0}
            bg="none"
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            fontSize="14px"
            color="#6E7485"
            as={Button}
            rightIcon={<MdOutlineKeyboardArrowDown />}
          >
            {menu}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSetmenu("Hôm nay")}>
              Hôm nay
            </MenuItem>
            <MenuItem onClick={() => handleSetmenu("Hôm qua")}>
              Hôm qua
            </MenuItem>
            <MenuItem onClick={() => handleSetmenu("Hôm kia")}>
              Hôm kia
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div>
        <div className="px-[20px] py-[12px] flex gap-x-[12px]">
          <div className="max-w-[30px] w-full h-[30px] rounded-full bg-[#FF6636] flex justify-center items-center">
            <AiOutlineMessage className="text-[18px] text-white" />
          </div>
          <div className="flex flex-col gap-y-[4px]">
            <span className="text-[#1D2026] text-[14px]">
              Kevin comments on your lecture “What is ux” in “2021 ui/ux design
              with figma”
            </span>
            <span className="text-[#8C94A3] text-[12px]">Just now</span>
          </div>
        </div>
        <div className="px-[20px] py-[12px] flex gap-x-[12px]">
          <div className="max-w-[30px] w-full h-[30px] rounded-full bg-[#FF6636] flex justify-center items-center">
            <AiOutlineMessage className="text-[18px] text-white" />
          </div>
          <div className="flex flex-col gap-y-[4px]">
            <span className="text-[#1D2026] text-[14px]">
              Kevin comments on your lecture “What is ux” in “2021 ui/ux design
              with figma”
            </span>
            <span className="text-[#8C94A3] text-[12px]">Just now</span>
          </div>
        </div>
        <div className="px-[20px] py-[12px] flex gap-x-[12px]">
          <div className="max-w-[30px] w-full h-[30px] rounded-full bg-[#FF6636] flex justify-center items-center">
            <AiOutlineMessage className="text-[18px] text-white" />
          </div>
          <div className="flex flex-col gap-y-[4px]">
            <span className="text-[#1D2026] text-[14px]">
              Kevin comments on your lecture “What is ux” in “2021 ui/ux design
              with figma”
            </span>
            <span className="text-[#8C94A3] text-[12px]">Just now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
