import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
} from '@chakra-ui/react';
import ItemQuiz from './ItemQuiz';
const TableQuizs = ({listquizs,getListQuizTeacher}:any) => {
  return (
    <div>
      <TableContainer>
        <Table variant="striped" background="white" colorScheme="orange">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Đề thi</Th>
              <Th>Xem đề thi</Th>
              <Th>Ngày tạo</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {listquizs?.listData?.map((item: any, index: any) => (
              <ItemQuiz key={item._id} item={item} getListQuizTeacher={getListQuizTeacher} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableQuizs;