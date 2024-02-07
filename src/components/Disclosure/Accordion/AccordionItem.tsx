import React, { ReactNode } from "react";
import { item } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
  isDisabled?: boolean;
};
const AccordionItem = ({ children, index, isDisabled }: Props) => {
  return (
    <div className={item({ isDisabled })}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            index,
            isDisabled,
          });
        }
        return child;
      })}
    </div>
  );
};

export default AccordionItem;
