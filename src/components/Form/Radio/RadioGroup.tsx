import { ReactNode, useId } from "react";
import { RadioContext } from "./RadioContext";
import { radio } from "./Radio.css";

type RadioGroupProps = {
  value?: string;
  onChange?: (value: any) => void;
  direction?: "row" | "colunm";
  children?: ReactNode;
};

const RadioGroup = ({
  children,
  direction = "colunm",
  ...props
}: RadioGroupProps) => {
  const id = useId();
  const prop = {
    ...props,
    name: id,
  };
  return (
    <div className={radio({ direction })}>
      <RadioContext.Provider value={prop}>{children}</RadioContext.Provider>
    </div>
  );
};

export default RadioGroup;
