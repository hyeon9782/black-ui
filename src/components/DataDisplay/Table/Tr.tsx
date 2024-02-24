import { tr } from "./Table.css";
import { useTableContext } from "./Table";
import { PropsWithChildren } from "react";

const Tr = ({ children }: PropsWithChildren) => {
  const { variant } = useTableContext();
  return <tr className={tr({ variant })}>{children}</tr>;
};

export default Tr;
