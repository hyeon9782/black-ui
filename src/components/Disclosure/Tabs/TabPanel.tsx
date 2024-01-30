import { ReactNode, useContext } from "react";
import { TabsContext } from "./Tabs";
type Props = {
  children: ReactNode;
  index?: number;
};
const TabPanel = ({ children, index = 0 }: Props) => {
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
