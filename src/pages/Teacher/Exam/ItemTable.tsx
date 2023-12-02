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
  useDisclosure,
} from "@chakra-ui/react";
import ModalDeleteExam from "./Modal/ModalDeleteExam";
import moment from "moment";
import ModalExamDetail from "./Modal/ModalExamDetail";
import ModalUpdateExam from "./Modal/ModalUpdateExam";
const ItemTable = ({ item, getExams }: any) => {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const {
    isOpen: isOpenDetail,
    onOpen: onOpenDetail,
    onClose: onCloseDetail,
  } = useDisclosure();
  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onClose: onCloseUpdate,
  } = useDisclosure();
  return (
    <>
      <Tr>
        <Td>{item._id}</Td>
        <Td>{item.title}</Td>
        <Td>
          <button onClick={onOpenDetail}>Xem đề thi</button>
        </Td>
        <Td>{moment(item?.createdAt).format("DD/MM/YYYY")}</Td>
        <Td textAlign="center">{item.time}</Td>
        <Td>
          <div className="flex gap-x-3">
            <button onClick={onOpenDelete}>Xóa</button>
            <button onClick={onOpenUpdate}>Sửa</button>
          </div>
        </Td>
      </Tr>
      <ModalDeleteExam
        isOpenDelete={isOpenDelete}
        onCloseDelete={onCloseDelete}
        item={item}
        // title={item?.title}
        // id={item._id}
        getExams={getExams}
      />
      <ModalExamDetail
        isOpenDetail={isOpenDetail}
        onCloseDetail={onCloseDetail}
        item={item}

        // id={item._id}
        // title={item?.title}
      />
      <ModalUpdateExam
        isOpenUpdate={isOpenUpdate}
        onCloseUpdate={onCloseUpdate}
        item={item}
        getExams={getExams}
      />
    </>
  );
};

export default ItemTable;
