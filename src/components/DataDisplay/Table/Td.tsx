import { ChildrenProps } from "@/types";
import { td } from "./Table.css";
import { useContext } from "react";
import { TableContext } from "./Table";

const Td = ({ children }: ChildrenProps) => {
  const { size } = useContext(TableContext);
  return <td className={td({ size })}>{children}</td>;
};

export default Td;
