import {
  Children,
  KeyboardEvent,
  ReactNode,
  cloneElement,
  isValidElement,
  useContext,
} from "react";
import { MenuContext } from "./Menu";
import { list } from "./Menu.css";
type MenuListProps = {
  children: ReactNode;
};
const MenuList = ({ children, ...props }: MenuListProps) => {
  const { isVisible, changeIndex, itemRefs } = useContext(MenuContext);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemRefs?.current.includes(el)) {
      itemRefs?.current.push(el);
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement>,
    index: number,
    onClick: () => void,
  ) => {
    const menuItemCount = Children.count(children);
    if (e.key === "ArrowDown") {
      e.preventDefault();

      const nextIndex = (index + 1) % menuItemCount;

      itemRefs?.current[nextIndex].focus();

      changeIndex(nextIndex);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      const nextIndex = (index - 1 + menuItemCount) % menuItemCount;

      itemRefs?.current[nextIndex].focus();

      changeIndex(nextIndex);
    }

    if (e.key === "Tab") {
      changeIndex((index + 1) % menuItemCount);
    }

    if (e.key === "Enter") {
      onClick();
      changeIndex(index);
    }
  };

  return (
    <div className={list({ isVisible })} {...props}>
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, {
              ...child.props,
              index,
              handleKeyDown,
              ref: (el: HTMLDivElement) => addToRefs(el),
            })
          : child,
      )}
    </div>
  );
};

export default MenuList;
