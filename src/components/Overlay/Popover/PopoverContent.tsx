import { ReactNode, useContext } from "react";
import { PopoverContext } from "./Popover";
import { popover } from "./Popover.css";

type Props = {
  children: ReactNode;
};

const PopoverContent = ({ children }: Props) => {
  const { isVisible, placement } = useContext(PopoverContext);
  return isVisible && <div className={popover({ placement })}>{children}</div>;
};

export default PopoverContent;
