import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import {
  SliderVariants,
  slider,
  sliderContainer,
  sliderRail,
  sliderFillTack,
  sliderFillWidth,
} from "./CustomSlider.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

type SliderProps = SliderVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    defaultValue?: number;
    isDisabled?: boolean;
  };
const CustomSlider = forwardRef(
  (
    { color = "gray", size = "lg", isDisabled, ...props }: SliderProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={sliderContainer}>
        <div className={sliderRail({ size, color })}></div>
        <div
          className={sliderFillTack({ size, color })}
          style={assignInlineVars({
            [sliderFillWidth]: `${props.value}%`,
          })}
        ></div>
        <input
          type="range"
          ref={ref}
          disabled={isDisabled}
          {...props}
          className={slider({ color, size })}
        />
      </div>
    );
  },
);

export default CustomSlider;
