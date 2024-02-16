import { ReactNode } from "react";
import { container } from "./Table.css";

type Props = {
  children: ReactNode;
};

const TableContainer = ({ children }: Props) => {
  return <div className={container}>{children}</div>;
};

export default TableContainer;
