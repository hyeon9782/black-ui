import { InputHTMLAttributes } from "react";
import { SwitchVariants, customSwitch } from "./Switch.css";

type SwitchProps = SwitchVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Switch = ({ size = "xs", color = "green", children }: SwitchProps) => {
  return (
    <label>
      <input type="checkbox" className={customSwitch({ size, color })} />
      {children}
    </label>
  );
};

export default Switch;
