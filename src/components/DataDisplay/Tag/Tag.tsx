import { ReactNode } from "react";
import { TagVariants, tag } from "./Tag.css";

type TagProps = TagVariants & {
  children: ReactNode;
};
const Tag = ({ children, color, variant, ...props }: TagProps) => {
  return (
    <div className={tag({ color, variant })} {...props}>
      {children}
    </div>
  );
};

export default Tag;
