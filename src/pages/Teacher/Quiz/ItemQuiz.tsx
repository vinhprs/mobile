import { Td, Tr, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ModalDeleteQuiz from './Modal/ModalDeleteQuiz';
import moment from 'moment';
import ModalDetailQuiz from './Modal/ModalDetailQuiz';
import ModalUpdateQuiz from './Modal/ModalUpdateQuiz';

const ItemQuiz = ({item,getListQuizTeacher}:any) => {
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
          <button onClick={onOpenDetail} className="underline">
            Xem đề thi
          </button>
        </Td>
        <Td>{moment(item?.createdAt).format('DD/MM/YYYY')}</Td>
        <Td>
          <div className="flex gap-x-3">
            <button onClick={onOpenDelete} className="underline">
              Xóa
            </button>
            <button onClick={onOpenUpdate} className="underline">
              Sửa
            </button>
          </div>
        </Td>
      </Tr>
      <ModalDeleteQuiz
        isOpenDelete={isOpenDelete}
        onCloseDelete={onCloseDelete}
        item={item}
        // title={item?.title}
        // id={item._id}
        getListQuizTeacher={getListQuizTeacher}
      />
      <ModalDetailQuiz
        isOpenDetail={isOpenDetail}
        onCloseDetail={onCloseDetail}
        item={item}

        // id={item._id}
        // title={item?.title}
      />
      <ModalUpdateQuiz
        isOpenUpdate={isOpenUpdate}
        onCloseUpdate={onCloseUpdate}
        item={item}
        getListQuizTeacher={getListQuizTeacher}
      />
    </>
  );
};

export default ItemQuiz;