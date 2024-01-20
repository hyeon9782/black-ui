import { ReactNode } from "react";
import { BadgeVariants, badge } from "./Badge.css";
type BadgeProps = BadgeVariants & {
  children: ReactNode;
};
const Badge = ({ children, color, size, variant }: BadgeProps) => {
  return <div className={badge({ color, size, variant })}>{children}</div>;
};

export default Badge;
