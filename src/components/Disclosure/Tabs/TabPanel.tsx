import { ReactNode, useContext } from "react";
import { TabsContext } from "./Tabs";
import { panel } from "./Tabs.css";
type Props = {
  children: ReactNode;
  index?: number;
};
const TabPanel = ({ children, index = 0 }: Props) => {
  const { currentTab } = useContext(TabsContext);
  return (
    <div className={panel({ selected: currentTab === index })}>{children}</div>
  );
};

export default TabPanel;
