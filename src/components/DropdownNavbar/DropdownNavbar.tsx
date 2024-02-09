import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const DropdownNavbar = ({ item, onClose }: any) => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none">
        <h2>
          <AccordionButton>
            <Link
              to={`/courses?categoryId=${item._id}`}
              onClick={() => onClose()}
              className=" text-left flex-1"
            >
              {item?.categoryName}
            </Link>
            <div className="flex-1 flex justify-end">
              <AccordionIcon className="" />
            </div>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="flex flex-col gap-y-3">
          {item?.childs.map((itemSubject: any) => (
            <Link
              to={`/courses?subCategoryId=${itemSubject._id}&categoryId=${item._id}`}
              onClick={() => onClose()}
              key={itemSubject?._id}
              className="px-4 py-3 hover:bg-[#FF6636] hover:text-white"
            >
              <div>{itemSubject?.categoryName}</div>
            </Link>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default DropdownNavbar;
