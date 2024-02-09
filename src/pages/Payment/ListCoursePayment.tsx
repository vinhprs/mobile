import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartList } from '../../store/reducers/cartSlice';
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import { formatMoney } from '../../utils/lib';
import { useNavigate } from 'react-router-dom';

const ListCoursePayment = ({ cartList }: any) => {
  const navigate = useNavigate();
  // const cartList: any = useSelector(selectCartList);
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="text-[20px] font-semibold">
        Có {cartList?.carts?.length} khóa học sẽ được thanh toán
      </h2>
      <div className="w-full h-[1px] bg-[#ACADAE]"></div>
      <div>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Khóa học</Th>
                <Th>Giá</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartList?.carts?.map((cart: any, index: number) => (
                <Tr className="" key={cart._id}>
                  <Td
                    w="700px"
                    onClick={() => navigate(`/courses/${cart?.course?._id}`)}
                    cursor="pointer"
                  >
                    <div className="flex gap-x-[20px] w-full break-words">
                      <img
                        src={cart?.course?.thumbnail_url}
                        alt=""
                        className="w-[150px] h-[100px] object-cover"
                      />
                      <div className="">
                        <div className="mb-[8px] flex gap-x-2">
                          <AiFillStar className="text-[20px] text-[#FD8E1F]" />
                          <span className="text-[#8C94A3] text-[14px] ">
                            451,444 review
                          </span>
                        </div>
                        <h1 className="text-[#1D2026] font-medium mb-[10px] whitespace-pre-wrap">
                          {cart?.course?.courseName}
                        </h1>

                        <span className="text-[#A1A5B3] text-[14px]">
                          Hướng dẫn bởi:{' '}
                          <span className="text-[#4E5566]">
                            {' '}
                            {cart?.course?.courseName?.split('-')[1]}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <span className="text-[16px] text-[#FF6636] font-medium">
                      {formatMoney(cart?.course?.price)} VND
                    </span>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ListCoursePayment;
