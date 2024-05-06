import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { TextareaVariants, textarea } from "./Textarea.css";

type TextareaProps = TextareaVariants &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & {
    isDisabled?: boolean;
    isReadOnly?: boolean;
  };

const Textarea = forwardRef(
  (
    { size = "md", isDisabled, isReadOnly, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        ref={ref}
        className={textarea({ size })}
        disabled={isDisabled || isReadOnly}
        {...props}
      ></textarea>
    );
  },
);

export default Textarea;
