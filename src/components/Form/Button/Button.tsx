import {
  ButtonHTMLAttributes,
  JSXElementConstructor,
  ReactElement,
} from "react";
import { ButtonVariants, button } from "./Button.css";

export type ButtonProps = ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    leftIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
    rightIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
  };

const Button = ({
  variant = "solid",
  size = "md",
  color = "black",
  leftIcon,
  rightIcon,
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
      {leftIcon}
      {props.children}
      {rightIcon}
    </button>
  );
};

export default Button;
