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
};

const PinInputField = forwardRef(
  (
    { onInputChange, ...restProps }: PinInputProps,
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
        console.log("지우기");

        onInputChange("");
      }
    };

    return (
      <input
        ref={ref}
        type={mask ? "password" : "text"}
        className={field({ size })}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={1}
        {...restProps}
        {...rest}
      />
    );
  },
);

export default PinInputField;
