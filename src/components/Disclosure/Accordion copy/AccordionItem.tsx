import React, { ForwardedRef, ReactNode, forwardRef, useId } from "react";
import { item } from "./Accordion.css";
type Props = {
  children: ReactNode;
  index?: number;
  isDisabled?: boolean;
};
const AccordionItem = forwardRef(
  (
    { children, index, isDisabled }: Props,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
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
              ref,
            });
          }
          return child;
        })}
      </div>
    );
  },
);

export default AccordionItem;
