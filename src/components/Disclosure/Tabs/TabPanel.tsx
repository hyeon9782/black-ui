import { ReactNode } from "react";
import { useTabsContext } from "./Tabs";
import { panel } from "./Tabs.css";
type Props = {
  children: ReactNode;
  index?: number;
};
const TabPanel = ({ children, index = 0 }: Props) => {
  const { currentTab } = useTabsContext();
  return (
    <div className={panel({ selected: currentTab === index })}>{children}</div>
  );
};

export default TabPanel;
