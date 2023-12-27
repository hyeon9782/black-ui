import React from "react";
import { button } from "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  return (
    <button {...props} className={button({})}>
      {props.children}
    </button>
  );
};

export default Button;
