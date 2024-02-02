import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { SwitchVariants, customSwitch } from "./Switch.css";

type SwitchProps = SwitchVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Switch = forwardRef(
  (
    { size = "xs", color = "green", children, ...props }: SwitchProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <label>
        <input
          type="checkbox"
          ref={ref}
          className={customSwitch({ size, color })}
          {...props}
        />
        {children}
      </label>
    );
  },
);

export default Switch;
