import { Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ModalDetailExam from './Modal/ModalDetailExam';

const TableListCheckCourses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Tên khoá học</Th>
              <Th>Giảng viên</Th>
              <Th>Môn học</Th>
              <Th>Trạng thái</Th>
              <Th isNumeric>Hành động</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Vật lý yêu thương</Td>
              <Td>Thầy Võ Văn Ngọc</Td>
              <Td>Hoá 10</Td>
              <Td>Đã đưọc kiểm duyệt</Td>
              <Td isNumeric>
                <div className='flex gap-x-3 justify-end'>
                  <button onClick={onOpen} className='bg-[#FF6636] text-white px-[16px] py-[8px] rounded-md'>Xem chi tiết</button>
                  <button className='bg-green-500 text-white px-[16px] py-[8px] rounded-md'>Được phê duyệt</button>
                  <button className='bg-red-500 text-white px-[16px] py-[8px] rounded-md'>Không được phê duyệt</button>
                </div>
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Vật lý yêu thương</Td>
              <Td>Thầy Võ Văn Ngọc</Td>
              <Td>Hoá 10</Td>
              <Td>Đã đưọc kiểm duyệt</Td>
              <Td isNumeric>
                <div className='flex gap-x-3 justify-end'>
                  <button className='bg-[#FF6636] text-white px-[16px] py-[8px] rounded-md'>Xem chi tiết</button>
                  <button className='bg-green-500 text-white px-[16px] py-[8px] rounded-md'>Được phê duyệt</button>
                  <button className='bg-red-500 text-white px-[16px] py-[8px] rounded-md'>Không được phê duyệt</button>
                </div>
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Vật lý yêu thương</Td>
              <Td>Thầy Võ Văn Ngọc</Td>
              <Td>Hoá 10</Td>
              <Td>Đã đưọc kiểm duyệt</Td>
              <Td isNumeric>
                <div className='flex gap-x-3 justify-end'>
                  <button className='bg-[#FF6636] text-white px-[16px] py-[8px] rounded-md'>Xem chi tiết</button>
                  <button className='bg-green-500 text-white px-[16px] py-[8px] rounded-md'>Được phê duyệt</button>
                  <button className='bg-red-500 text-white px-[16px] py-[8px] rounded-md'>Không được phê duyệt</button>
                </div>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <ModalDetailExam isOpen={isOpen} onClose={onClose}/>
    </div>
  );
};

export default TableListCheckCourses;