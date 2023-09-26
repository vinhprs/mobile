import React from "react";
import { useSearchParams } from "react-router-dom";
import FormInformation from "./FormInformation";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Information = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  const handleSkip = () => {
    navigate("/");
  };
  return (
    <div className="pt-[140px] pb-[60px] flex justify-center items-center h-full">
      <div>
        <div className="w-[350px] border-b-[1px] border-[#272829] pb-2">
          <h1 className="font-bold text-[24px] mb-5">Nhập thông tin cơ bản</h1>
          <div className="flex flex-col gap-y-3 mb-5">
            <FormInformation />
          </div>
        </div>
        <div className="pt-3">
          <Button
            onClick={handleSkip}
            _hover={{ bg: "#5B0E7F" }}
            w="100%"
            bg="#8614BC"
            color="white"
            borderRadius="none"
          >
            Bỏ qua
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
