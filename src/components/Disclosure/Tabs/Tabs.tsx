import { ReactNode, createContext, useState } from "react";
import { TabListVariants, TabVariants } from "./Tabs.css";

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

type TabsProps = TabListVariants &
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
  variant,
  ...props
}: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(defaultIdex || 4);

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
  };

  return (
    <div {...props}>
      <TabsContext.Provider value={context}>{children}</TabsContext.Provider>
    </div>
  );
};

export default Tabs;

/*

1. variant - line, enclosed, soft-rounded, solid-rounded, unstyled => O
2. defaultIndex => O
3. size - sm, md, lg => O
4. align - start, center, end => O
5. isFitted - container에 맞게 크기 채우기 => O
6. onChange => O
7. isDisabled => O
8. aria roles => O
-------------------------------------------------------------------------
9. 접근성 - arrowLeft, arrowRight, tab, space or enter, home, end => 
10. custom tab =>

*/
