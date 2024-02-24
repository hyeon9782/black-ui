import {
  ForwardedRef,
  PropsWithChildren,
  Ref,
  forwardRef,
  useState,
} from "react";
import { useTabsContext } from "./Tabs";
import { tab } from "./Tabs.css";
import { useTabListContext } from "./TabList";
import useCollectRefs from "@/hooks/useCollectRefs";
type Props = {
  isDisabled?: boolean;
};
const Tab = forwardRef(
  (
    { children, isDisabled }: PropsWithChildren<Props>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { changeTab, currentTab, size, onChange, isFitted, variant } =
      useTabsContext();

    const { tabRefs, handleKeyDown } = useTabListContext();
    const [index, setIndex] = useState(-1);

    const handleClick = () => {
      if (onChange) {
        onChange(index);
      }
      changeTab(index);
    };

    const changeIndex = (index: number) => {
      setIndex(index);
    };

    const { ref: tabRef } = useCollectRefs({
      refs: tabRefs,
      setter: changeIndex,
    });

    return (
      <button
        ref={tabRef as Ref<HTMLButtonElement>}
        onClick={handleClick}
        role="tab"
        onKeyDown={handleKeyDown}
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
