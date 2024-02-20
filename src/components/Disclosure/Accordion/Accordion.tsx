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
    console.log("나옴");
    console.log(e);
    console.log(index);

    const count = Children.count(children);

    console.log(count);

    if (e.key === "Home") {
      // e.preventDefault();
      refs.current[0].focus();
      console.log("Home");
    }

    if (e.key === "End") {
      // e.preventDefault();
      const nextIndex = refs.current.length - 1;
      refs.current[nextIndex].focus();
      console.log("End");
    }

    if (e.key === "ArrowDown") {
      // e.preventDefault();
      const nextIndex = (index + 1) % count;
      refs.current[nextIndex].focus();
      console.log("Down");
    }

    if (e.key === "ArrowUp") {
      // e.preventDefault();
      const nextIndex = (index - 1 + count) % count;
      refs.current[nextIndex].focus();
      console.log("Up");
    }
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
    // refs,
  };
  return (
    <div className={accordion}>
      <AccordionContext.Provider value={prop}>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                ...child.props,
                index,
                // handleKeyDown,
                ref: (el: HTMLButtonElement) => addToRefs(el),
              })
            : child,
        )}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;

/*

1. allowToggle => O
2. allowMultiple => O
3. defaultIndex => O
4. onChange => O
5. isDisabled => O
---------------TODO----------------------
6. keyboard 이벤트 커스텀 훅으로 묶어서 적용

*/
