import React, { useEffect, useState } from "react";
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
  Tooltip,
} from "@chakra-ui/react";

import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/appHooks";
import { deleteCart, getCart } from "../../store/actions/cart.action";
import { formatMoney } from "../../utils/lib";
import { useNavigate } from "react-router-dom";
import { updateCartSub, updateIsBuyNow } from "../../store/reducers/cartSlice";
const CartList = () => {
  const [cartList, setCartList] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const getCartList = async () => {
    const res: any = await dispatch(getCart({}));
    if (res.meta && res.meta.requestStatus === "fulfilled") {
      setCartList(res?.payload.data);
      console.log(res);
    }
  };
  const deleteCartItem = async (id: any) => {
    const res: any = await dispatch(deleteCart(id));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      alert(JSON.stringify(res?.payload.data));
    }
  };
  const handleDeleteCart = (id: any) => {
    deleteCartItem(id);
    setTimeout(() => {
      getCartList();
    }, 500);
  };
  const handleBuyNow = (cart: any) => {
    dispatch(updateIsBuyNow(true));
    dispatch(updateCartSub(cart));
    setTimeout(() => {
      navigate("/cart/payment");
    }, 500);
  };
  useEffect(() => {
    getCartList();
  }, []);
  return (
    <div>
      <h1 className="text-[#1D2026] text-[24px] font-semibold">
        Giỏ hàng ({cartList?.carts?.length})
      </h1>

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
                      {/* <div className="mb-[8px] flex gap-x-2">
                        <AiFillStar className="text-[20px] text-[#FD8E1F]" />
                        <span className="text-[#8C94A3] text-[14px] ">
                          451,444 review
                        </span>
                      </div> */}
                      <h1 className="text-[#1D2026] font-medium mb-[10px] whitespace-pre-wrap">
                        {cart?.course?.courseName}
                      </h1>

                      <span className="text-[#A1A5B3] text-[14px]">
                        Hướng dẫn bởi:{" "}
                        <span className="text-[#4E5566]">
                          {" "}
                          {cart?.course?.courseName.split("-")[1]}
                        </span>
                      </span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <span className="text-[20px] text-[#FF6636] font-medium">
                    {formatMoney(cart?.course?.price)} VND
                  </span>
                </Td>
                <Td>
                  <div className="flex gap-x-2">
                    <Button
                      onClick={() => handleBuyNow(cart?.course)}
                      bg="#F5F7FA"
                      color="#1D2026"
                      fontSize="14px"
                    >
                      Mua ngay
                    </Button>
                    <Button
                      bg="#FF6636"
                      color="#ffffff"
                      fontSize="14px"
                      _hover={{
                        bg: "#f85b2b",
                      }}
                      onClick={() => handleDeleteCart(cart?._id)}
                    >
                      Xóa khỏi giỏ hàng
                    </Button>
                    <button className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8] rounded-lg">
                      <AiFillHeart className="text-[20px] text-[#FF6636]" />
                    </button>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div className="mt-3 flex justify-end gap-x-1 text-[24px]">
        <h1 className="font-medium">Tổng tiền:</h1>
        <span className="text-[#FF6636]">
          {formatMoney(cartList?.total)} VND
        </span>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => navigate("/cart")}
          className="px-[12px] py-[8px] bg-[#FF6636] text-white font-semibold"
        >
          Chuyển sang giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default CartList;
