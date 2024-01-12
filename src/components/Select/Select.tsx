import { MouseEvent, useState } from "react";
import { select } from "./Select.css";
type SelectProps = {
  options: string[];
};
const Select = ({ options }: SelectProps) => {
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
    <section className={select({})}>
      <button onClick={toggleOpen}>{selectedItem ?? "open Me!"}</button>
      {open && (
        <section>
          {options.map((option, idx) => {
            return (
              <div
                key={idx}
                onClick={selectItem}
                className={`optionItem ${
                  selectedItem === option && "selected"
                }`}
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
