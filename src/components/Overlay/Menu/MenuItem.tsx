import { ReactNode, useContext } from "react";
import { MenuContext } from "./Menu";
type MenuItemProps = {
  children: ReactNode;
  onClick?: () => void;
};
const MenuItem = ({ children, onClick }: MenuItemProps) => {
  const { hideMenu } = useContext(MenuContext);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    hideMenu();
  };
  return <div onClick={handleClick}>{children}</div>;
};

export default MenuItem;
