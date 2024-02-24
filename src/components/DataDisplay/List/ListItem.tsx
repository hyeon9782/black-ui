import { PropsWithChildren } from "react";
import { item } from "./List.css";

const ListItem = ({ children }: PropsWithChildren) => {
  return <li className={item}>{children}</li>;
};

export default ListItem;
