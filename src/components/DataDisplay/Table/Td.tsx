import { ChildrenProps } from "@/types";
import { td } from "./Table.css";
import { useTableContext } from "./Table";

const Td = ({ children }: ChildrenProps) => {
  const { size } = useTableContext();
  return <td className={td({ size })}>{children}</td>;
};

export default Td;
