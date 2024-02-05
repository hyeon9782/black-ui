import {
  Children,
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
const MenuList = ({ children }: MenuListProps) => {
  const { isVisible, addToRefs } = useContext(MenuContext);

  return (
    <div className={list({ isVisible })}>
      {Children.map(children, (child, index) =>
        isValidElement(child)
          ? cloneElement(child, {
              ...child.props,
              index,
              menuItemCount: Children.count(children),
              ref: (el: HTMLDivElement) => addToRefs(el),
            })
          : child,
      )}
    </div>
  );
};

export default MenuList;
