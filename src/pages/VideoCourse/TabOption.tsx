import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CommentVideoCourse from "./CommentVideoCourse";
import Assignments from "./Assignments";
import Notes from "./Notes";
const TabOption = () => {
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
            <Assignments />
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
