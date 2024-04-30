import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TitleUpdateQuiz from './TitleUpdate';
import QuizUpdateItem from './QuizUpdateItem';
import QuizDetail from '../QuizDetail';
import { selectDetailQuizTemp } from '../../../../store/reducers/quizSlice';
import { useSelector } from 'react-redux';
import QuizUpdate from './QuizUpdate';
const TabQuiz = ({item}:any) => {
  const quiz = useSelector(selectDetailQuizTemp);
  return (
    <Tabs bg="white">
      <TabList>
        <Tab>Thông tin đề quiz</Tab>
        <Tab>Câu hỏi và câu trả lời</Tab>
        <Tab>Cập nhập đề thi</Tab>
      </TabList>

      <TabPanels p="0">
        <TabPanel px="0">
          <TitleUpdateQuiz item={item} />
        </TabPanel>
        <TabPanel px="0">
          <QuizUpdate item={item} />
        </TabPanel>
        <TabPanel px="0">
          <QuizDetail quizDetail={quiz} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabQuiz;