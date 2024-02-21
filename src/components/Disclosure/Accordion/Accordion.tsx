import {
  Children,
  KeyboardEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { accordion } from "./Accordion.css";

type AccordionContextProps = {
  allowToggle?: boolean;
  allowMultiple?: boolean;
  onChange?: () => void;
  handleOpenItem: (value: string) => void;
  handleCloseItem: (value: string) => void;
  handleResetItem: () => void;
  values: string[];
  handleKeyDown?: (e: any, index: number) => void;
};

export const AccordionContext = createContext<AccordionContextProps | null>(
  null,
);

export type AccordionProps = {
  allowMultiple?: boolean;
  allowToggle?: boolean;
  onChange?: () => void;
  value?: string | string[];
  defaultValue?: string | string[];
};

const Accordion = ({
  children,
  allowMultiple,
  allowToggle,
  onChange,
  defaultValue = "",
}: PropsWithChildren<AccordionProps>) => {
  const defaultValues: string[] = Array.isArray(defaultValue)
    ? defaultValue
    : [defaultValue];
  const [values, setValues] = useState<string[]>(defaultValues || []);

  const handleOpenItem = (value: string) => {
    setValues((prevValues) => [...prevValues, value]);
  };

  const handleCloseItem = (value: string) => {
    setValues((prevValues) =>
      prevValues.filter((prevValue) => prevValue !== value),
    );
  };

  const handleResetItem = () => {
    setValues([]);
  };

  const value = {
    onChange,
    allowMultiple,
    allowToggle,
    handleOpenItem,
    handleCloseItem,
    handleResetItem,

    values,
    refs,
  };
  return (
    <div className={accordion}>
      <AccordionContext.Provider value={value}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export default Accordion;
