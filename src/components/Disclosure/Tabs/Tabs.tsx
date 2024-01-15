import { ReactNode, createContext, useState } from "react";

export const TabsContext = createContext({});

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
