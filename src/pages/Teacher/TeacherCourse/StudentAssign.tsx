import React, { useEffect, useState } from 'react';
import { Tooltip } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/appHooks';
import { getStudentParticipate } from '../../../store/actions/course.action';
const StudentAssign = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<any>({});
  const dispatch = useAppDispatch();
  const getStudentList = async (id: any) => {
    const payload = new URLSearchParams({
      courseId: id,
    });
    const res: any = await dispatch(getStudentParticipate(payload));
    if (res.payload && res.meta.requestStatus === 'fulfilled') {
      setStudent(res?.payload?.data);
    }
  };
  useEffect(() => {
    if (id) {
      getStudentList(id);
    }
  }, [id]);
  return (
    <div>
      <h1 className="mb-2">Số học sinh đã tham gia</h1>
      <div className="flex gap-x-3">
        {student?.listData?.map((item: any, index: number) => (
          <Tooltip
            key={index}
            hasArrow
            label={item?.user?.fullname}
            bg="gray.300"
            color="black"
          >
            <img
              className="w-[60px] h-[60px] object-cover rounded-full"
              src={item?.user?.avatar}
              alt=""
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default StudentAssign;
