import { ReactNode, createContext, useState } from "react";

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

  const showMenu = () => setIsVisible(true);
  const hideMenu = () => setIsVisible(false);

  const value = {
    ...props,
    isVisible,
    showMenu,
    hideMenu,
  };

  return (
    <div>
      <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    </div>
  );
};

export default Menu;

/*

1. animation 추가
2. placement 추가 및 수정
3. css 속성 vars & sprinkles로 수정
4. MenuButton 스타일링
5. MenuItem 스타일링

*/
