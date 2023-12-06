import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const PaymentFail = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="max-w-[1200px] w-full mx-auto text-[#1D2026]">
      <h1 className="font-semibold text-[24px] mb-5 text-center py-[40px] text-red-500">
        Hủy giao dịch
      </h1>

      <MdOutlineCancel className="mx-auto animate-pulse text-[100px] text-red-500" />
      <div className="text-center mx-auto">
        Bạn sẽ về trang chủ trong vòng{" "}
        <span className="text-red-500">5 giây</span> nữa...
      </div>
    </div>
  );
};

export default PaymentFail;
