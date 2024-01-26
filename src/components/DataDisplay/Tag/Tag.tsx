import { ReactNode } from "react";
import { TagVariants, tag } from "./Tag.css";

type TagProps = TagVariants & {
  children: ReactNode;
};
const Tag = ({ children, color, variant }: TagProps) => {
  return <div className={tag({ color, variant })}>{children}</div>;
};

export default Tag;
