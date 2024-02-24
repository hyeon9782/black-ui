import { PropsWithChildren } from "react";

const CardHeader = ({ children }: PropsWithChildren) => {
  return <header>{children}</header>;
};

export default CardHeader;
