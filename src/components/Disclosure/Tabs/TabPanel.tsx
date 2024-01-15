import React, { useContext } from "react";
import { TabsContext } from "./Tabs";

const TabPanel = ({ children, index }) => {
  const { currentTab } = useContext(TabsContext);
  return (
    <div
      style={currentTab === index ? { display: "block" } : { display: "none" }}
    >
      {children}
    </div>
  );
};

export default TabPanel;
