import { KeyboardEvent, useRef, useState } from "react";
import { SelectVariants, select, selectOption } from "./Select.css";
import { IoIosArrowDown } from "react-icons/io";
export type SelectProps = SelectVariants & {
  options: string[];
  label: string;
  selectedItem?: string;
  onSelect?: (value: string) => void;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};
const Select = ({
  options,
  label,
  size,
  variant,
  selectedItem = "",
  onSelect,
  isDisabled,
  isReadOnly,
  ...props
}: SelectProps) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const itemRefs = useRef<HTMLDivElement[]>([]);

  const allOptions = [label, ...options];

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const selectItem = (value: string) => {
    onSelect?.(value);
    toggleOpen();
  };

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLDivElement>,
    index: number,
    value: string,
  ) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();

      const nextIndex = (index + 1) % allOptions.length;

      itemRefs.current[nextIndex].focus();

      onSelect?.(allOptions[nextIndex]);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      const nextIndex = (index - 1 + allOptions.length) % allOptions.length;

      itemRefs.current[nextIndex].focus();

      onSelect?.(allOptions[nextIndex]);
    }

    if (e.key === "Tab") {
      const nextIndex = (index + 1) % allOptions.length;
      onSelect?.(allOptions[nextIndex]);
    }

    if (e.key === "Enter") {
      selectItem(value);
      onSelect?.(allOptions[index]);
    }
  };

  return (
    <section style={{ width: "100%" }}>
      <button
        ref={ref}
        disabled={isDisabled || isReadOnly}
        className={select({ size, variant })}
        onClick={toggleOpen}
        onKeyDown={() => itemRefs.current[0].focus()}
        {...props}
      >
        {selectedItem ? selectedItem : label}

        <IoIosArrowDown />
      </button>
      <section style={open ? { display: "block" } : { display: "none" }}>
        <div
          ref={(el: HTMLDivElement) => addToRefs(el)}
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, 0, label)}
          onClick={() => selectItem(label)}
          className={selectOption({
            selected: label === selectedItem,
            variant,
            size,
          })}
        >
          {label}
        </div>
        {options.map((option, idx) => {
          return (
            <div
              onKeyDown={(e) => handleKeyDown(e, idx + 1, option)}
              ref={(el: HTMLDivElement) => addToRefs(el)}
              tabIndex={0}
              key={idx}
              onClick={() => selectItem(option)}
              className={selectOption({
                selected: option === selectedItem,
                variant,
                size,
              })}
            >
              {option}
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Select;

/*

1. button click open or close => O
2. option click select item => O
3. keyboard select item => O
4. size 별로 fontSize, height => O
5. variant 별로 스타일 적용 => O
6. isDisabled, isReadOnly => O

7. outline 색상 변경, fontWeight 변경
8. options backgroundColor 변경

*/
