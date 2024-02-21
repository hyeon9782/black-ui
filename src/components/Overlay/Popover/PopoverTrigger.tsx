import { ReactNode } from "react";
import { usePopoverContext } from "./Popover";
type Props = {
  children: ReactNode;
};
const PopoverTrigger = ({ children }: Props) => {
  const { togglePopover, triggerRef } = usePopoverContext();
  return (
    <div ref={triggerRef} onClick={togglePopover}>
      {children}
    </div>
  );
};

export default PopoverTrigger;
