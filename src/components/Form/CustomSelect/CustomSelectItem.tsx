import { forwardRef, ForwardedRef } from "react";
import { useCustomSelectContext } from "./CustomSelect";

type CustomSelectItemProps = {
  value: string;
  children: string;
};

const CustomSelectItem = forwardRef(
  (
    { children, value, ...props }: CustomSelectItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { selectItem } = useCustomSelectContext();
    return (
      <div
        ref={ref}
        {...props}
        onClick={() => selectItem({ value, label: children })}
      >
        {children}
      </div>
    );
  },
);

export default CustomSelectItem;
