import {
  ForwardedRef,
  PropsWithChildren,
  Ref,
  forwardRef,
  useState,
} from "react";
import { useMenuContext } from "./Menu";
import { item } from "./Menu.css";
import useCollectRefs from "@/hooks/useCollectRefs";
import useMergeRefs from "@/hooks/useMergeRefs";
type MenuItemProps = {
  onClick?: () => void;
};

/*

1. MenuItem으로 직접 ref를 전달할 경우 기존의 ref와 합성하는 hook 만들기

*/

const MenuItem = forwardRef(
  (
    { children, onClick }: PropsWithChildren<MenuItemProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const { toggleMenu, currentIndex, changeIndex, handleKeyDown, itemRefs } =
      useMenuContext();

    const [index, setIndex] = useState(-1);

    const setter = (index: number) => {
      setIndex(index);
    };

    const { ref: itemRef } = useCollectRefs({ refs: itemRefs, setter });

    const mergedRef = useMergeRefs(itemRef, ref);

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
        ref={mergedRef as Ref<HTMLDivElement>}
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
