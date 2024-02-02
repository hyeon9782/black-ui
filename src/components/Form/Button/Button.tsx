import {
  ButtonHTMLAttributes,
  ForwardedRef,
  JSXElementConstructor,
  ReactElement,
  forwardRef,
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

const Button = forwardRef(
  (
    {
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
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        onClick={onClick}
        ref={ref}
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
  },
);

export default Button;
