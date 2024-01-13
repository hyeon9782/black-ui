import { ChangeEvent, InputHTMLAttributes, useContext, useId } from "react";
import { RadioVariants, radio } from "./Radio.css";
import { RadioContext } from "./RadioContext";

type RadioProps = RadioVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Radio = ({
  children,
  size,
  color,
  disabled,

  ...props
}: RadioProps) => {
  const id = useId();
  const { name, onChange } = useContext(RadioContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("들어옴");

    if (onChange) {
      console.log("들어옴11");
      onChange(e.target.value);
    }
  };

  return (
    <div
      className={radio({
        size,
        color,
        disabled,
      })}
    >
      <input
        type="radio"
        id={id}
        disabled={disabled}
        {...props}
        name={name}
        onChange={handleChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default Radio;
