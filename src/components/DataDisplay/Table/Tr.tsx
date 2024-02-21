import { ChildrenProps } from "@/types";
import { tr } from "./Table.css";
import { useTableContext } from "./Table";

const Tr = ({ children }: ChildrenProps) => {
  const { variant } = useTableContext();
  return <tr className={tr({ variant })}>{children}</tr>;
};

export default Tr;
