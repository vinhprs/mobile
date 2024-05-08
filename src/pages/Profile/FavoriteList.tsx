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
  Button,
  useToast,
} from '@chakra-ui/react';
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectWishList } from '../../store/reducers/wishListSlice';
import { useAppDispatch } from '../../hooks/appHooks';
import { addToCart, getCart } from '../../store/actions/cart.action';
import { formatMoney } from '../../utils/lib';
import { useNavigate } from 'react-router-dom';
import { getWistList, postWishList } from '../../store/actions/wishlist.action';
import { updateCartSub, updateIsBuyNow } from '../../store/reducers/cartSlice';
const FavoriteList = () => {
  const wishList = useSelector(selectWishList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const getCartItem = async () => {
    const res = await dispatch(getCart({}));
    if (res.payload && res.meta.requestStatus === 'fulfilled') { /* empty */ }
  };
  const getWishListItem = async () => {
    const res = await dispatch(getWistList({}));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) { /* empty */ }
  };
  const postWistListItem = async (id: any) => {
    const variable = {
      courseId: id,
    };
    const res: any = await dispatch(postWishList(variable));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      toast({
        title: res?.payload.message,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setTimeout(() => {
        getWishListItem();
      }, 500);
    }
  };
  const addToCartItem = async (id: any) => {
    const variable = {
      courseId: id,
    };
    const res: any = await dispatch(addToCart(variable));
    if (res.meta.requestStatus === 'fulfilled' && res.payload) {
      toast({
        title: res?.payload.message,
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      });
      setTimeout(() => {
        getCartItem();
        getWishListItem();
      }, 500);
    }
  };
  const handleBuyNow = (cart: any) => {
    dispatch(updateIsBuyNow(true));
    dispatch(updateCartSub(cart));
    setTimeout(() => {
      navigate('/cart/payment');
    }, 500);
  };
  const handleAddCart = (id: any) => {
    addToCartItem(id);
  };
  const handlePost = (id: any) => {
    postWistListItem(id);
  };
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
          {wishList?.map((item: any, index: any) => (
            

            <Tr key={index}>
              <Td>
                <div className="flex gap-x-[20px] lg:flex-row flex-col whitespace-pre-wrap">
                  <img
                    src={item?.course?.thumbnail_url}
                    alt=""
                    className="flex-1 w-[150px] h-[100px] object-cover"
                  />
                  <div className="flex-1 flex flex-col gap-y-2 lg:w-full w-max">
                    {/* <div className="mb-[8px] flex gap-x-2">
                            <AiFillStar className="text-[20px] text-[#FD8E1F]" />
                            <span className="text-[#8C94A3] text-[14px] ">
                              451,444 review
                            </span>
                          </div> */}
                    <h1 className="text-[#1D2026] font-medium mb-[10px]">
                      {item?.course?.courseName}
                    </h1>

                    <span className="text-[#A1A5B3] text-[14px]">
                            Hướng dẫn bởi:{' '}
                      <span className="text-[#4E5566]">
                        {
                          item?.course?.courseName.split('-')[
                            item?.course?.courseName.split('-').length - 1
                          ]
                        }
                      </span>
                    </span>
                    <div className="text-[#A1A5B3] text-[14px]">
                      {item?.course?.description}
                    </div>
                  </div>
                </div>
              </Td>
              <Td>
                <span className="text-[20px] text-[#FF6636] font-medium">
                  {formatMoney(item?.course?.price)} VND
                </span>
              </Td>
              <Td>
                <div className="flex gap-x-2">
                  {!item?.course?.isPaid && (
                    <Button
                      onClick={() => handleBuyNow(item?.course)}
                      bg="#F5F7FA"
                      color="#1D2026"
                      fontSize="14px"
                    >
                            Mua ngay
                    </Button>
                  )}
                  {!item?.course?.isAddToCart && (
                    <Button
                      bg="#FF6636"
                      color="#ffffff"
                      fontSize="14px"
                      _hover={{
                        bg: '#f85b2b',
                      }}
                      onClick={() => handleAddCart(item?.course?._id)}
                    >
                            Thêm vào giỏ hàng
                    </Button>
                  )}

                  <button
                    onClick={() => handlePost(item?.course?._id)}
                    className="h-[40px] w-[40px] flex justify-center items-center bg-[#FFEEE8] rounded-lg"
                  >
                    {item?.course?.isBookmark ? (
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
  );
};

export default FavoriteList;
