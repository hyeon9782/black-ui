import { forwardRef, ForwardedRef } from "react";
import { useCustomSelectContext } from "./CustomSelect";
import { selectItem } from "./CustomSelect.css";

type CustomSelectItemProps = {
  value: string;
  children: string;
};

const CustomSelectItem = forwardRef(
  (
    { children, value, ...props }: CustomSelectItemProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { choiceItem, selectedValue, changeItem } = useCustomSelectContext();
    return (
      <div
        ref={ref}
        {...props}
        onMouseOver={() => changeItem({ value, label: children })}
        className={selectItem({ selected: selectedValue.label === children })}
        onClick={() => choiceItem({ value, label: children })}
      >
        {children}
      </div>
    );
  },
);

export default CustomSelectItem;
