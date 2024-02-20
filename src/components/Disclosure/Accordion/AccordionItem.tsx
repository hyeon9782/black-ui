import React, { ReactNode, useId } from "react";
import { item } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
  isDisabled?: boolean;
};
const AccordionItem = ({ children, index, isDisabled }: Props) => {
  const id = useId();
  return (
    <div className={item({ isDisabled })}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            index,
            isDisabled,
            id,
          });
        }
        return child;
      })}
    </div>
  );
};

export default AccordionItem;
