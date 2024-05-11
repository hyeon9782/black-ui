import { ElementType, createElement, forwardRef } from "react";
type Props = {
  as: ElementType;
  className: string;
};
const Box = forwardRef<HTMLElement, Props>(
  ({ as = "div", className, ...props }, ref) => {
    return createElement(as, {
      className,
      ...props,
      ref,
    });
  },
);

export default Box;
