import { ReactNode, createContext, useContext } from "react";
import { wrap } from "./Popover.css";
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

const PopoverContext = createContext<PopoverContextProps | null>(null);

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

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("There is no PopoverContext");
  }
  return context;
};
