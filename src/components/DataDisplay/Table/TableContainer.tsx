import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TableContainer = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default TableContainer;
