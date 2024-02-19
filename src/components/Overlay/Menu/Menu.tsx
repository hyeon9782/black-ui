import {
  MutableRefObject,
  ReactNode,
  createContext,
  useRef,
  useState,
} from "react";
import { menu } from "./Menu.css";
import { useOutsideClick } from "@/hooks";

type MenuContextProps = {
  toggleMenu: () => void;
  isVisible: boolean;
  currentIndex: number;
  changeIndex: (index: number) => void;
  itemRefs?: MutableRefObject<HTMLDivElement[]>;
};

export const MenuContext = createContext<MenuContextProps>({
  toggleMenu: () => {},
  isVisible: false,
  currentIndex: 0,
  changeIndex: () => {},
});

type MenuProps = {
  children: ReactNode;
};
const Menu = ({ children, ...props }: MenuProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const itemRefs = useRef<HTMLDivElement[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onClose = () => {
    setIsVisible(false);
  };

  const { ref } = useOutsideClick({ callback: onClose });

  const toggleMenu = () => {
    setIsVisible(!isVisible);
    setCurrentIndex(0);
  };

  const changeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const value = {
    isVisible,
    toggleMenu,
    currentIndex,
    changeIndex,
    itemRefs,
  };

  return (
    <div {...props} className={menu} ref={ref}>
      <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    </div>
  );
};

export default Menu;

/*

1. hover시 css 변경
2. keyboard 이벤트로 hover 효과

*/
