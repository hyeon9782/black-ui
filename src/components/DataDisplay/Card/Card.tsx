import { ReactNode } from "react";
import { CardVariants, card } from "./Card.css";
type CardProps = CardVariants & {
  children: ReactNode;
};
const Card = ({ children }: CardProps) => {
  return <div className={card({})}>{children}</div>;
};

export default Card;
