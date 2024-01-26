import { ChildrenProps } from "@/types";
import { th } from "./Table.css";

const Th = ({ children }: ChildrenProps) => {
  return <th className={th}>{children}</th>;
};

export default Th;
