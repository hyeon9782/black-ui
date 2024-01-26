import { forwardRef, useContext } from "react";
import { PinInputContext } from "./PinInput";
import { field } from "./PinInput.css";

const PinInputField = forwardRef(({ onInputChange, ...restProps }, ref) => {
  const { mask, size, ...rest } = useContext(PinInputContext);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      return;
    }

    onInputChange(value);
  };

  const handleKeyDown = (e) => {
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
});

export default PinInputField;
