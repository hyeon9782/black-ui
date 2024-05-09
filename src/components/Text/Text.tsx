import { PropsWithChildren } from "react";
import { TextVariants, text } from "./Text.css";

const Text = ({ children, fontSize }: PropsWithChildren<TextVariants>) => {
  return <span className={text({ fontSize })}>{children}</span>;
};

export default Text;
