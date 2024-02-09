import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { course } from '../../dummydata/dummydata';
import TabCourseItem from './TabCourseItem';
const TabCourses = () => {
  return (
    <Tabs variant="colorful">
      <TabList>
        {course.map((item, index) => (
          <Tab key={item.id}>{item.name}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {course.map((item, index) => (
          <TabPanel key={item.id}>
            <TabCourseItem />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabCourses;
