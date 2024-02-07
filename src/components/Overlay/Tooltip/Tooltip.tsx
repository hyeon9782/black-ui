import { ReactNode, cloneElement, isValidElement } from "react";
import { TooltipVariants, tooltip, wrap } from "./Tooltip.css";
import { useTooltip } from "./useTooltip";
type TooltipProps = TooltipVariants & {
  children: ReactNode;
  label: string;
};
const Tooltip = ({ children, label }: TooltipProps) => {
  const {
    isOpen,
    onClose,
    onOpen,
    tooltipHeight,
    ref,

    tooltipWidth,
  } = useTooltip();

  return (
    <div className={wrap} onPointerEnter={onOpen} onPointerLeave={onClose}>
      {isValidElement(children)
        ? cloneElement(children, {
            ...children.props,
            ref,
          })
        : children}
      {
        <div
          // ref={tooltipRef}
          style={{
            position: "absolute",
            top: tooltipHeight + 10,
            left: tooltipWidth,
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
