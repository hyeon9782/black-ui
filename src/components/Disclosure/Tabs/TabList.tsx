import {
  KeyboardEvent,
  PropsWithChildren,
  createContext,
  useContext,
  RefObject,
} from "react";
import { tabList } from "./Tabs.css";
import { useTabsContext } from "./Tabs";
import useKeyboardEvent from "@/hooks/useKeyboardEvent";

type TabListContextProps = {
  handleKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  tabRefs: RefObject<HTMLElement[]>;
};

const TabListContext = createContext<TabListContextProps | null>(null);

const TabsKeyboard = ["Home", "End", "ArrowRight", "ArrowLeft", "Tab"];

const TabList = ({ children }: PropsWithChildren) => {
  const { align, variant, changeTab, orientation } = useTabsContext();

  const { refs: tabRefs, handleKeyDown } = useKeyboardEvent({
    keyList: TabsKeyboard,
    changeIndex: changeTab,
  });

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
