import { PropsWithChildren } from "react";
import { useTooltipContext } from "./Tooltip";

const TooltipTrigger = ({ children }: PropsWithChildren) => {
  const { triggerRef } = useTooltipContext();
  return <div ref={triggerRef}>{children}</div>;
};

export default TooltipTrigger;
