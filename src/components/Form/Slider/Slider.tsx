import { ForwardedRef, forwardRef } from "react";
import { SliderVariants, slider } from "./Slider.css";

type SliderProps = SliderVariants & {
  defaultValue?: number;
};

const Slider = forwardRef(
  ({ color, ...props }: SliderProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input type="range" ref={ref} {...props} className={slider({ color })} />
    );
  },
);

export default Slider;
