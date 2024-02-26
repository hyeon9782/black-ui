import {
  ForwardedRef,
  PropsWithChildren,
  createContext,
  forwardRef,
  useContext,
  useId,
} from "react";
import { item } from "./Accordion.css";
type Props = {
  value: string;
  isDisabled?: boolean;
};
type AccordionItemContextProps = {
  value: string;
  id: string;
  isDisabled?: boolean;
};

export const AccordionItemContext =
  createContext<AccordionItemContextProps | null>(null);

const AccordionItem = forwardRef(
  (
    { children, value, isDisabled }: PropsWithChildren<Props>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const id = useId();
    return (
      <div className={item({ isDisabled })} ref={ref}>
        <AccordionItemContext.Provider value={{ value, id, isDisabled }}>
          {children}
        </AccordionItemContext.Provider>
      </div>
    );
  },
);

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export default AccordionItem;
