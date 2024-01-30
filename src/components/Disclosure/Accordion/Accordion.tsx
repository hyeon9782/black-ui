import React, { ReactNode, createContext, useState } from "react";

type AccordionContextProps = {
  currentIndex: number;
  changeIndex: (index: number) => void;
  allowMultiple?: boolean;
  checkIndex: (index: number) => boolean;
  toggleIndex: (index: number) => void;
  indexes: number[];
};

export const AccordionContext = createContext<AccordionContextProps>({
  currentIndex: 0,
  changeIndex: (index: number) => {
    console.log(index);
  },
  checkIndex: (index: number) => {
    console.log(index);
    return false;
  },
  toggleIndex: (index: number) => {
    console.log(index);
  },
  indexes: [],
  allowMultiple: false,
});

type AccordionProps = {
  children: ReactNode;
  allowMultiple?: boolean;
  defaultIndex?: number | number[];
};

const Accordion = ({ children, allowMultiple }: AccordionProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
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
    <div>
      <AccordionContext.Provider value={prop}>
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                ...child.props,
                index,
              })
            : child
        )}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;

/*

1. ref를 통한 비제어 컴포넌트 구현
2. 비즈니스 로직 리팩토링


*/
