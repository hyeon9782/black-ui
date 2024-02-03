import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  useContext,
  useId,
} from "react";
import { RadioVariants, radio } from "./Radio.css";
import { RadioContext } from "./RadioContext";

type RadioProps = RadioVariants &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Radio = forwardRef(
  (
    { children, size, color, ...props }: RadioProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId();
    const { name, onChange } = useContext(RadioContext);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div
        className={radio({
          size,
          color,
        })}
      >
        <input
          type="radio"
          ref={ref}
          id={id}
          {...props}
          name={name}
          onChange={handleChange}
        />
        <label htmlFor={id}>{children}</label>
      </div>
    );
  },
);

export default Radio;
