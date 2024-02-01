import { MouseEvent, forwardRef, useState } from "react";
import { SelectVariants, select } from "./Select.css";
type SelectProps = SelectVariants & {
  options: string[];
  label: string;
};
const Select = forwardRef(
  ({ options, label, size, variant, ...props }: SelectProps, ref) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const toggleOpen = () => {
      setOpen((prev) => !prev);
    };

    const selectItem = (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;

      setSelectedItem(target.textContent);
      toggleOpen();
    };

    return (
      <section>
        <button
          className={select({ size, variant })}
          onClick={toggleOpen}
          {...props}
        >
          {selectedItem ?? label}
        </button>
        {open && (
          <section>
            <div onClick={selectItem}>{label}</div>
            {options.map((option, idx) => {
              return (
                <div key={idx} onClick={selectItem}>
                  {option}
                </div>
              );
            })}
          </section>
        )}
      </section>
    );
  },
);

export default Select;
