import { TextareaHTMLAttributes } from "react";
import { TextareaVariants, textarea } from "./Textarea.css";

type TextareaProps = TextareaVariants &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;

const Textarea = ({ disabled, size, ...props }: TextareaProps) => {
  return (
    <textarea
      className={textarea({ size, disabled })}
      disabled={disabled}
      {...props}
    ></textarea>
  );
};

export default Textarea;
