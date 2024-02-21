import { PropsWithChildren } from "react";
import { usePopoverContext } from "./Popover";
import { content } from "./Popover.css";

const PopoverContent = ({ children }: PropsWithChildren) => {
  const { isVisible, popoverRef, contentPosition } = usePopoverContext();

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
