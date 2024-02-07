import { ReactNode, useContext } from "react";
import { TabsContext } from "./Tabs";
import { tab } from "./Tabs.css";
type Props = {
  children: ReactNode;
  index?: number;
  isDisabled?: boolean;
};
const Tab = ({ children, isDisabled, index = 0 }: Props) => {
  const { changeTab, currentTab, size, onChange, isFitted, variant } =
    useContext(TabsContext);

  const handleClick = () => {
    if (onChange) {
      onChange(index);
    }
    changeTab(index);
  };
  return (
    <button
      onClick={handleClick}
      role="tab"
      aria-selected={index === currentTab}
      disabled={isDisabled}
      className={tab({
        size,
        isFitted,
        selected: index === currentTab,
        variant,
      })}
    >
      {children}
    </button>
  );
};

export default Tab;
