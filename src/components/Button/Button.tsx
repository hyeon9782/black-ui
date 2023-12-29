import React from "react";
import { button } from "./Button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}
const Button: React.FC<ButtonProps> = ({ size, ...props }) => {
  return (
    <button
      {...props}
      className={button({
        size,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
