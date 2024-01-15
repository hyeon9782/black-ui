import { ReactNode } from "react";
import { tabList } from "./Tabs.css";

type TabListProps = {
  children: ReactNode;
};

const TabList = ({ children }: TabListProps) => {
  return <div className={tabList}>{children}</div>;
};

export default TabList;
