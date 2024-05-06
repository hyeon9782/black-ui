import { PropsWithChildren } from "react";
import { TagVariants, tag } from "./Tag.css";

const Tag = ({
  children,
  color = "gray",
  variant = "outline",
  ...props
}: PropsWithChildren<TagVariants>) => {
  return (
    <div className={tag({ color, variant })} {...props}>
      {children}
    </div>
  );
};

export default Tag;
