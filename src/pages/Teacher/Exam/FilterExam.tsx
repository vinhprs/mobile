import { Fade, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useAppDispatch } from '../../../hooks/appHooks';
import {
  getCategory,
  getCategoryById,
} from '../../../store/actions/user.action';
import useQueryParams from '../../../hooks/useSearchParams';
import useSetQueryParams from '../../../hooks/useSetQuery';

const FilterExam = ({ getExams }: any) => {
  const [itemId, setItemId] = useState(0);
  const [tab, setTab] = useState(0);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const setQuery = useSetQueryParams();
  const { queryParams } = useQueryParams({}, window.location.href);

  const { isOpen: isOpenFaded, onToggle } = useDisclosure();
  const { isOpen: isOpenSubjectFaded, onToggle: onToggleSubject } =
    useDisclosure();
  const dispatch = useAppDispatch();
  const getCategoryId = async (id: any) => {
    const payload = new URLSearchParams({
      categoryId: id,
    });
    const res: any = await dispatch(getCategoryById(payload));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      setSubCategories(res.payload.data.childs);
    }
  };
  const getCategories = async () => {
    const response: any = await dispatch(getCategory({}));
    if (response.payload && response.meta.requestStatus === 'fulfilled') {
      setCategories(response.payload?.data);
    }
  };
  const queryCategory = (id: number) => {
    setItemId(id);
    setQuery(queryParams, {
      categoryId: id,
    });
  };
  const querySubCategory = (id: number) => {
    setItemId(id);
    setQuery(queryParams, {
      subCategoryId: id,
    });
  };
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    if (itemId !== 0) {
      getCategoryId(itemId);
    }
  }, [itemId]);
  return (
    <div className="flex w-full gap-x-4">
      <div className="w-full">
        <div className={'w-full flex flex-col gap-y-2 '}>
          {/* <span className="text-[14px]">Khối</span> */}
          <div
            className={'relative cursor-pointer px-[8px] h-[38px] text-[14px] bg-white border-[1px]  border-[#E9EAF0] text-[#4E5566] '}
          >
            <div
              onClick={() => {
                // setTypes(typeApi);
                onToggle();
                setTab(1);
              }}
              className="flex justify-between items-center h-full gap-x-2"
            >
              <span>Khối</span>
              <MdOutlineKeyboardArrowDown />
            </div>
            {isOpenFaded && tab === 1 && (
              <div className="absolute top-[100%] left-0 w-full z-10">
                <Fade in={isOpenFaded}>
                  <div className="w-full py-[10px] border-[0.5px] border-[#E9EAF0] bg-white">
                    {categories.map((item: any, index: number) => (
                      <p
                        key={item._id}
                        className="py-[5px] px-[10px] hover:text-white hover:bg-[#FF6636]"
                        onClick={() => queryCategory(item?._id)}
                      >
                        {item?.categoryName}
                      </p>
                    ))}
                  </div>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className={'w-full flex flex-col gap-y-2 '}>
          {/* <span className="text-[14px]">Khối</span> */}
          <div
            className={'relative cursor-pointer px-[8px] h-[38px] text-[14px] bg-white border-[1px]  border-[#E9EAF0] text-[#4E5566] '}
          >
            <div
              onClick={() => {
                // setTypes(typeApi);
                setTab(2);

                onToggleSubject();
              }}
              className="flex justify-between items-center h-full gap-x-2"
            >
              <span>Lớp</span>
              <MdOutlineKeyboardArrowDown />
            </div>
            {isOpenSubjectFaded && tab === 2 && (
              <div className="absolute top-[100%] left-0 w-full z-10">
                <Fade in={isOpenSubjectFaded}>
                  <div className="w-full py-[10px] border-[0.5px] border-[#E9EAF0] bg-white">
                    {subCategories?.map((item: any, index: number) => (
                      <p
                        onClick={() => querySubCategory(item?._id)}
                        key={item?._id}
                        className="py-[5px] px-[10px] hover:text-white hover:bg-[#FF6636]"
                      >
                        {item?.categoryName}
                      </p>
                    ))}
                  </div>
                </Fade>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterExam;
