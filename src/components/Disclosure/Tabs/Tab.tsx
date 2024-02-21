import { ForwardedRef, KeyboardEvent, ReactNode, forwardRef } from "react";
import { useTabsContext } from "./Tabs";
import { tab } from "./Tabs.css";
type Props = {
  children: ReactNode;
  index?: number;
  isDisabled?: boolean;
  handleKeyDown?: (e: KeyboardEvent<HTMLButtonElement>, index: number) => void;
};
const Tab = forwardRef(
  (
    { children, isDisabled, index = 0, handleKeyDown = () => {} }: Props,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { changeTab, currentTab, size, onChange, isFitted, variant } =
      useTabsContext();

    const handleClick = () => {
      if (onChange) {
        onChange(index);
      }
      changeTab(index);
    };
    return (
      <button
        ref={ref}
        onClick={handleClick}
        role="tab"
        onKeyDown={(e) => handleKeyDown(e, index)}
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
  },
);

export default Tab;
