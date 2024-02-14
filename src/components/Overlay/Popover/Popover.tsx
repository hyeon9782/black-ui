import {
  ReactNode,
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { wrap } from "./Popover.css";
import { usePopover } from "./usePopover";

type PopoverContextProps = {
  isVisible?: boolean;
  togglePopover: () => void;
  placement?: string;
  triggerRef?: any;
  popoverRef?: any;
  popoverStyle?: any;
  onClose: () => void;
};

export const PopoverContext = createContext<PopoverContextProps>({
  togglePopover: () => {},
  onClose: () => {},
});

type PopoverProps = {
  children: ReactNode;
  placement?: string;
};
const Popover = ({ children, placement, ...props }: PopoverProps) => {
  const {
    isOpen: isVisible,
    onClose,
    onToggle: togglePopover,
    triggerRef,
    popoverRef,
    wrapRef,
  } = usePopover();
  const [contentPosition, setContentPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const trigger = triggerRef.current;
    const popover = popoverRef.current;

    if (isVisible && trigger !== null && popover !== null) {
      const triggerRect = trigger.getBoundingClientRect();
      const popoverRect = popover.getBoundingClientRect();

      console.log(triggerRect.height);

      setContentPosition({
        top: triggerRect.height + 10,
        left: (triggerRect.width - popoverRect.width) / 2,
      });
    }
  }, [isVisible]);

  const value = {
    isVisible,
    togglePopover,
    placement,
    triggerRef,
    popoverRef,
    contentPosition,
    onClose,
  };

  return (
    <div {...props} className={wrap} ref={wrapRef}>
      <PopoverContext.Provider value={value}>
        {children}
      </PopoverContext.Provider>
    </div>
  );
};

export default Popover;

/*

1. Trigger 또는 Content 밖을 클릭하면 Popover가 닫힌다.
2. 

*/
