import {
  ButtonHTMLAttributes,
  ForwardedRef,
  JSXElementConstructor,
  ReactElement,
  forwardRef,
} from "react";
import { ButtonVariants, button, content } from "./Button.css";
import { Spinner } from "@/components/Feedback";

export type ButtonProps = ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    leftIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
    rightIcon?: ReactElement<any, string | JSXElementConstructor<any>>;
    isLoading?: boolean;
    isDisabled?: boolean;
    loadingText?: string;
    spinner?: ReactElement;
    spinnerPlacement?: "left" | "right";
  };

const Button = forwardRef(
  (
    {
      variant = "solid",
      size = "md",
      color = "gray",
      leftIcon,
      rightIcon,
      onClick,
      isLoading,
      isDisabled,
      loadingText,
      spinner,
      spinnerPlacement = "left",
      children,
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
          disabled: isDisabled || isLoading,
        })}
      >
        <div className={content}>
          {isLoading ? (
            <>
              {spinnerPlacement === "left" ? (
                <>
                  {spinner || <Spinner size={size} />} {loadingText}
                </>
              ) : (
                <>
                  {loadingText} {spinner || <Spinner size={size} />}
                </>
              )}
            </>
          ) : (
            <>
              {leftIcon}
              {children}
              {rightIcon}
            </>
          )}
        </div>
      </button>
    );
  },
);

export default Button;

/*

1. hover, active, disabled 스타일 적용 =>
2. size fontSize, height, padding 적용 => O 
3. variant outline, solid, ghost => O
4. color => P
5. icon left & right => O
6. isLoaidng & loadingText => O
7. 커스텀 spinner => O
8. spinnerPlacement => O

*/
