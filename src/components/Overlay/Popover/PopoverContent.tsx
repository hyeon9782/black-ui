import { ReactNode, useContext } from "react";
import { PopoverContext } from "./Popover";
import { content } from "./Popover.css";

type Props = {
  children: ReactNode;
};

const PopoverContent = ({ children }: Props) => {
  const { isVisible, popoverRef, contentPosition } = useContext(PopoverContext);

  return (
    <div
      ref={popoverRef}
      className={content({ isVisible })}
      style={{
        top: `${contentPosition.top}px`,
        left: `${contentPosition.left}px`,
      }}
    >
      {children}
    </div>
  );
};

export default PopoverContent;
