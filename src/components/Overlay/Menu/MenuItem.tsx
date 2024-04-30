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

const MenuItem = forwardRef(
  (
    { children, onClick }: PropsWithChildren<MenuItemProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const { currentIndex, changeIndex, handleKeyDown, itemRefs, onClose } =
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
      onClose();
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
