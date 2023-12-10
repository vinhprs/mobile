import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { formatMoney, formatNumberMoney } from "../../utils/lib";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
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
  Toast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appHooks";
import { deleteCart, getCart } from "../../store/actions/cart.action";
import { useToast } from "@chakra-ui/react";
import { getWistList, postWishList } from "../../store/actions/wishlist.action";
import { useSelector } from "react-redux";
import {
  selectCartList,
  updateCartSub,
  updateIsBuyNow,
} from "../../store/reducers/cartSlice";
const ListCart = () => {
  // const [cartList, setCartList] = useState<any>({});
  const cartList: any = useSelector(selectCartList);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const getCartList = async () => {
    const res: any = await dispatch(getCart({}));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      // setCartList(res?.payload.data);
      console.log(res);
    }
  };
  const deleteCartItem = async (id: any) => {
    const res: any = await dispatch(deleteCart(id));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      toast({
        title: res?.payload.message,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    }
  };
  const getLiked = async () => {
    const res = await dispatch(getWistList({}));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
    }
  };
  const handleDeleteCart = (id: any) => {
    deleteCartItem(id);
    setTimeout(() => {
      getCartList();
      getLiked();
    }, 500);
  };

  const postLiked = async (id: any) => {
    const variable = {
      courseId: id,
    };
    const response = await dispatch(postWishList(variable));
    if (response.meta.requestStatus === "fulfilled" && response.payload) {
      setTimeout(() => {
        getCartList();
        getLiked();
      }, 500);
    }
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
    <div className="flex flex-col gap-y-3">
      <h2 className="text-[20px] font-semibold">
        Có {cartList?.carts?.length} khóa học trong giỏ hàng
      </h2>
      <div className="w-full h-[1px] bg-[#ACADAE]"></div>
      <div>
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
                    <span className="text-[16px] text-[#FF6636] font-medium">
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
                        <BsTrashFill />
                      </Button>
                      <button
                        onClick={() => postLiked(cart.course._id)}
                        className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8] rounded-lg"
                      >
                        {cart.course.isBookmark ? (
                          <AiFillHeart className="text-[20px] text-[#FF6636]" />
                        ) : (
                          <AiOutlineHeart className="text-[20px] text-[#FF6636]" />
                        )}
                      </button>
                    </div>
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

export default ListCart;
