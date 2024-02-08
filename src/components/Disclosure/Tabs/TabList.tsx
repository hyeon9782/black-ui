import {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useContext,
  useRef,
  KeyboardEvent,
} from "react";
import { tabList } from "./Tabs.css";
import { TabsContext } from "./Tabs";

type TabListProps = {
  children: ReactNode;
};

const TabList = ({ children }: TabListProps) => {
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const { align, variant, changeTab } = useContext(TabsContext);

  const addToRefs = (el: HTMLButtonElement) => {
    if (el && !tabRefs.current.includes(el)) {
      tabRefs.current.push(el);
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const count = Children.count(children);

    if (e.key === "Tab" && index < tabRefs.current.length - 1) {
      changeTab(index + 1);
    }

    if (e.key === "Home") {
      e.preventDefault();
      tabRefs.current[0].focus();
      changeTab(0);
    }

    if (e.key === "End") {
      e.preventDefault();
      const nextIndex = tabRefs.current.length - 1;
      tabRefs.current[nextIndex].focus();
      changeTab(nextIndex);
    }

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % count;
      tabRefs.current[nextIndex].focus();
      changeTab(nextIndex);
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const nextIndex = (index - 1 + count) % count;
      tabRefs.current[nextIndex].focus();
      changeTab(nextIndex);
    }
  };

  return (
    <div className={tabList({ align, variant })} role="tablist">
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, {
              ...child.props,
              index,
              ref: (el: HTMLButtonElement) => addToRefs(el),
              handleKeyDown,
            })
          : child,
      )}
    </div>
  );
};

export default TabList;
