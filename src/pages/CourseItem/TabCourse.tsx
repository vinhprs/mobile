import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Topic from './Topic'
import Comment from './Comment'
import AnotherCourse from './AnotherCourse'
const TabCourse = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Chuyên đề</Tab>
          <Tab>Cảm nhận</Tab>
          <Tab>Các khóa học liên quan</Tab>
        </TabList>

        <TabPanels p={0}>
          <TabPanel>
            <Topic/>
          </TabPanel>
          <TabPanel>
            <Comment/>
          </TabPanel>
          <TabPanel>
            <AnotherCourse/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default TabCourse