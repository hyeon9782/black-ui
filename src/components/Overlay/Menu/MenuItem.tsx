import {
  ForwardedRef,
  KeyboardEvent,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMenuContext } from "./Menu";
import { item } from "./Menu.css";
type MenuItemProps = {
  onClick?: () => void;
};

/*

1. MenuItem으로 직접 ref를 전달할 경우 기존의 ref와 합성하는 hook 만들기

*/

const MenuKeybaord = ["ArrowDown", "ArrowUp", "Enter", "Home", "End"];
const MenuItem = forwardRef(
  (
    { children, onClick }: PropsWithChildren<MenuItemProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { toggleMenu, currentIndex, changeIndex, itemRefs } =
      useMenuContext();

    const itemRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
      if (itemRef?.current && itemRefs?.current) {
        itemRefs?.current.push(itemRef.current);
        setIndex(itemRefs.current.indexOf(itemRef?.current));
        return () => {
          if (itemRef.current) {
            const index = itemRefs.current.indexOf(itemRef?.current);
            if (index !== -1) {
              itemRefs?.current.splice(index, 1);
            }
          }
        };
      }
    }, [itemRefs, itemRef]);

    const handleClick = () => {
      if (onClick) {
        onClick();
      }
      toggleMenu();
    };

    const handleMouse = () => {
      changeIndex(index);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (!MenuKeybaord.includes(e.key) || !itemRefs?.current) return;
      const menuItemCount = itemRefs?.current.length;
      e.preventDefault();
      let nextIndex = 0;

      switch (e.key) {
        case "ArrowDown":
          nextIndex = (index + 1) % menuItemCount;
          break;
        case "ArrowUp":
          nextIndex = (index - 1 + menuItemCount) % menuItemCount;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = menuItemCount - 1;
          break;
      }

      if (e.key === "Enter") {
        handleClick();
        nextIndex = index;
      }
      itemRefs?.current[nextIndex].focus();
      changeIndex(nextIndex);
    };
    return (
      <div
        ref={itemRef}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouse}
        className={item({ selected: index === currentIndex })}
      >
        {children}
      </div>
    );
  },
);

export default MenuItem;
