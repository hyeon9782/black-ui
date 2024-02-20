import { ReactNode, createContext } from "react";
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
