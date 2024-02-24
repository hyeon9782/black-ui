import { PropsWithChildren } from "react";
import { usePopoverContext } from "./Popover";

const PopoverTrigger = ({ children }: PropsWithChildren) => {
  const { togglePopover, triggerRef } = usePopoverContext();
  return (
    <div ref={triggerRef} onClick={togglePopover}>
      {children}
    </div>
  );
};

export default PopoverTrigger;
