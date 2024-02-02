import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useContext,
} from "react";
import { InputVariants, input } from "./Input.css";
import { FormContext } from "../FormControl/FormControl";

export type InputProps = InputVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Input = forwardRef(
  (
    { size = "md", variant = "outline", readOnly, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { id } = useContext(FormContext);

    return (
      <input
        ref={ref}
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
  },
);

export default Input;
