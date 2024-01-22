import { InputHTMLAttributes, useId } from "react";
import { CheckboxVariants, checkbox, input } from "./Checkbox.css";
type CheckboxProps = CheckboxVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Checkbox = ({ children, color, size, ...props }: CheckboxProps) => {
  const id = useId();

  return (
    <div
      className={checkbox({
        color,
        size,
      })}
    >
      <input
        type="checkbox"
        className={input()}
        {...props}
        id={id}
        style={{ backgroundColor: "red" }}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default Checkbox;
