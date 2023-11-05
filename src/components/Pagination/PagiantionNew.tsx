import React, { useEffect } from "react";
import usePagination from "../../hooks/use-pagination-hook";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
interface Props {
  onPageChange?: any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  debouncedValue?: string;
  className?: string;
}
const PagiantionNew = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  debouncedValue,
  className,
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log(
    "🚀 ~ file: PagiantionNew.tsx:25 ~ paginationRange:",
    paginationRange
  );
  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }
  const lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(currentPage >= Number(lastPage) ? lastPage : currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage === 1 ? 1 : currentPage - 1);
  };
  const handleItem = (item: any) => {
    onPageChange(item);
  };

  return (
    <div className="flex justify-center items-center gap-x-4">
      <div
        onClick={onPrevious}
        className={`rounded-lg h-[35px] w-[35px] flex justify-center items-center ${
          currentPage === 1
            ? "bg-white text-[#FF6636] cursor-not-allowed border-[1px] border-[#FF6636]"
            : "bg-[#FF6636] text-white cursor-pointer"
        }`}
      >
        <MdOutlineKeyboardArrowLeft className="text-[24px]" />
      </div>
      <div className="flex gap-x-2">
        {paginationRange.map((item: any, index: any) => (
          <>
            {item === "DOTS" ? (
              <div
                key={index}
                className="cursor-pointer rounded-lg h-[35px] w-[35px] flex justify-center items-center"
              >
                <span>...</span>
              </div>
            ) : (
              <div
                key={index}
                onClick={() => handleItem(item)}
                className={`cursor-pointer rounded-lg border-[1px] border-[#FF6636] h-[35px] w-[35px] flex justify-center items-center ${
                  item === currentPage ? "bg-[#FF6636] text-white" : ""
                }`}
              >
                <span className="">{item}</span>
              </div>
            )}
          </>
        ))}
      </div>
      <div
        onClick={onNext}
        className={`rounded-lg h-[35px] w-[35px] flex justify-center items-center ${
          currentPage >= Number(lastPage)
            ? "bg-white text-[#FF6636] cursor-not-allowed border-[1px] border-[#FF6636]"
            : "bg-[#FF6636] text-white cursor-pointer"
        }`}
      >
        <MdOutlineKeyboardArrowRight />
      </div>
    </div>
  );
};

export default PagiantionNew;
