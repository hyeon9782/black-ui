import { ReactNode, useId } from "react";
import { RadioContext } from "./RadioContext";

type RadioGroupProps = {
  value?: string;
  onChange?: any;
  children: ReactNode;
};

const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  const id = useId();
  const prop = {
    ...props,
    name: id,
  };
  return (
    <div>
      <RadioContext.Provider value={prop}>{children}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
