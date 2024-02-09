import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { BiSolidLayer } from 'react-icons/bi';
import { MdContentPaste, MdOutlineOndemandVideo } from 'react-icons/md';
import { RiVideoUploadFill } from 'react-icons/ri';
import BasicInformation from './BasicInformation';
import { useSelector } from 'react-redux';
import {
  selectCreateCourse,
  selectIndexCreateStep,
  updateIndex,
} from '../../../store/reducers/createCourseSlice';
import { useAppDispatch } from '../../../hooks/appHooks';
import AdvanceInformation from './AdvanceInformation';
import VideoCreateCourses from './VideoCreateCourses';
import PublishCourse from './PublishCourse';
const TabCreateCourse = () => {
  const dispatch = useAppDispatch();
  const selectTabCourse = useSelector(selectCreateCourse);
  const selectIndex = useSelector(selectIndexCreateStep);
  const onClickIndex = (id: number) => {
    dispatch(updateIndex(id));
  };
  return (
    <div>
      <Tabs bg="white" index={selectIndex}>
        <TabList>
          <Tab
            isDisabled={selectTabCourse?.includes(0) ? false : true}
            onClick={() => onClickIndex(0)}
          >
            <div className="text-[#1D2026] flex items-center gap-x-2">
              <BiSolidLayer className="text-[20px]" />
              <span className="text-[16px] font-normal">Thông tin cơ bản</span>
            </div>
          </Tab>
          <Tab
            isDisabled={selectTabCourse?.includes(1) ? false : true}
            onClick={() => onClickIndex(1)}
          >
            <div className="text-[#1D2026] flex items-center gap-x-2">
              <MdContentPaste className="text-[20px]" />
              <span className="text-[16px] font-normal">
                Thông tin nâng cao
              </span>
            </div>
          </Tab>
          <Tab
            isDisabled={selectTabCourse?.includes(2) ? false : true}
            onClick={() => onClickIndex(2)}
          >
            <div className="text-[#1D2026] flex items-center gap-x-2">
              <MdOutlineOndemandVideo className="text-[20px]" />
              <span className="text-[16px] font-normal">Video khóa học</span>
            </div>
          </Tab>
          <Tab
            isDisabled={selectTabCourse?.includes(3) ? false : true}
            onClick={() => onClickIndex(3)}
          >
            <div className="text-[#1D2026] flex items-center gap-x-2">
              <RiVideoUploadFill className="text-[20px]" />
              <span className="text-[16px] font-normal">Đăng tải khóa học</span>
            </div>
          </Tab>
        </TabList>

        <TabPanels p="0">
          <TabPanel p="0">
            <BasicInformation />
          </TabPanel>
          <TabPanel p="0">
            <AdvanceInformation />
          </TabPanel>
          <TabPanel p="0">
            <VideoCreateCourses />
          </TabPanel>
          <TabPanel p="0">
            <PublishCourse />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabCreateCourse;
