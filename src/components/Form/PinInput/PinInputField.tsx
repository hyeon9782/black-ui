import {
  ChangeEvent,
  ForwardedRef,
  KeyboardEvent,
  Ref,
  forwardRef,
  useState,
} from "react";
import { usePinInputContext } from "./PinInput";
import { field } from "./PinInput.css";
import useCollectRefs from "@/hooks/useCollectRefs";
import useMergeRefs from "@/hooks/useMergeRefs";
type PinInputProps = {
  isDisabled?: boolean;
};

const PinInputField = forwardRef(
  ({ isDisabled, ...props }: PinInputProps, ref: ForwardedRef<HTMLElement>) => {
    const { mask, size, otp, handleFocus, inputRefs, ...rest } =
      usePinInputContext();

    const [index, setIndex] = useState(-1);

    const setter = (index: number) => {
      setIndex(index);
    };

    const { ref: inputRef } = useCollectRefs({ refs: inputRefs, setter });

    const mergedRef = useMergeRefs(inputRef, ref);

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
        ref={mergedRef as Ref<HTMLInputElement>}
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
