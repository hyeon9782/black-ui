import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { SliderVariants, slider } from "./Slider.css";

type SliderProps = SliderVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    defaultValue?: number;
  };

const Slider = forwardRef(
  (
    { color, size, ...props }: SliderProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        type="range"
        ref={ref}
        {...props}
        className={slider({ color, size })}
      />
    );
  },
);

export default Slider;
