import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Radio,
  RadioGroup,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useAppDispatch } from "../../hooks/appHooks";
import { getSubjects } from "../../store/actions/user.action";
import useQueryParams from "../../hooks/useSearchParams";
import useSetQueryParams from "../../hooks/useSetQuery";
import { LocalStorage } from "../../utils/LocalStorage";
const Filter = ({ setPage }: any) => {
  const dispatch = useAppDispatch();
  const userId = LocalStorage.getUserId();
  const queryParam = useQueryParams(
    {
      search: "",
      categoryId: "",
      subCategoryId: "",
      startPrice: "",
      endPrice: "",
      page: 1,
      userId: "",
      startDuration: "",
      endDuration: "",
    },
    window.location.href
  );
  const setQuery = useSetQueryParams();
  const [subjects, setSubjects] = useState<any>([]);
  const getListSubject = async () => {
    const res: any = await dispatch(getSubjects({}));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      setSubjects(res?.payload.data);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(queryParam.queryParams, {
      search: e.target.value,
    });
    setPage(1);
  };
  useEffect(() => {
    getListSubject();
  }, []);
  const startPriceOnChange = (e: any) => {
    setTimeout(() => {
      setQuery(queryParam.queryParams, {
        startPrice: +e.target.value,
      });
    }, 1000);
  };
  const endPriceOnChange = (e: any) => {
    setTimeout(() => {
      setQuery(queryParam.queryParams, {
        endPrice: +e.target.value,
      });
    }, 1000);
  };
  const startTimeOnChange = (e: any) => {
    setTimeout(() => {
      setQuery(queryParam.queryParams, {
        startDuration: +e.target.value,
      });
    }, 1000);
  };
  const endTimeOnChange = (e: any) => {
    setTimeout(() => {
      setQuery(queryParam.queryParams, {
        endDuration: +e.target.value,
      });
    }, 1000);
  };
  const resetFilter = () => {
    setQuery(queryParam.queryParams, {
      search: "",
      categoryId: "",
      subCategoryId: "",
      startPrice: "",
      endPrice: "",
      page: 1,
      userId: userId ? userId : "",
      startDuration: "",
      endDuration: "",
    });
  };
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              Thời lượng video
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="flex flex-col w-full">
          <div className="flex flex-col gap-y-3 items-center ">
            <InputGroup size="md">
              <Input
                onChange={startTimeOnChange}
                placeholder="Min"
                color="#FF6636"
                focusBorderColor="#FF6636"
              />
              <InputRightAddon children="tiếng" />
            </InputGroup>
            <span>đến</span>
            <InputGroup size="md">
              <Input
                onChange={endTimeOnChange}
                placeholder="Max"
                color="#FF6636"
                focusBorderColor="#FF6636"
              />
              <InputRightAddon children="tiếng" />
            </InputGroup>
          </div>
        </AccordionPanel>
      </AccordionItem>
      {/* <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              Tính năng
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="flex flex-col">
          <Checkbox colorScheme="purple" value="">
            Bài tập <span>(614)</span>
          </Checkbox>
        </AccordionPanel>
      </AccordionItem> */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              Chủ đề
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <RadioGroup className="flex flex-col">
            {subjects.map((subject: any, index: any) => (
              <Radio
                colorScheme="orange"
                value={subject?.subjectName}
                key={subject._id}
                name="môn học"
                onChange={(e) => handleChange(e)}
              >
                {subject?.subjectName}
              </Radio>
            ))}
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              Giá
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="flex flex-col">
          <div className="flex flex-col gap-y-3 items-center ">
            <InputGroup size="md">
              <Input
                onChange={startPriceOnChange}
                placeholder="Min"
                color="#FF6636"
                focusBorderColor="#FF6636"
              />
              <InputRightAddon children="VND" />
            </InputGroup>
            <span>đến</span>
            <InputGroup size="md">
              <Input
                onChange={endPriceOnChange}
                placeholder="Max"
                color="#FF6636"
                focusBorderColor="#FF6636"
              />
              <InputRightAddon children="VND" />
            </InputGroup>
          </div>
        </AccordionPanel>
      </AccordionItem>

      <button
        onClick={resetFilter}
        className="mt-3 px-[12px] py-[8px] bg-[#FF6636] text-white text-[14px] font-medium"
      >
        Đặt lại filter
      </button>
    </Accordion>
  );
};

export default Filter;
