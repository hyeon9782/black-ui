import { ReactNode, useContext } from "react";
import { MenuContext } from "./Menu";
import { list } from "./Menu.css";
type MenuListProps = {
  children: ReactNode;
};
const MenuList = ({ children }: MenuListProps) => {
  const { isVisible } = useContext(MenuContext);

  return isVisible && <div className={list({})}>{children}</div>;
};

export default MenuList;
