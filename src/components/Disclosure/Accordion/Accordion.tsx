import {
  Children,
  KeyboardEvent,
  PropsWithChildren,
  createContext,
  useCallback,
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

const ACCORDION_KEYS = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
];

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

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!ACCORDION_KEYS.includes(event.key)) return;
    const target = event.target;
    event.preventDefault();
  };

  const value = {
    onChange,
    allowMultiple,
    allowToggle,
    handleOpenItem,
    handleCloseItem,
    handleResetItem,
    values,
  };
  return (
    <AccordionContext.Provider value={value}>
      <div className={accordion} onKeyDown={handleKeyDown}>
        {children}
      </div>
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
