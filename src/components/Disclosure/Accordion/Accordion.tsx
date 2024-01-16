import React, { ReactNode, createContext, useState } from "react";
import { accordion } from "./Accordion.css";

export const AccordionContext = createContext({});

type Props = {
  children: ReactNode;
};

const Accordion = ({ children, ...props }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const prop = {
    currentIndex,
    changeIndex,
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
