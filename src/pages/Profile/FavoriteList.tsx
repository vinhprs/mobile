import React from "react";
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
  Button,
} from "@chakra-ui/react";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const FavoriteList = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Khóa học</Th>
            <Th>Giá</Th>
            <Th>Hành động</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <div className="flex gap-x-[20px] w-full break-words">
                <img
                  src="https://images.pexels.com/photos/10184005/pexels-photo-10184005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  <h1 className="text-[#1D2026] font-medium mb-[10px]">
                    The Ultimate Drawing Course - Beginner to Advanced
                  </h1>

                  <span className="text-[#A1A5B3] text-[14px]">
                    Hướng dẫn bởi:{" "}
                    <span className="text-[#4E5566]">Nguyễn Chí Công</span>
                  </span>
                </div>
              </div>
            </Td>
            <Td>
              <span className="text-[20px] text-[#FF6636] font-medium">
                $37.00
              </span>
            </Td>
            <Td>
              <div className="flex gap-x-2">
                <Button bg="#F5F7FA" color="#1D2026" fontSize="14px">
                  Mua ngay
                </Button>
                <Button
                  bg="#FF6636"
                  color="#ffffff"
                  fontSize="14px"
                  _hover={{
                    bg: "#f85b2b",
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
                <button className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8] rounded-lg">
                  <AiFillHeart className="text-[20px] text-[#FF6636]" />
                </button>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <div className="flex gap-x-[20px] w-full break-words">
                <img
                  src="https://images.pexels.com/photos/10184005/pexels-photo-10184005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  <h1 className="text-[#1D2026] font-medium mb-[10px]">
                    The Ultimate Drawing Course - Beginner to Advanced
                  </h1>

                  <span className="text-[#A1A5B3] text-[14px]">
                    Hướng dẫn bởi:{" "}
                    <span className="text-[#4E5566]">Nguyễn Chí Công</span>
                  </span>
                </div>
              </div>
            </Td>
            <Td>
              <span className="text-[20px] text-[#FF6636] font-medium">
                $37.00
              </span>
            </Td>
            <Td>
              <div className="flex gap-x-2">
                <Button bg="#F5F7FA" color="#1D2026" fontSize="14px">
                  Mua ngay
                </Button>
                <Button
                  bg="#FF6636"
                  color="#ffffff"
                  fontSize="14px"
                  _hover={{
                    bg: "#f85b2b",
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
                <button className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8] rounded-lg">
                  <AiFillHeart className="text-[20px] text-[#FF6636]" />
                </button>
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <div className="flex gap-x-[20px] w-full break-words">
                <img
                  src="https://images.pexels.com/photos/10184005/pexels-photo-10184005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  <h1 className="text-[#1D2026] font-medium mb-[10px]">
                    The Ultimate Drawing Course - Beginner to Advanced
                  </h1>

                  <span className="text-[#A1A5B3] text-[14px]">
                    Hướng dẫn bởi:{" "}
                    <span className="text-[#4E5566]">Nguyễn Chí Công</span>
                  </span>
                </div>
              </div>
            </Td>
            <Td>
              <span className="text-[20px] text-[#FF6636] font-medium">
                $37.00
              </span>
            </Td>
            <Td>
              <div className="flex gap-x-2">
                <Button bg="#F5F7FA" color="#1D2026" fontSize="14px">
                  Mua ngay
                </Button>
                <Button
                  bg="#FF6636"
                  color="#ffffff"
                  fontSize="14px"
                  _hover={{
                    bg: "#f85b2b",
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
                <button className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8] rounded-lg">
                  <AiFillHeart className="text-[20px] text-[#FF6636]" />
                </button>
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FavoriteList;
