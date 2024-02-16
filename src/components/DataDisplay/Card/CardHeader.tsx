import { ReactNode } from "react";

const CardHeader = ({ children }: { children: ReactNode }) => {
  return <header>{children}</header>;
};

export default CardHeader;
