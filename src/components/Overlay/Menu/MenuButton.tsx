import { ReactNode, useContext } from "react";
import { MenuContext } from "./Menu";
import { button } from "./Menu.css";

type MenuButtonProps = {
  children: ReactNode;
};

const MenuButton = ({ children }: MenuButtonProps) => {
  const { showMenu } = useContext(MenuContext);

  return (
    <button onClick={showMenu} className={button({})}>
      {children}
    </button>
  );
};

export default MenuButton;
