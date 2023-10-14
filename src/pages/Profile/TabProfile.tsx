import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import CoursesList from "./CoursesList";
import Message from "./Message";
import Teachers from "./Teachers";
import Favorite from "./Favorite";
import Transaction from "./Transaction";
import Settings from "./Settings";
const TabProfile = () => {
  return (
    <div>
      <Tabs>
        <TabList display="flex" justifyContent="space-between">
          <Tab>Dashboard</Tab>
          <Tab>Khóa học</Tab>
          <Tab>Tin nhắn</Tab>
          <Tab>Giáo viên</Tab>
          <Tab>Yêu thích</Tab>
          <Tab>Giao dịch</Tab>
          <Tab>Tài khoản</Tab>
        </TabList>

        <TabPanels p={0}>
          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <CoursesList />
          </TabPanel>
          <TabPanel>
            <Message />
          </TabPanel>
          <TabPanel>
            <Teachers />
          </TabPanel>
          <TabPanel>
            <Favorite />
          </TabPanel>
          <TabPanel>
            <Transaction />
          </TabPanel>
          <TabPanel>
            <Settings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabProfile;
