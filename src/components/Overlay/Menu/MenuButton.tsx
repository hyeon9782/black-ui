import { ReactNode, useContext } from "react";
import { MenuContext } from "./Menu";

type MenuButtonProps = {
  children: ReactNode;
};

const MenuButton = ({ children }: MenuButtonProps) => {
  const { showMenu } = useContext(MenuContext);

  return <button onClick={showMenu}>{children}</button>;
};

export default MenuButton;
