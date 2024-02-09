import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TitleUpdateExam from './TitleUpdateExam';
import ExamUpdate from './ExamUpdate';
import ExamDetail from './ExamDetail';
import { useSelector } from 'react-redux';
import { selectExam, selectExamTemp } from '../../../store/reducers/examSlice';
interface TabUpdateProps {
  item: any;
}
const TabUpdate = ({ item }: TabUpdateProps) => {
  const exam = useSelector(selectExamTemp);
  return (
    <Tabs bg="white">
      <TabList>
        <Tab>Thông tin đề thi</Tab>
        <Tab>Câu hỏi và câu trả lời</Tab>
        <Tab>Cập nhập đề thi</Tab>
      </TabList>

      <TabPanels p="0">
        <TabPanel px="0">
          <TitleUpdateExam item={item} />
        </TabPanel>
        <TabPanel px="0">
          <ExamUpdate item={item} />
        </TabPanel>
        <TabPanel px="0">
          <ExamDetail examDetail={exam} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabUpdate;
