import {
  ForwardedRef,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTabsContext } from "./Tabs";
import { tab } from "./Tabs.css";
import { useTabListContext } from "./TabList";
type Props = {
  children: ReactNode;
  isDisabled?: boolean;
};
const Tab = forwardRef(
  ({ children, isDisabled }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { changeTab, currentTab, size, onChange, isFitted, variant } =
      useTabsContext();

    const tabRef = useRef<HTMLButtonElement>(null);

    const { tabRefs, handleKeyDown } = useTabListContext();
    const [index, setIndex] = useState(-1);

    const handleClick = () => {
      if (onChange) {
        onChange(index);
      }
      changeTab(index);
    };

    useEffect(() => {
      if (tabRef?.current && tabRefs?.current) {
        tabRefs.current.push(tabRef.current);
        setIndex(tabRefs.current.indexOf(tabRef.current));
        return () => {
          if (tabRef.current && tabRefs.current) {
            const index = tabRefs.current.indexOf(tabRef.current);
            if (index !== -1) {
              tabRefs.current.splice(index, 1);
            }
          }
        };
      }
    }, []);

    return (
      <button
        ref={tabRef}
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
