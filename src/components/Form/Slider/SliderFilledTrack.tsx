import React, { useContext } from "react";
import { SliderContext } from "./Slider";
import { filledTrack } from "./Slider.css";

const SliderFilledTrack = () => {
  const { size, color, currentValue } = useContext(SliderContext);
  return (
    <div
      className={filledTrack({ size, color })}
      style={{
        width: `${currentValue}%`,
      }}
    ></div>
  );
};

export default SliderFilledTrack;
