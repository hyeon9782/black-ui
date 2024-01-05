import { ButtonHTMLAttributes } from "react";
import { ButtonVariants, button } from "./Button.css";

export type ButtonProps = ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "solid",
  size = "md",
  color = "black",
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...props}
      className={button({
        size,
        variant,
        color,
        disabled,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
