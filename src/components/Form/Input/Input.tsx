import { InputHTMLAttributes, useContext } from "react";
import { InputVariants, input } from "./Input.css";
import { FormContext } from "../FormControl/FormControl";

export type InputProps = InputVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Input = ({
  size = "md",
  variant = "outline",
  readOnly,
  ...props
}: InputProps) => {
  const { id } = useContext(FormContext);

  console.log(id);

  return (
    <input
      {...props}
      id={id}
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
