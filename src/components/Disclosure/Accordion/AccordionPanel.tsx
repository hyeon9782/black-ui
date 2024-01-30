import { ReactNode, useContext } from "react";
import { AccordionContext } from "./Accordion";
import { panel } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
};
const AccordionPanel = ({ children, index = 0 }: Props) => {
  const { checkIndex } = useContext(AccordionContext);

  return (
    <div
      className={panel}
      style={checkIndex(index) ? { display: "block" } : { display: "none" }}
    >
      {children}
    </div>
  );
};

export default AccordionPanel;
