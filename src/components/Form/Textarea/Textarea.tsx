import { TextareaHTMLAttributes } from "react";
import { TextareaVariants, textarea } from "./Textarea.css";

type TextareaProps = TextareaVariants &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;

const Textarea = ({ size, ...props }: TextareaProps) => {
  return <textarea className={textarea({ size })} {...props}></textarea>;
};

export default Textarea;
