import {
  ForwardedRef,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useContext,
} from "react";
import { MenuContext } from "./Menu";
import { item } from "./Menu.css";
type MenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
  index?: number;
  handleKeyDown?: (e: any, index: number, onClick: () => void) => void;
};
const MenuItem = forwardRef(
  (
    { children, onClick, index = 0, handleKeyDown = () => {} }: MenuItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { toggleMenu, currentIndex, changeIndex } = useContext(MenuContext);
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
      toggleMenu();
    };

    const handleMouse = () => {
      changeIndex(index);
    };
    return (
      <div
        ref={ref}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => handleKeyDown(e, index, handleClick)}
        onMouseEnter={handleMouse}
        className={item({ selected: index === currentIndex })}
      >
        {children}
      </div>
    );
  },
);

export default MenuItem;
