import { ReactNode, createContext, useState } from "react";

type TabsContextProps = {
  currentTab: number;
  changeTab: (index: number) => void;
};

export const TabsContext = createContext<TabsContextProps>({
  currentTab: 0,
  changeTab: () => {},
});

type TabsProps = {
  children: ReactNode;
};

const Tabs = ({ children, ...props }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(0);

  const changeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  const value = {
    currentTab,
    changeTab,
  };

  return (
    <div>
      <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
    </div>
  );
};

export default Tabs;
