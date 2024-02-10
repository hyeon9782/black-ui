import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { SliderVariants, slider } from "./Slider.css";

type SliderProps = SliderVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    defaultValue?: number;
    isDisabled?: boolean;
  };

const Slider = forwardRef(
  (
    { color, size, isDisabled, ...props }: SliderProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        type="range"
        ref={ref}
        disabled={isDisabled}
        {...props}
        className={slider({ color, size })}
      />
    );
  },
);

export default Slider;
