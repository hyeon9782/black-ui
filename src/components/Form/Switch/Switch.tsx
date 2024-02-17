import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import {
  LabelVariants,
  SwitchVariants,
  customSwitch,
  label,
} from "./Switch.css";

type SwitchProps = SwitchVariants &
  LabelVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Switch = forwardRef(
  (
    { size = "xs", color = "green", children, ...props }: SwitchProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <label className={label({ size })}>
        <input
          type="checkbox"
          ref={ref}
          className={customSwitch({ color })}
          {...props}
        />
        <span>{children}</span>
      </label>
    );
  },
);

export default Switch;
