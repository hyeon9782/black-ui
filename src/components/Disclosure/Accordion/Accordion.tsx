import {
  KeyboardEvent,
  PropsWithChildren,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { accordion } from "./Accordion.css";
import useKeyboardEvent from "@/hooks/useKeyboardEvent";

type AccordionContextProps = {
  allowToggle?: boolean;
  allowMultiple?: boolean;
  onChange?: () => void;
  handleOpenItem: (value: string) => void;
  handleCloseItem: (value: string) => void;
  handleResetItem: () => void;
  values: string[];
  handleKeyDown: (e: KeyboardEvent<HTMLElement>, callback?: () => void) => void;
  accordionRefs: RefObject<HTMLElement[]>;
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

const ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp"];

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

  const { refs: accordionRefs, handleKeyDown } = useKeyboardEvent({
    keyList: ACCORDION_KEYS,
  });

  const handleOpenItem = useCallback(
    (value: string) => {
      setValues((prevValues) => [...prevValues, value]);
    },
    [setValues],
  );

  const handleCloseItem = useCallback(
    (value: string) => {
      setValues((prevValues) =>
        prevValues.filter((prevValue) => prevValue !== value),
      );
    },
    [setValues],
  );

  const handleResetItem = useCallback(() => {
    setValues([]);
  }, [setValues]);

  const value = {
    onChange,
    allowMultiple,
    allowToggle,
    handleOpenItem,
    handleCloseItem,
    handleResetItem,
    handleKeyDown,
    accordionRefs,
    values,
  };
  return (
    <AccordionContext.Provider value={value}>
      <div className={accordion}>{children}</div>
    </AccordionContext.Provider>
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
