import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CommentVideoCourse from './CommentVideoCourse';
import Assignments from './Assignments';
import Notes from './Notes';
import { useLocation } from 'react-router-dom';
const TabOption = ({ courseDetail }: any) => {
  return (
    <div>
      <Tabs variant="colorful" border="none">
        <TabList>
          <Tab>Bình luận</Tab>
          <Tab>Bài tập</Tab>
          <Tab>Ghi chú</Tab>
        </TabList>

        <TabPanels p={0}>
          <TabPanel>
            <CommentVideoCourse />
          </TabPanel>
          <TabPanel>
            <Assignments courseDetail={courseDetail} />
          </TabPanel>
          <TabPanel>
            <Notes />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabOption;
