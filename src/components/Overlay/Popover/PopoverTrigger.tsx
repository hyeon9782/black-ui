import { ReactNode, useContext } from "react";
import { PopoverContext } from "./Popover";
type Props = {
  children: ReactNode;
};
const PopoverTrigger = ({ children }: Props) => {
  const { togglePopover, triggerRef } = useContext(PopoverContext);
  return (
    <div ref={triggerRef} onClick={togglePopover}>
      {children}
    </div>
  );
};

export default PopoverTrigger;
