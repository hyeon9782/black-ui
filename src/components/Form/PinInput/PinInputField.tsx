import {
  ChangeEvent,
  ForwardedRef,
  KeyboardEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePinInputContext } from "./PinInput";
import { field } from "./PinInput.css";
type PinInputProps = {
  isDisabled?: boolean;
};

const PinInputField = forwardRef(
  (
    { isDisabled, ...props }: PinInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const { mask, size, otp, handleFocus, inputRefs, ...rest } =
      usePinInputContext();
    const inputRef = useRef<HTMLInputElement>(null);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
      if (inputRef?.current && inputRefs?.current) {
        inputRefs.current.push(inputRef.current);
        setIndex(inputRefs.current.indexOf(inputRef.current));
        return () => {
          if (inputRef.current && inputRefs.current) {
            const index = inputRefs.current.indexOf(inputRef.current);
            if (index !== -1) {
              inputRefs.current.splice(index, 1);
            }
          }
        };
      }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === "") {
        return;
      }

      handleFocus(index, value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        console.log("백");

        handleFocus(index, "");
      }
    };

    return (
      <input
        aria-label="Please enter your pin code"
        ref={inputRef}
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
