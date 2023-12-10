import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectRanking } from "../../store/reducers/examSlice";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/appHooks";
import { getRanking } from "../../store/actions/exam.action";

const Ranking = () => {
  const ranks: any = useSelector(selectRanking);
  const search = useLocation().search;
  const params = new URLSearchParams(search).get("id");
  const dispatch = useAppDispatch();
  const getRankingList = async (id: any) => {
    const payload = new URLSearchParams({
      examId: id,
    });
    const res = await dispatch(getRanking(payload));
    if (res.payload && res.meta.requestStatus === "rejected") {
    }
  };
  useEffect(() => {
    if (params) {
      getRankingList(params);
    }
  }, [params]);
  return (
    <div className="flex flex-col gap-y-5">
      {ranks?.listData?.length > 0 && (
        <div className="flex flex-col gap-y-3 px-[16px] py-[8px] rounded-lg bg-[#FF6636] text-white">
          <div className="text-center text-[14px]">
            Bạn có đủ giỏi để vượt qua{" "}
          </div>
          <div className="grid grid-cols-[50px_1fr] gap-x-3">
            <img
              src={ranks?.listData[0]?.user?.avatar}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="text-[14px]">
              <h1 className="font-bold">
                {ranks?.listData[0]?.user?.fullname}
              </h1>
              <span className="font-medium">
                Số điểm {ranks?.listData[0]?.score}/10
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-y-3">
        <h1 className="text-center px-[16px] py-[8px] rounded-lg bg-[#FF6636] text-white">
          Bảng xếp hạng
        </h1>
        {ranks?.listData?.length > 0 && (
          <div className="px-[16px] py-[10px] rounded-lg bg-zinc-200 max-h-[600px] h-full">
            {ranks?.listData?.map((item: any, index: number) => (
              <div className="grid grid-cols-[50px_1fr] gap-x-3">
                <img
                  src={item?.user?.avatar}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <div className="text-[14px]">
                  <h1 className="font-bold">{item?.user?.fullname}</h1>
                  <span className="font-medium">Số điểm {item?.score}/10</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranking;
