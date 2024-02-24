import { PropsWithChildren } from "react";
import { container } from "./Table.css";

const TableContainer = ({ children }: PropsWithChildren) => {
  return <div className={container}>{children}</div>;
};

export default TableContainer;
