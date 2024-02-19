import { ReactNode, createContext, useLayoutEffect, useState } from "react";
import { wrap } from "./Popover.css";
import { usePopover } from "./usePopover";
import { usePopper } from "@/hooks";

type PopoverContextProps = {
  isVisible?: boolean;
  togglePopover: () => void;
  placement?: string;
  triggerRef?: any;
  popoverRef?: any;
  contentPosition?: any;
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
    contentRef: popoverRef,
    ref,
    contentPosition,
  } = usePopper();

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
    <div {...props} className={wrap} ref={ref}>
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
