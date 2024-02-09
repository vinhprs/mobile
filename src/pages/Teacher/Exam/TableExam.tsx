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
import ModalDeleteExam from './Modal/ModalDeleteExam';
import ItemTable from './ItemTable';
const TableExam = ({ exams, getExams }: any) => {
  return (
    <div>
      <TableContainer>
        <Table variant="striped" background="white" colorScheme="orange">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Đề thi</Th>
              <Th>Xem đề thi</Th>
              <Th>Lớp</Th>
              <Th>Môn học</Th>
              <Th>Ngày tạo</Th>
              <Th textAlign="center">Thời gian</Th>
              <Th></Th>
              {/* <Th isNumeric>multiply by</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {exams?.listData?.map((item: any, index: any) => (
              <ItemTable key={item._id} item={item} getExams={getExams} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableExam;
