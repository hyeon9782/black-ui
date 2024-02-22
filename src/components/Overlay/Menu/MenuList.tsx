import { PropsWithChildren } from "react";
import { useMenuContext } from "./Menu";
import { list } from "./Menu.css";

const MenuList = ({ children, ...props }: PropsWithChildren) => {
  const { isVisible } = useMenuContext();

  return (
    <div className={list({ isVisible })} {...props}>
      {children}
    </div>
  );
};

export default MenuList;
