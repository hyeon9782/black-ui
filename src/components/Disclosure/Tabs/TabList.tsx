import {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useContext,
} from "react";
import { tabList } from "./Tabs.css";
import { TabsContext } from "./Tabs";

type TabListProps = {
  children: ReactNode;
};

const TabList = ({ children }: TabListProps) => {
  const { align } = useContext(TabsContext);
  return (
    <div className={tabList({ align })} role="tablist">
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, { ...child.props, index })
          : child,
      )}
    </div>
  );
};

export default TabList;
