import { ReactNode, createContext, useRef, useState } from "react";
import { menu } from "./Menu.css";

type MenuContextProps = {
  toggleMenu: () => void;
  focusedIndex: number;
  isVisible: boolean;
  handleFocus: (index: number) => void;
  setFocusedIndex: any;
  addToRefs: any;
};

export const MenuContext = createContext<MenuContextProps>({
  toggleMenu: () => {},
  focusedIndex: 0,
  isVisible: false,
  handleFocus: () => {},
  setFocusedIndex: () => {},
  addToRefs: () => {},
});

type MenuProps = {
  children: ReactNode;
};
const Menu = ({ children, ...props }: MenuProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
    setFocusedIndex(0);
  };

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const handleFocus = (index: number) => {
    itemRefs.current[index].focus();
  };

  const value = {
    isVisible,
    toggleMenu,
    focusedIndex,
    setFocusedIndex,
    addToRefs,
    handleFocus,
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
