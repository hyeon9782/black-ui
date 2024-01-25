import { ReactNode, createContext, useState } from "react";
import { popover } from "./Popover.css";

type PopoverContextProps = {
  isVisible?: boolean;
  showPopover?: () => void;
  hidePopover?: () => void;
  placement?: string;
};

export const PopoverContext = createContext<PopoverContextProps>({});

type PopoverProps = {
  children: ReactNode;
  placement?: string;
};
const Popover = ({ children, placement }: PopoverProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showPopover = () => setIsVisible(true);
  const hidePopover = () => setIsVisible(false);

  const value = {
    isVisible,
    showPopover,
    hidePopover,
    placement,
  };

  return (
    <div className={popover({})}>
      <PopoverContext.Provider value={value}>
        {children}
      </PopoverContext.Provider>
    </div>
  );
};

export default Popover;

/*

1. animation 추가
2. placement 추가 및 수정
3. css 속성 vars & sprinkles로 수정

*/
