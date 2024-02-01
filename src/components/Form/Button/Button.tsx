import {
  ButtonHTMLAttributes,
  JSXElementConstructor,
  ReactElement,
} from "react";
import { ButtonVariants, button } from "./Button.css";
import { Spinner } from "@/components/Feedback";

export type ButtonProps = ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    leftIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
    rightIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
    isLoading?: boolean;
    isDisabled?: boolean;
    loadingText?: string;
  };

const Button = ({
  variant = "solid",
  size = "md",
  color = "black",
  leftIcon,
  rightIcon,
  onClick,
  isLoading,
  isDisabled,
  loadingText,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      {...props}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading}
      className={button({
        size,
        variant,
        color,
      })}
    >
      {isLoading ? (
        <>
          <Spinner size={size} /> {loadingText}
        </>
      ) : (
        <>
          {leftIcon}
          {props.children}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
