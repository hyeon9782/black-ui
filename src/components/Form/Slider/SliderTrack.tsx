import React, { ReactNode, useContext } from "react";
import { SliderContext } from "./Slider";
import { track } from "./Slider.css";
type SliderTrackProps = {
  children: ReactNode;
};
const SliderTrack = ({ children }: SliderTrackProps) => {
  const { handleChange, currentValue } = useContext(SliderContext);

  return (
    <div className={track({})}>
      <input
        type="range"
        min={0}
        max={100}
        value={currentValue}
        onChange={handleChange}
      />
      {children}
    </div>
  );
};

export default SliderTrack;
