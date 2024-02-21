import {
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { menu, MenuVariants } from "./Menu.css";
import { useOutsideClick } from "@/hooks";

type MenuContextProps = MenuVariants & {
  toggleMenu: () => void;
  isVisible: boolean;
  currentIndex: number;
  changeIndex: (index: number) => void;
  itemRefs?: MutableRefObject<HTMLDivElement[]>;
};

const MenuContext = createContext<MenuContextProps | null>(null);

const Menu = ({
  children,
  variant,
  ...props
}: PropsWithChildren<MenuVariants>) => {
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
    variant,
  };

  return (
    <div {...props} className={menu} ref={ref}>
      <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    </div>
  );
};

export default Menu;

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("There is no MenuContext");
  }
  return context;
};
