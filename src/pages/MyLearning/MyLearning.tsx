import React from 'react';
import { BsThreeDotsVertical, BsPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Mycourse from './Mycourse';
import CourseList from '../Homepage/CourseList';
import { useSelector } from 'react-redux';
import { selectCourseTab } from '../../store/reducers/courseTabSlice';
const MyLearning = () => {
  const courseTab = useSelector(selectCourseTab);
  return (
    <div className="pt-[100px] pb-[60px]">
      <div className="bg-[#272829] text-white h-[150px] flex items-center">
        <div className="max-w-[1000px] w-full mx-auto">
          <h1 className="text-3xl font-semibold">Khóa học của tôi</h1>
        </div>
      </div>
      <div className="max-w-[1000px] w-full mx-auto mt-6">
        <Tabs index={courseTab}>
          <TabList>
            <Tab>Khóa học của tôi</Tab>
            <Tab>Khóa học yêu thích</Tab>
          </TabList>

          <TabPanels p={0}>
            <TabPanel pl={0}>
              <div className="grid grid-cols-4 gap-x-4 gap-y-5">
                <Mycourse />
                <Mycourse />
                <Mycourse />
                <Mycourse />
                <Mycourse />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-4 gap-x-4 gap-y-5">
                <CourseList />
                <CourseList />
                <CourseList />
                <CourseList />
                <CourseList />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default MyLearning;
