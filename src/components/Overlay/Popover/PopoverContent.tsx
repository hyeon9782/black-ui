import { ReactNode, useContext } from "react";
import { PopoverContext } from "./Popover";
import { content } from "./Popover.css";

type Props = {
  children: ReactNode;
};

const PopoverContent = ({ children }: Props) => {
  const { isVisible, popoverRef, popoverStyle } = useContext(PopoverContext);

  return (
    <div
      ref={popoverRef}
      className={content({ isVisible })}
      style={{
        left: popoverStyle.left,
        top: popoverStyle.top,
      }}
    >
      {children}
    </div>
  );
};

export default PopoverContent;
