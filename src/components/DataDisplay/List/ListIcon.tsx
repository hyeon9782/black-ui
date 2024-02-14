import { ReactElement } from "react";
import { ListIconVariants, icon } from "./List.css";

type ListIconProps = ListIconVariants & {
  as: ReactElement;
};

const ListIcon = ({ as, color }: ListIconProps) => {
  return <div className={icon({ color })}>{as}</div>;
};

export default ListIcon;
