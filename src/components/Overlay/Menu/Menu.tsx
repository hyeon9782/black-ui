import { ReactNode, createContext, useState } from "react";
import { menu } from "./Menu.css";

type MenuContextProps = {
  showMenu: () => void;
  hideMenu: () => void;
  isVisible: boolean;
};

export const MenuContext = createContext<MenuContextProps>({
  showMenu: () => {},
  hideMenu: () => {},
  isVisible: false,
});

type MenuProps = {
  children: ReactNode;
};
const Menu = ({ children, ...props }: MenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const showMenu = () => {
    setIsVisible(true);
    setFocusedIndex(0);
  };
  const hideMenu = () => setIsVisible(false);

  const value = {
    isVisible,
    showMenu,
    hideMenu,
  };

  return (
    <div {...props} className={menu({})}>
      <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    </div>
  );
};

export default Menu;

/*

1. hover시 css 변경
2. keyboard 이벤트로 hover 효과

*/
