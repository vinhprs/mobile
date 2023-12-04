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
  useDisclosure,
} from "@chakra-ui/react";
import { MdBlock, MdOutlineLock } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import ModalLock from "./ModalLock";
import ModalDelete from "./ModaDelete";
import PagiantionNew from "../../components/Pagination/PagiantionNew";
import { useSelector } from "react-redux";
import {
  selectAccountList,
  updateDelete,
  updateDisable,
} from "../../store/reducers/adminSlice";
import { useAppDispatch } from "../../hooks/appHooks";
import { getAccountList } from "../../store/actions/admin.action";
import { sliceString } from "../../utils/lib";
import moment from "moment";
const TableListStudent = () => {
  const [page, setPage] = useState(1);
  const handleChange = (page: number) => {
    setPage(page);
  };
  const accountStudentList: any = useSelector(selectAccountList);
  const dispatch = useAppDispatch();
  const getAccountStudentList = async () => {
    const payload = new URLSearchParams({
      role: "STUDENT",
    });
    const res = await dispatch(getAccountList(payload));
    if (res.meta.requestStatus === "fulfilled" && res.payload) {
      console.log(res);
    }
  };
  const [idUser, setIdUser] = useState("");
  const {
    isOpen: isOpenLock,
    onOpen: onOpenLock,
    onClose: onCloseLock,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const handleOpen = (id: string, isDisable: boolean) => {
    dispatch(updateDisable(!isDisable));
    setIdUser(id);
    setTimeout(() => {
      onOpenLock();
    }, 200);
  };
  const handleOpenDelete = (id: string) => {
    dispatch(updateDelete(true));
    setIdUser(id);
    setTimeout(() => {
      onOpenDelete();
    }, 200);
  };
  useEffect(() => {
    getAccountStudentList();
  }, []);
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Usename</Th>
              <Th>Họ và tên</Th>
              <Th>Ngày tạo</Th>
              <Th>ROLE</Th>
              <Th>Trạng thái</Th>
              <Th isNumeric>Hành động</Th>
            </Tr>
          </Thead>
          <Tbody>
            {accountStudentList?.listData?.map((item: any, index: number) => (
              <>
                {!item?.isDeleted && (
                  <Tr key={item?._id}>
                    <Td>#{sliceString(4, 4, item?._id)}</Td>
                    <Td>
                      <div className="flex gap-x-2 items-center">
                        <img
                          src={`${
                            item?.avatar
                              ? item?.avatar
                              : "https://images.pexels.com/photos/17153119/pexels-photo-17153119/free-photo-of-dan-ba-d-i-m-t-chan-dung-s-c-d-p.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          }`}
                          alt=""
                          className="w-[35px] h-[35px] object-cover rounded-full"
                        />
                        <span>{item?.username}</span>
                      </div>
                    </Td>
                    <Td>{item?.fullname}</Td>
                    <Td>{moment(item?.createdAt).format("DD/MM/YYYY")}</Td>
                    <Td>{item?.roles[0]?.roleName}</Td>
                    <Td>
                      <div className="flex gap-x-2 items-center">
                        <div
                          className={`w-[8px] h-[8px] rounded-full ${
                            item?.isDisabled ? "bg-red-500" : "bg-green-500"
                          }`}
                        ></div>
                        <span>
                          {item?.isDisabled
                            ? "Đã khóa tài khoản"
                            : "Đã kích hoạt tài khoản"}
                        </span>
                      </div>
                    </Td>
                    <Td isNumeric>
                      <div className="flex items-center justify-end gap-x-4">
                        <div
                          onClick={() =>
                            handleOpen(item?._id, item?.isDisabled)
                          }
                          className={`cursor-pointer flex gap-x-2 items-center ${
                            item?.isDisabled ? "bg-green-500" : "bg-red-500"
                          }  text-white px-[12px] py-[6px] rounded-lg`}
                        >
                          {item?.isDisabled ? <MdOutlineLock /> : <MdBlock />}
                          <span>{item?.isDisabled ? "Mở" : "Khóa"}</span>
                        </div>
                        <div
                          onClick={() => handleOpenDelete(item?._id)}
                          className="cursor-pointer flex gap-x-2 items-center bg-red-500 text-white px-[12px] py-[6px] rounded-lg"
                        >
                          <CiTrash />
                          <span>Xóa</span>
                        </div>
                      </div>
                    </Td>
                  </Tr>
                )}
              </>
            ))}
          </Tbody>
        </Table>
        <div className="mt-4">
          <PagiantionNew
            onPageChange={handleChange}
            totalCount={accountStudentList?.total}
            pageSize={10}
            siblingCount={1}
            currentPage={page}
          />
        </div>
      </TableContainer>
      <ModalLock
        isOpen={isOpenLock}
        onClose={onCloseLock}
        id={idUser}
        getAccountStudentList={getAccountStudentList}
      />
      <ModalDelete
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        id={idUser}
        getAccountStudentList={getAccountStudentList}
      />
    </div>
  );
};

export default TableListStudent;
