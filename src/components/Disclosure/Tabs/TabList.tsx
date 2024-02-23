import {
  useRef,
  KeyboardEvent,
  PropsWithChildren,
  createContext,
  useContext,
  RefObject,
} from "react";
import { tabList } from "./Tabs.css";
import { useTabsContext } from "./Tabs";

type TabListContextProps = {
  handleKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  tabRefs: RefObject<HTMLButtonElement[]>;
};

const TabListContext = createContext<TabListContextProps | null>(null);

const TabsKeyboard = ["Home", "End", "ArrowRight", "ArrowLeft", "Tab"];

const TabList = ({ children }: PropsWithChildren) => {
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const { align, variant, changeTab, orientation } = useTabsContext();

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (!TabsKeyboard.includes(e.key)) return;
    const count = tabRefs.current.length;
    const target = e.target as HTMLButtonElement;
    const currentIndex = tabRefs.current.indexOf(target);

    e.preventDefault();

    let nextIndex = 0;

    if (e.key === "Tab" && currentIndex < tabRefs.current.length - 1) {
      nextIndex = currentIndex + 1;
    }

    if (e.key === "Home") {
      nextIndex = 0;
    }

    if (e.key === "End") {
      nextIndex = tabRefs.current.length - 1;
    }

    if (e.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % count;
    }

    if (e.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + count) % count;
    }

    tabRefs.current[nextIndex].focus();
    changeTab(nextIndex);
  };

  return (
    <TabListContext.Provider value={{ handleKeyDown, tabRefs }}>
      <div className={tabList({ align, variant, orientation })} role="tablist">
        {children}
      </div>
    </TabListContext.Provider>
  );
};

export default TabList;

export const useTabListContext = () => {
  const context = useContext(TabListContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
