import { ChildrenProps } from "@/types";
import { th } from "./Table.css";
import { TableContext } from "./Table";
import { useContext } from "react";

const Th = ({ children }: ChildrenProps) => {
  const { size } = useContext(TableContext);
  return <th className={th({ size })}>{children}</th>;
};

export default Th;
