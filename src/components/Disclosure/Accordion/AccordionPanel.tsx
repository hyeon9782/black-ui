import { ForwardedRef, PropsWithChildren, forwardRef } from "react";
import { useAccordionContext } from "./Accordion";
import { panel } from "./Accordion.css";
import { useAccordionItemContext } from "./AccordionItem";

const AccordionPanel = forwardRef(
  ({ children }: PropsWithChildren, ref: ForwardedRef<HTMLDivElement>) => {
    const { values } = useAccordionContext();
    const { value, id } = useAccordionItemContext();

    return (
      <div
        className={panel({ isOpen: values?.includes(value) })}
        id={id}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export default AccordionPanel;
