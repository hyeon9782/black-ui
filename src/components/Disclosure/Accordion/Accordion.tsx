import {
  KeyboardEvent,
  PropsWithChildren,
  RefObject,
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
  handleKeyDown: () => void;
  accordionRefs: RefObject<HTMLButtonElement[]>;
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
  const accordionRefs = useRef<HTMLButtonElement[]>([]);

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
    const length = accordionRefs.current.length;
    const target = event.target as HTMLButtonElement;
    const currentIndex = accordionRefs.current.indexOf(target);

    event.preventDefault();

    let nextIndex = 0;

    switch (event.key) {
      case "ArrowDown":
        nextIndex = (currentIndex + 1) % length;
        break;
      case "ArrowUp":
        nextIndex = (currentIndex - 1 + length) % length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = accordionRefs.current.length - 1;
        break;
    }

    accordionRefs.current[nextIndex].focus();
  };

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
