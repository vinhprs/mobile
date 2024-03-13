import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Dashboard from './Dashboard';
import CoursesList from './CoursesList';
import Message from './Message';
import Teachers from './Teachers';
import Favorite from './Favorite';
import Cart from './Cart';
import Settings from './Settings';
import { useLocation, useNavigate } from 'react-router-dom';
const TabProfile = () => {
  const navigation = useNavigate();
  const pathnanme = useLocation(); 
  const onClickTabs = ()=>{
    navigation(`${pathnanme.pathname}`);
  };
  return (
    <div>
      <Tabs>
        <TabList display="flex" justifyContent="space-between">
          <Tab onClick={onClickTabs}>Dashboard</Tab>
          <Tab onClick={onClickTabs}>Khóa học</Tab>
          <Tab onClick={onClickTabs}>Tin nhắn</Tab>
          <Tab onClick={onClickTabs}>Giáo viên</Tab>
          <Tab onClick={onClickTabs}>Yêu thích</Tab>
          {/* <Tab>Giỏ hàng</Tab> */}
          <Tab onClick={onClickTabs}>Tài khoản</Tab>
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
          {/* <TabPanel>
            <Cart />
          </TabPanel> */}
          <TabPanel>
            <Settings />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabProfile;
