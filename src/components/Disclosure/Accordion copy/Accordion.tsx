import React, {
  Children,
  KeyboardEvent,
  ReactNode,
  createContext,
  useRef,
  useState,
} from "react";
import { accordion } from "./Accordion.css";

type AccordionContextProps = {
  allowToggle?: boolean;
  allowMultiple?: boolean;
  onChange?: () => void;
  appendIndex: (index: number) => void;
  removeIndex: (index: number) => void;
  resetIndex: () => void;
  indexes?: number[];
  handleKeyDown?: (e: any, index: number) => void;
};

export const AccordionContext = createContext<AccordionContextProps>({
  appendIndex: () => {},
  removeIndex: () => {},
  resetIndex: () => {},
});

export type AccordionProps = {
  children?: ReactNode;
  allowMultiple?: boolean;
  allowToggle?: boolean;
  onChange?: () => void;
  index?: number | number[];
  defaultIndex?: number | number[];
};

const Accordion = ({
  children,
  allowMultiple,
  allowToggle,
  onChange,
  defaultIndex = -1,
}: AccordionProps) => {
  const indexArray: number[] = Array.isArray(defaultIndex)
    ? defaultIndex
    : [defaultIndex];

  const [indexes, setIndexes] = useState<number[]>(indexArray || []);
  const refs = useRef<HTMLButtonElement[]>([]);

  const addToRefs = (el: HTMLButtonElement) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const count = Children.count(children);
    let nextIndex = 0;
    switch (e.key) {
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = refs.current.length - 1;
        break;
      case "ArrowDown":
        nextIndex = (index + 1) % count;
        break;
      case "ArrowUp":
        nextIndex = (index - 1 + count) % count;
        break;
      default:
        nextIndex = index;
    }

    refs.current[nextIndex].focus();
  };

  const appendIndex = (index: number) => {
    setIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  const removeIndex = (index: number) => {
    setIndexes((prevIndexes) =>
      prevIndexes.filter((prevIndex) => prevIndex !== index),
    );
  };

  const resetIndex = () => {
    setIndexes([]);
  };

  const prop = {
    onChange,
    allowMultiple,
    allowToggle,
    appendIndex,
    removeIndex,
    resetIndex,
    indexes,
    handleKeyDown,
  };
  return (
    <div className={accordion}>
      <AccordionContext.Provider value={prop}>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                ...child.props,
                index,
                ref: (el: HTMLButtonElement) => addToRefs(el),
              })
            : child,
        )}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
