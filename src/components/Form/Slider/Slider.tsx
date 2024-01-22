import { ReactNode, createContext, useState } from "react";
import { slider } from "./Slider.css";

export const SliderContext = createContext({});

type SliderProps = {
  children: ReactNode;
  defaultValue?: number;
};

const Slider = ({ children, defaultValue = 0, ...props }: SliderProps) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setCurrentValue(newValue);
  };

  const prop = {
    currentValue,
    handleChange,
    ...props,
  };

  return (
    <div className={slider({})}>
      <SliderContext.Provider value={prop}>{children}</SliderContext.Provider>
    </div>
  );
};

export default Slider;
