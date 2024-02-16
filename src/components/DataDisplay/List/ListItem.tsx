import { ReactNode } from "react";
import { item } from "./List.css";

const ListItem = ({ children }: { children: ReactNode }) => {
  return <li className={item}>{children}</li>;
};

export default ListItem;
