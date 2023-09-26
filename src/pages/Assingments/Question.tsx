import React, { useState } from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { InlineMath } from "react-katex";

import { updateArray } from "../../store/reducers/questionSlice";
import { useAppDispatch } from "../../hooks/appHooks";
interface QuestionInteface {
  index: any;
}
const Question = ({ index }: QuestionInteface) => {
  const dispatch = useAppDispatch();
  const inlineFormula = "\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta";
  const [value, setValue] = useState("");
  const handleClick = () => {
    dispatch(updateArray(index));
  };
  return (
    <div id={index}>
      <div className="py-3">
        <div className="flex items-center gap-x-3 mb-2">
          <h3 className="font-medium">Câu hỏi số {index}</h3>
          <div className="label px-2 relative bg-[#8614BC] w-[100px]">
            <span className="text-[14px] font-medium text-white">
              Nhận biết
            </span>
          </div>
        </div>
        <div>
          <p>
            Trong không gian Oxyz, cho mặt phẳng{" "}
            <InlineMath math={inlineFormula} />. Trong các khẳng định sau, khẳng
            định nào ?
          </p>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="column">
              <div onClick={handleClick} className="cursor-pointer">
                <Radio size="lg" value="A" colorScheme="purple">
                  <span className="text-[16px]">
                    Qua hai điểm phân biệt có duy nhất 1 mặt phẳng
                  </span>
                </Radio>
              </div>
              <div onClick={handleClick} className="cursor-pointer">
                <Radio size="lg" value="B" colorScheme="purple">
                  <span className="text-[16px]">
                    Qua ba điểm phân biệt bất kì có duy nhất một mặt phẳng
                  </span>
                </Radio>
              </div>
              <div onClick={handleClick} className="cursor-pointer">
                <Radio size="lg" value="C" colorScheme="purple">
                  <span className="text-[16px]">
                    Qua ba điểm phân biệt không thẳng hàng có duy nhất một mặt
                    phẳng
                  </span>
                </Radio>
              </div>
              <div onClick={handleClick} className="cursor-pointer">
                <Radio size="lg" value="D" colorScheme="purple">
                  <span className="text-[16px]">
                    Qua bốn điểm phân biệt bất kì có duy nhất một mặt phẳng
                  </span>
                </Radio>
              </div>
            </Stack>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Question;
