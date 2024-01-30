import { ReactNode, Children, isValidElement, cloneElement } from "react";
import { tabList } from "./Tabs.css";

type TabListProps = {
  children: ReactNode;
};

const TabList = ({ children }: TabListProps) => {
  return (
    <div className={tabList}>
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, { ...child.props, index })
          : child
      )}
    </div>
  );
};

export default TabList;
