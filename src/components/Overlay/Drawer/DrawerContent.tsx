import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const DrawerContent = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default DrawerContent;
