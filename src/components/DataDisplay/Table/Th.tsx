import { th } from "./Table.css";
import { useTableContext } from "./Table";
import { PropsWithChildren } from "react";

const Th = ({ children }: PropsWithChildren) => {
  const { size } = useTableContext();
  return <th className={th({ size })}>{children}</th>;
};

export default Th;
