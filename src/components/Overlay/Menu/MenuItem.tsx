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
  menuItemCount?: number;
};
const MenuItem = forwardRef(
  (
    { children, onClick, index = 0, menuItemCount = 0 }: MenuItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { toggleMenu, focusedIndex, handleFocus, setFocusedIndex } =
      useContext(MenuContext);
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
      toggleMenu();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();

        const index = (focusedIndex + 1) % menuItemCount;

        handleFocus(index);

        setFocusedIndex(index);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();

        const index = (focusedIndex - 1 + menuItemCount) % menuItemCount;

        handleFocus(index);
        setFocusedIndex(index);
      } else if (e.key === "Enter") {
        handleClick();
        setFocusedIndex(index);
      }
    };

    const handleMouse = () => {
      handleFocus(index);

      setFocusedIndex(index);
    };
    return (
      <div
        ref={ref}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouse}
        className={item({ selected: index === focusedIndex })}
      >
        {children}
      </div>
    );
  },
);

export default MenuItem;
