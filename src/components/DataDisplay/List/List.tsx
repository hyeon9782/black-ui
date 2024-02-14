import { ReactNode } from "react";
import { ListVariants, list } from "./List.css";
export type ListProps = ListVariants & {
  children?: ReactNode;
};
const List = ({ children, direction, space, ...props }: ListProps) => {
  return (
    <ul className={list({ direction, space })} {...props}>
      {children}
    </ul>
  );
};

export default List;
