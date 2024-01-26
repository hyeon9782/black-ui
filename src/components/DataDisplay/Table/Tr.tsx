import { ChildrenProps } from "@/types";
import { tr } from "./Table.css";
import { TableContext } from "./Table";
import { useContext } from "react";

const Tr = ({ children }: ChildrenProps) => {
  const { variant } = useContext(TableContext);
  return <tr className={tr({ variant })}>{children}</tr>;
};

export default Tr;
