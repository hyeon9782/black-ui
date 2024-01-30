import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
  index?: number;
};
const AccordionItem = ({ children, index }: Props) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // AccordionButton과 AccordionPanel에 index prop 전달
      return React.cloneElement(child, { ...child.props, index });
    }
    return child;
  });
};

export default AccordionItem;
