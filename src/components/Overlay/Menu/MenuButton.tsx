import { KeyboardEvent, PropsWithChildren } from "react";
import { useMenuContext } from "./Menu";
import { button } from "./Menu.css";

const MenuButton = ({ children }: PropsWithChildren) => {
  const { toggleMenu, itemRefs, isVisible, variant } = useMenuContext();

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isVisible) {
      toggleMenu();
    } else {
      itemRefs?.current[0].focus();
    }
  };

  return (
    <button
      onClick={toggleMenu}
      onKeyDown={handleKeyDown}
      className={button({ variant })}
    >
      {children}
    </button>
  );
};

export default MenuButton;
