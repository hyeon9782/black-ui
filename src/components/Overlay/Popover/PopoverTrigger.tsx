import { ReactNode, useContext } from "react";
import { PopoverContext } from "./Popover";
type Props = {
  children: ReactNode;
};
const PopoverTrigger = ({ children }: Props) => {
  const { showPopover } = useContext(PopoverContext);
  return <div onClick={showPopover}>{children}</div>;
};

export default PopoverTrigger;
