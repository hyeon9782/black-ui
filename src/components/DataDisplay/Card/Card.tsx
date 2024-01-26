import { ReactNode } from "react";
import { CardVariants, card } from "./Card.css";
type CardProps = CardVariants & {
  children: ReactNode;
};
const Card = ({ children, variant }: CardProps) => {
  return <div className={card({ variant })}>{children}</div>;
};

export default Card;
