import { ReactNode, createContext, useState } from "react";
import { TabListVariants, TabVariants, TabsVariants } from "./Tabs.css";

type TabsContextProps = {
  currentTab: number;
  changeTab: (index: number) => void;
};

export const TabsContext = createContext<TabsContextProps>({
  currentTab: 0,
  changeTab: () => {},
});

type TabsProps = TabsVariants &
  TabListVariants &
  TabVariants & {
    children: ReactNode;
    defaultIdex?: number;
    onChange?: (index: number) => void;
    isFitted?: boolean;
  };

const Tabs = ({
  children,
  defaultIdex,
  align,
  size,
  onChange,
  isFitted,
  ...props
}: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(defaultIdex || 4);

  const changeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  const context = {
    ...props,
    currentTab,
    changeTab,
    onChange,
    size,
    isFitted,
    align,
  };

  return (
    <div>
      <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
    </div>
  );
};

export default Tabs;

/*

1. variant - line, enclosed, enclosed-colored, soft-rounded, solid-rounded, unstyled
2. defaultIndex => O
3. size - sm, md, lg => O
4. align - start, center, end => O
5. isFitted - container에 맞게 크기 채우기 => O
6. onChange => O
7. isDisabled => O

--- 심화
8. custom tab
9. 접근성 - arrowLeft, arrowRight, tab, space or enter, home, end =>
10. aria roles => O 

*/
