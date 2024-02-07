import { ReactNode, createContext, useLayoutEffect, useState } from "react";
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
  } = usePopover();
  const [popoverStyle, setPopoverStyle] = useState({});

  useLayoutEffect(() => {
    if (triggerRef.current && popoverRef.current) {
      const { width, height } = triggerRef.current?.getBoundingClientRect();

      const left = (width - popoverRef.current?.clientWidth) / 2;
      const top = height + 10;

      setPopoverStyle({
        top,
        left,
      });
    }
  }, []);

  const value = {
    isVisible,
    togglePopover,
    placement,
    triggerRef,
    popoverRef,
    popoverStyle,
    onClose,
  };

  return (
    <div {...props} className={wrap}>
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
