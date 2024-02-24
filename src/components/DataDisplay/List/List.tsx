import { PropsWithChildren } from "react";
import { ListVariants, list } from "./List.css";

const List = ({
  children,
  direction,
  space,
  ...props
}: PropsWithChildren<ListVariants>) => {
  return (
    <ul className={list({ direction, space })} {...props}>
      {children}
    </ul>
  );
};

export default List;
