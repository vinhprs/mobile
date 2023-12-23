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
  useToast,
} from "@chakra-ui/react";
import { IoPersonOutline } from "react-icons/io5";
import course from "../../../image/Course/CourseImages.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { formatMoney } from "../../../utils/lib";
import { useAppDispatch } from "../../../hooks/appHooks";
import { updatePublicCourse } from "../../../store/actions/course.action";
import { useNavigate } from "react-router-dom";

const Course = ({ item, getTeacherCourseData }: any) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("...");
  const dispatch = useAppDispatch();
  const toast = useToast();
  const publicItem = async (isPublic: boolean) => {
    const payload = {
      courseId: item?._id,
      isPublic: !isPublic,
    };
    const res: any = await dispatch(updatePublicCourse(payload));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      toast({
        title: "Thành công",
        description: res?.payload?.message,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      setTimeout(() => {
        getTeacherCourseData({});
      }, 500);
    }
  };
  return (
    <div className="max-w-[315px] h-fit w-full">
      <img
        src={item.thumbnail_url ? item.thumbnail_url : course}
        alt=""
        className="w-full h-[240px]"
      />
      <div className="py-[16px] px-[18px] bg-white flex flex-col divide-y-2">
        <div className="flex flex-col gap-y-[8px] py-[16px]">
          <div className="flex gap-x-2">
            <div className="w-fit uppercase px-[6px] py-[4px] text-[10px] bg-[#EBEBFF] text-[#342F98] font-medium">
              {item.category.categoryName}
            </div>
            <div className={`w-fit uppercase px-[6px] py-[4px] text-[10px]  ${item.isPublic ? "bg-[#FF6636] text-white" : "text-[#342F98] bg-[#EBEBFF]"} font-medium`}>
              {item.isPublic
                ? "Đã đăng tải khóa học"
                : "Chưa đăng tải khóa học"}
            </div>
          </div>
          <h1 className="text-[#1D2026] font-medium line-clamp-1">
            {item.courseName}
          </h1>
        </div>
        <div className="py-[16px]">
          <div className="flex gap-x-[4px] items-center">
            <IoPersonOutline className="text-[18px] text-[#564FFD]" />
            <span className="text-[14px] text-[#4E5566] ">
              982,568 <span className="text-[#8C94A3]">học viên</span>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center py-[16px]">
          <span className="text-[#FF6636] font-semibold">
            {formatMoney(item?.price)} VND
          </span>
          <div>
            <Menu>
              <MenuButton
                p={0}
                bg="none"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                fontSize="14px"
                color="#6E7485"
                as={Button}
              >
                {menu}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate(`${item?._id}`)}>
                  Xem chi tiết khóa học
                </MenuItem>
                <MenuItem>Cập nhập khóa học</MenuItem>
                <MenuItem>Xóa khóa học</MenuItem>
                <MenuItem onClick={() => publicItem(item?.isPublic)}>
                  Đăng tải khóa học
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
