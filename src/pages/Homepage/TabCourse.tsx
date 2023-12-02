import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { course } from "../../dummydata/dummydata";
import TabCourseItem from "./TabCourseItem";
import { useAppDispatch } from "../../hooks/appHooks";
import { getSubjects } from "../../store/actions/user.action";
import { getStudentCourse } from "../../store/actions/course.action";
const TabCourse = () => {
  const dispatch = useAppDispatch();
  const [subjects, setSubjects] = useState<any>([]);
  const [getSubjectss, setGetSubjects] = useState<any>([]);
  const getSubject = async () => {
    const res: any = await dispatch(getSubjects({}));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      setSubjects(res.payload.data);
    }
  };
  useEffect(() => {
    getSubject();
    getInformation("Tiếng Anh");
  }, []);
  const getInformation = async (items: any) => {
    const payload = new URLSearchParams({
      limit: "5",
      search: items,
    });
    const res: any = await dispatch(getStudentCourse(payload));
    if (res.payload && res.meta.requestStatus === "fulfilled") {
      setGetSubjects(res?.payload.data);
    }
  };
  return (
    <Tabs variant="colorful">
      <TabList>
        {subjects?.map((item: any, index: any) => (
          <Tab
            key={item?._id}
            onClick={() => getInformation(item?.subjectName)}
          >
            {item?.subjectName}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {subjects?.map((item: any, index: any) => (
          <TabPanel key={item.id}>
            <TabCourseItem item={getSubjectss} itemSearch={item} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabCourse;
