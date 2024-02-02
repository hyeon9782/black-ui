import { KeyboardEvent, useRef, useState } from "react";
import { SelectVariants, select, selectOption } from "./Select.css";
import { IoIosArrowDown } from "react-icons/io";
type SelectProps = SelectVariants & {
  options: string[];
  label: string;
  selectedItem?: string;
  onSelect?: any;
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

  const allOptions = [label, ...options];

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    console.log(ref.current);
  };

  const selectItem = (value: string) => {
    onSelect(value);
    toggleOpen();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (
      (open && event.key === "ArrowUp") ||
      (open && event.key === "ArrowDown")
    ) {
      event.preventDefault();
      console.log(ref.current);

      const currentIndex = allOptions.indexOf(selectedItem);

      let nextIndex;

      if (event.key === "ArrowUp") {
        nextIndex = (currentIndex - 1 + allOptions.length) % allOptions.length;
      } else {
        nextIndex = (currentIndex + 1) % allOptions.length;
      }

      onSelect(allOptions[nextIndex]);
    }
  };

  return (
    <section style={{ width: "100%" }}>
      <button
        ref={ref}
        disabled={isDisabled || isReadOnly}
        className={select({ size, variant })}
        onClick={toggleOpen}
        {...props}
        onKeyDown={(e) => handleKeyDown(e)}
      >
        {selectedItem ? selectedItem : label}

        <IoIosArrowDown />
      </button>
      {open && (
        <section>
          <div
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
      )}
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
