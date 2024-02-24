import { td } from "./Table.css";
import { useTableContext } from "./Table";
import { PropsWithChildren } from "react";

const Td = ({ children }: PropsWithChildren) => {
  const { size } = useTableContext();
  return <td className={td({ size })}>{children}</td>;
};

export default Td;
