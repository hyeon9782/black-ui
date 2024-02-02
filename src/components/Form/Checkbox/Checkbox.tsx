import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { CheckboxVariants, checkbox, input } from "./Checkbox.css";
type CheckboxProps = CheckboxVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    isChecked?: boolean;
  };

const Checkbox = forwardRef(
  (
    { children, color, size, isChecked, readOnly, ...props }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <label
        className={checkbox({
          color,
          size,
        })}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          readOnly={readOnly}
          className={input()}
          {...props}
          style={{ backgroundColor: "red" }}
        />
        <span>{children}</span>
      </label>
    );
  },
);

export default Checkbox;

/*

1. 비제어 컴포넌트로 check or uncheck
2. 제어 컴포넌트로 check or uncheck
3. disabled, readonly, required 
4. defaultChecked => O
5. custom color => O
6. size => O

*/
