import {
  ForwardedRef,
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

const MenuItem = forwardRef(
  (
    { children, onClick }: PropsWithChildren<MenuItemProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { toggleMenu, currentIndex, changeIndex, handleKeyDown, itemRefs } =
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

    return (
      <div
        ref={itemRef}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => handleKeyDown(e, handleClick)}
        onMouseEnter={handleMouse}
        className={item({ selected: index === currentIndex })}
      >
        {children}
      </div>
    );
  },
);

export default MenuItem;
