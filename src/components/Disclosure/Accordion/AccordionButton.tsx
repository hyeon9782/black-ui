import React, { ReactNode, useContext } from "react";
import { AccordionContext } from "./Accordion";
type Props = {
  children: ReactNode;
  index: number;
};
const AccordionButton = ({ children, index }: Props) => {
  const { changeIndex } = useContext(AccordionContext);
  return <div onClick={() => changeIndex(index)}>{children}</div>;
};

export default AccordionButton;
