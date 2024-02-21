import { ReactNode, cloneElement, isValidElement } from "react";
import { TooltipVariants, tooltip, wrap } from "./Tooltip.css";
import { usePopper } from "@/hooks";
type TooltipProps = TooltipVariants & {
  children: ReactNode;
  label: string;
};
const Tooltip = ({ children, label, bg, ...props }: TooltipProps) => {
  const {
    isOpen,
    onOpen,
    onClose,
    triggerRef,
    contentRef: tooltipRef,
    contentPosition,
  } = usePopper();

  return (
    <div
      className={wrap}
      onPointerEnter={onOpen}
      onPointerLeave={onClose}
      {...props}
    >
      {isValidElement(children)
        ? cloneElement(children, {
            ...children.props,
            ref: triggerRef,
          })
        : children}
      {
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            top: `${contentPosition.top}px`,
            left: `${contentPosition.left}px`,
          }}
          className={tooltip({ isOpen, bg })}
        >
          {label}
        </div>
      }
    </div>
  );
};

export default Tooltip;
