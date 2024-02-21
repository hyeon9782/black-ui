import { ChildrenProps } from "@/types";
import { th } from "./Table.css";
import { useTableContext } from "./Table";

const Th = ({ children }: ChildrenProps) => {
  const { size } = useTableContext();
  return <th className={th({ size })}>{children}</th>;
};

export default Th;
