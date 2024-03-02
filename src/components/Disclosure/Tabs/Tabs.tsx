import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { TabListVariants, TabVariants, tabs } from "./Tabs.css";

type TabsContextProps = TabVariants &
  TabListVariants & {
    currentTab: number;
    changeTab: (index: number) => void;
    onChange?: (index: number) => void;
  };

const TabsContext = createContext<TabsContextProps | null>(null);

export type TabsProps = TabListVariants &
  TabVariants & {
    defaultIndex?: number;
    onChange?: (index: number) => void;
    isFitted?: boolean;
    orientation?: "vertical" | "horizontal";
  };

const Tabs = ({
  children,
  defaultIndex,
  align,
  size,
  onChange,
  isFitted,
  variant,
  orientation,
  ...props
}: PropsWithChildren<TabsProps>) => {
  const [currentTab, setCurrentTab] = useState(defaultIndex || 0);

  const changeTab = useCallback((tab: number) => {
    setCurrentTab(tab);
  }, []);

  const context = {
    currentTab,
    changeTab,
    onChange,
    size,
    isFitted,
    align,
    variant,
    orientation,
  };

  return (
    <div {...props} className={tabs({ orientation })}>
      <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
    </div>
  );
};

export default Tabs;

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("There is no TabsContext");
  }
  return context;
};
