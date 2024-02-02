import { KeyboardEvent, useState } from "react";
import { SelectVariants, select, selectOption } from "./Select.css";
import { IoIosArrowDown } from "react-icons/io";
type SelectProps = SelectVariants & {
  options: string[];
  label: string;
  selectedItem?: string;
  onSelect?: any;
};
const Select = ({
  options,
  label,
  size,
  variant,
  selectedItem = "",
  onSelect,
  ...props
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  const allOptions = [label, ...options];

  const toggleOpen = () => {
    setOpen((prev) => !prev);
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
4. size 별로 fontSize
5. variant 별로 스타일 적용
6. isDisabled, isReadOnly, isRequired
7. color

*/
