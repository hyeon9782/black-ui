import React, { ReactNode, useContext } from "react";
import { AccordionContext } from "./Accordion";
type Props = {
  children: ReactNode;
  index: number;
};
const AccordionPanel = ({ children, index }: Props) => {
  const { currentIndex } = useContext(AccordionContext);
  return (
    <div
      style={
        currentIndex === index ? { display: "block" } : { display: "none" }
      }
    >
      {children}
    </div>
  );
};

export default AccordionPanel;
