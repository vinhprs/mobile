import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import TitleDashboard from './TitleDashboard';
import RecentActivity from './RecentActivity';
import Renue from './Renue';
import CourseOverview from './CourseOverview';

const Dashboard = () => {
  return (
    <div className="max-w-[1000px] p-[24px] w-full mx-auto">
      <div className="flex flex-col gap-y-[24px]">
        <TitleDashboard />
        <div className="flex gap-x-[24px]">
          <RecentActivity />
          <Renue />
        </div>
        <CourseOverview />
      </div>
    </div>
  );
};

export default Dashboard;
