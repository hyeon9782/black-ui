import { ForwardedRef, ReactNode, forwardRef, useContext } from "react";
import { AccordionContext } from "./Accordion";
import { panel } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
  id?: string;
};
const AccordionPanel = forwardRef(
  (
    { children, index = 0, id }: Props,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const { indexes } = useContext(AccordionContext);

    return (
      <div className={panel({ isOpen: indexes?.includes(index) })} id={id}>
        {children}
      </div>
    );
  },
);

export default AccordionPanel;
