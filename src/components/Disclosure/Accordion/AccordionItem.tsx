import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const AccordionItem = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default AccordionItem;
