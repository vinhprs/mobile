import React from 'react';
interface ChildrenProp {
  children: React.ReactNode;
}
const Wrapper = ({ children }: ChildrenProp) => {
  return <div className="pt-[100px] pb-[60px] px-[24px]">{children}</div>;
};

export default Wrapper;
