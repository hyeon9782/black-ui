import { PropsWithChildren } from "react";
import { BadgeVariants, badge } from "./Badge.css";

const Badge = ({
  children,
  color,
  size,
  variant,
  ...props
}: PropsWithChildren<BadgeVariants>) => {
  return (
    <div className={badge({ color, size, variant })} {...props}>
      {children}
    </div>
  );
};

export default Badge;
