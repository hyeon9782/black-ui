import { ChildrenProps } from "@/types";
import { td } from "./Table.css";

const Td = ({ children }: ChildrenProps) => {
  return <td className={td}>{children}</td>;
};

export default Td;
