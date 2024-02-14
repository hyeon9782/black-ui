import {
  ReactNode,
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useState,
} from "react";
import { TooltipVariants, tooltip, wrap } from "./Tooltip.css";
import { useTooltip } from "./useTooltip";
type TooltipProps = TooltipVariants & {
  children: ReactNode;
  label: string;
};
const Tooltip = ({ children, label }: TooltipProps) => {
  const { isOpen, onClose, onOpen, triggerRef, tooltipRef } = useTooltip();

  const [contentPosition, setContentPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const trigger = triggerRef.current;
    const popover = tooltipRef.current;

    if (isOpen && trigger !== null && popover !== null) {
      const triggerRect = trigger.getBoundingClientRect();
      const popoverRect = popover.getBoundingClientRect();

      console.log(triggerRect.height);

      setContentPosition({
        top: triggerRect.height + 10,
        left: (triggerRect.width - popoverRect.width) / 2,
      });
    }
  }, [isOpen]);

  return (
    <div className={wrap} onPointerEnter={onOpen} onPointerLeave={onClose}>
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
          className={tooltip({ isOpen })}
        >
          {label}
        </div>
      }
    </div>
  );
};

export default Tooltip;

/*

1. animation 추가
2. placement 추가 및 수정
3. css 속성 vars & sprinkles로 수정

*/
