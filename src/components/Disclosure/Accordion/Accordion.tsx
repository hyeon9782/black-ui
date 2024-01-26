import React, { ReactNode, createContext, useState } from "react";
import { accordion } from "./Accordion.css";

type AccordionContextProps = {
  currentIndex: number;
  changeIndex: (index: number | undefined) => void;
  allowMultiple?: boolean;
  checkIndex: (index: number | undefined) => boolean;
  toggleIndex: (index: number | undefined) => void;
  indexes: number[];
};

export const AccordionContext = createContext<AccordionContextProps>({
  currentIndex: 0,
  changeIndex: () => {},
  checkIndex: () => false,
  toggleIndex: () => {},
  indexes: [],
});

type AccordionProps = {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultIndex?: number | number[];
};

const Accordion = ({ children, allowMultiple }: AccordionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexes, setIndexes] = useState<number[]>([]);

  const changeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleIndex = (index: number) => {
    if (indexes.includes(index)) {
      setIndexes((prevIndexes) =>
        prevIndexes.filter((prevIndex) => prevIndex !== index)
      );
    } else {
      setIndexes((prevIndexes) => [...prevIndexes, index]);
    }
  };

  const checkIndex = (index: number) => {
    if (allowMultiple) {
      return indexes.includes(index);
    }
    return currentIndex === index;
  };

  const prop = {
    currentIndex,
    changeIndex,
    toggleIndex,
    checkIndex,
    allowMultiple,
    indexes,
  };
  return (
    <div className={accordion({})}>
      <AccordionContext.Provider value={prop}>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { index })
            : child
        )}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;

/*

1. allowMultiple props를 통해 열리는 메커니즘 추가 => O
2. type 에러 해결

*/
