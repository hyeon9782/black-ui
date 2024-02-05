import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useContext,
} from "react";
import { InputVariants, input } from "./Input.css";
import { FormContext } from "../FormControl/FormControl";

export type InputProps = InputVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    isDisabled?: boolean;
    isReadOnly?: boolean;
  };

const Input = forwardRef(
  (
    {
      size = "md",
      variant = "outline",
      isReadOnly,
      isDisabled,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { id } = useContext(FormContext);

    return (
      <input
        ref={ref}
        {...props}
        id={id}
        disabled={isDisabled}
        readOnly={isReadOnly}
        className={input({
          size,
          variant,
          isReadOnly,
        })}
      />
    );
  },
);

export default Input;
