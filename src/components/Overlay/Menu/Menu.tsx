import {
  KeyboardEvent,
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { menu, MenuVariants } from "./Menu.css";
import { useOutsideClick } from "@/hooks";
import useKeyboardEvent from "@/hooks/useKeyboardEvent";

type MenuContextProps = MenuVariants & {
  toggleMenu: () => void;
  isVisible: boolean;
  currentIndex: number;
  changeIndex: (index: number) => void;
  itemRefs: MutableRefObject<HTMLElement[]>;
  handleKeyDown: (e: KeyboardEvent<HTMLElement>, callback?: () => void) => void;
};

const MenuContext = createContext<MenuContextProps | null>(null);

const MenuKeybaord = ["ArrowDown", "ArrowUp", "Enter", "Home", "End"];
const Menu = ({
  children,
  variant,
  ...props
}: PropsWithChildren<MenuVariants>) => {
  const [isVisible, setIsVisible] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onClose = () => {
    setIsVisible(false);
  };

  const { ref } = useOutsideClick({ callback: onClose });

  const toggleMenu = useCallback(() => {
    setIsVisible(!isVisible);
    setCurrentIndex(0);
  }, []);

  const changeIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const { refs: itemRefs, handleKeyDown } = useKeyboardEvent({
    keyList: MenuKeybaord,
    changeIndex: changeIndex,
  });

  const value = {
    onClose,
    isVisible,
    toggleMenu,
    currentIndex,
    changeIndex,
    itemRefs,
    variant,
    handleKeyDown,
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
