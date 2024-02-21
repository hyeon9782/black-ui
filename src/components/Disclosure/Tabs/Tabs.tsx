import { ReactNode, createContext, useState } from "react";
import { TabListVariants, TabVariants, tabs } from "./Tabs.css";

type TabsContextProps = TabVariants &
  TabListVariants & {
    currentTab: number;
    changeTab: (index: number) => void;
    onChange?: (index: number) => void;
  };

export const TabsContext = createContext<TabsContextProps>({
  currentTab: 0,
  changeTab: () => {},
});

export type TabsProps = TabListVariants &
  TabVariants & {
    children?: ReactNode;
    defaultIdex?: number;
    onChange?: (index: number) => void;
    isFitted?: boolean;
    orientation?: "vertical" | "horizontal";
  };

const Tabs = ({
  children,
  defaultIdex,
  align,
  size,
  onChange,
  isFitted,
  variant,
  orientation,
  ...props
}: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(defaultIdex || 0);

  const changeTab = (tab: number) => {
    setCurrentTab(tab);
  };

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
