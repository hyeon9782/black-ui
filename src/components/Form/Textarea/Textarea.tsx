import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { TextareaVariants, textarea } from "./Textarea.css";

type TextareaProps = TextareaVariants &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;

const Textarea = forwardRef(
  (
    { size, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea ref={ref} className={textarea({ size })} {...props}></textarea>
    );
  },
);

export default Textarea;
