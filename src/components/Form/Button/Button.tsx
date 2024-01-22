import { ButtonHTMLAttributes } from "react";
import { ButtonVariants, button } from "./Button.css";

export type ButtonProps = ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  variant = "solid",
  size = "md",
  color = "black",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={button({
        size,
        variant,
        color,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
