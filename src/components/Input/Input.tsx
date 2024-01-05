import { InputHTMLAttributes } from "react";
import { InputVariants, input } from "./Input.css";

export type InputProps = InputVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Input = ({
  size = "md",
  variant = "outline",
  readOnly,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      readOnly={readOnly}
      className={input({
        size,
        variant,
        readOnly,
      })}
    />
  );
};

export default Input;
