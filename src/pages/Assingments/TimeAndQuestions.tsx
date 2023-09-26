import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectQuestion } from "../../store/reducers/questionSlice";

const TimeAndQuestions = () => {
  const questionNumber = useSelector(selectQuestion);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(60);
  const [isStopped, setIsStopped] = useState(false);
  useEffect(() => {
    let timer: any;

    if (!isStopped) {
      timer = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          clearInterval(timer); // Stop the timer when it reaches zero
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [seconds, minutes, isStopped]);

  const handleStopClick = () => {
    setIsStopped(!isStopped);
  };
  return (
    <div>
      <div className="bg-[#5B0E7F] px-[20px] py-[10px] h-[100px] flex flex-col justify-center gap-y-4 rounded-xl">
        <div className="grid grid-cols-[1fr_2px_70px] gap-x-3 items-center">
          <h1 className="text-lg  text-white">Thời gian còn lại</h1>
          <div className="h-full w-[2px] bg-white"></div>
          <div className="text-lg font-medium text-white text-right">
            {minutes}:{seconds}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_2px_70px] gap-x-3 items-center">
          <h1 className="text-lg  text-white">Số câu đã làm</h1>
          <div className="h-full w-[2px] bg-white"></div>
          <div className="text-lg font-medium text-white text-right">
            {questionNumber.length}/7
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeAndQuestions;
