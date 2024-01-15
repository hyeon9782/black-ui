import React, { useContext } from "react";
import { TabsContext } from "./Tabs";

const Tab = ({ children, index }) => {
  const { changeTab } = useContext(TabsContext);
  return <div onClick={() => changeTab(index)}>{children}</div>;
};

export default Tab;
