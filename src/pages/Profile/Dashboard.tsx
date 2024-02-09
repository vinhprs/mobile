import React from 'react';
import FunFact from './FunFact';
import MyCourses from './MyCourses';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-[#1D2026] text-[24px] font-semibold mb-[24px]">
        Dashboard
      </h1>
      <div>
        <FunFact />
      </div>
      <div>
        <MyCourses />
      </div>
    </div>
  );
};

export default Dashboard;
