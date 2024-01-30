import { ReactNode, useContext } from "react";
import { TabsContext } from "./Tabs";
type Props = {
  children: ReactNode;
  index?: number;
};
const Tab = ({ children, index = 0 }: Props) => {
  const { changeTab } = useContext(TabsContext);
  return <div onClick={() => changeTab(index)}>{children}</div>;
};

export default Tab;
