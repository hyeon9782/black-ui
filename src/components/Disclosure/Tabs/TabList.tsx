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
  const { align, variant } = useContext(TabsContext);
  return (
    <div className={tabList({ align, variant })} role="tablist">
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, { ...child.props, index })
          : child,
      )}
    </div>
  );
};

export default TabList;
