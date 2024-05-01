import { PropsWithChildren, forwardRef, ForwardedRef } from "react";

const CustomSelectItem = forwardRef(
  (
    { children, ...props }: PropsWithChildren,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

export default CustomSelectItem;
