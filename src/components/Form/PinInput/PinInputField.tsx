import {
  ChangeEvent,
  ForwardedRef,
  KeyboardEvent,
  forwardRef,
  useContext,
} from "react";
import { PinInputContext } from "./PinInput";
import { field } from "./PinInput.css";
type PinInputProps = {
  onInputChange?: (value: number | string) => void;
  otp?: boolean;
  isDisabled?: boolean;
};

const PinInputField = forwardRef(
  (
    { onInputChange = () => {}, otp, isDisabled, ...props }: PinInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { mask, size, ...rest } = useContext(PinInputContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === "") {
        return;
      }

      onInputChange(value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        console.log("백");

        onInputChange("");
      }
    };

    return (
      <input
        aria-label="Please enter your pin code"
        ref={ref}
        disabled={isDisabled}
        type={mask ? "password" : "text"}
        className={field({ size })}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={1}
        autoComplete={otp ? "one-time-code" : "off"}
        {...props}
        {...rest}
      />
    );
  },
);

export default PinInputField;
