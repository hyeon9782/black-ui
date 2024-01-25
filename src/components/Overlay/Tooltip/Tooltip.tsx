import { ReactNode, useState } from "react";
import { TooltipVariants, tooltip, wrap } from "./Tooltip.css";
type TooltipProps = TooltipVariants & {
  children: ReactNode;
  label: string;
};
const Tooltip = ({ children, label, placement, bg }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);
  return (
    <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip} className={wrap}>
      {children}
      {isVisible && <div className={tooltip({ placement, bg })}>{label}</div>}
    </div>
  );
};

export default Tooltip;

/*

1. animation 추가
2. placement 추가 및 수정
3. css 속성 vars & sprinkles로 수정

*/
