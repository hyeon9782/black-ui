import {
  ForwardedRef,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";
import { TooltipVariants, wrap } from "./Tooltip.css";
import { usePopper } from "@/hooks";

type TooltipContexProps = TooltipVariants & {
  triggerRef: ForwardedRef<HTMLDivElement>;
  tooltipRef: ForwardedRef<HTMLDivElement>;
  contentPosition: {
    top: number;
    left: number;
  };
  isOpen: boolean;
};

const TooltipContext = createContext<TooltipContexProps | null>(null);

const Tooltip = ({
  children,
  bg,
  ...props
}: PropsWithChildren<TooltipVariants>) => {
  const {
    isOpen,
    onOpen,
    onClose,
    triggerRef,
    contentRef: tooltipRef,
    contentPosition,
  } = usePopper();

  return (
    <TooltipContext.Provider
      value={{ triggerRef, tooltipRef, contentPosition, isOpen }}
    >
      <div
        className={wrap}
        onPointerEnter={onOpen}
        onPointerLeave={onClose}
        {...props}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

export default Tooltip;

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("There is no TooltipContext");
  }
  return context;
};
