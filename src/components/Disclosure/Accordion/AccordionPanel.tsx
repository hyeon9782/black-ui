import { ReactNode, useContext } from "react";
import { AccordionContext } from "./Accordion";
import { panel } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
};
const AccordionPanel = ({ children, index = 0 }: Props) => {
  const { indexes } = useContext(AccordionContext);

  return (
    <div className={panel({ isOpen: indexes?.includes(index) })}>
      {children}
    </div>
  );
};

export default AccordionPanel;
