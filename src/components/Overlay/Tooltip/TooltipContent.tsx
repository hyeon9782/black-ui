import { PropsWithChildren } from "react";
import { useTooltipContext } from "./Tooltip";
import { tooltip } from "./Tooltip.css";

const TooltipContent = ({ children }: PropsWithChildren) => {
  const { tooltipRef, contentPosition, isOpen, bg } = useTooltipContext();
  return (
    <div
      ref={tooltipRef}
      style={{
        position: "absolute",
        top: `${contentPosition.top}px`,
        left: `${contentPosition.left}px`,
      }}
      className={tooltip({ isOpen, bg })}
    >
      {children}
    </div>
  );
};

export default TooltipContent;
