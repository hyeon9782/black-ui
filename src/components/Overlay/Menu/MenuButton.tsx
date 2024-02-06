import { KeyboardEvent, ReactNode, useContext } from "react";
import { MenuContext } from "./Menu";
import { button } from "./Menu.css";

type MenuButtonProps = {
  children: ReactNode;
};

const MenuButton = ({ children }: MenuButtonProps) => {
  const { toggleMenu, handleFocus, isVisible } = useContext(MenuContext);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isVisible) {
      toggleMenu();
    } else {
      handleFocus(0);
    }
  };

  return (
    <button
      onClick={toggleMenu}
      onKeyDown={handleKeyDown}
      className={button({})}
    >
      {children}
    </button>
  );
};

export default MenuButton;
