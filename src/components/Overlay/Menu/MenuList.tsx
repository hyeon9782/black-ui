import { ReactNode, useContext } from "react";
import { MenuContext } from "./Menu";
type MenuListProps = {
  children: ReactNode;
};
const MenuList = ({ children }: MenuListProps) => {
  const { isVisible } = useContext(MenuContext);
  return isVisible && <div>{children}</div>;
};

export default MenuList;
