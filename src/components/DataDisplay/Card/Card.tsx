import { ReactNode } from "react";
import { CardVariants, card } from "./Card.css";
type CardProps = CardVariants & {
  children: ReactNode;
};
const Card = ({ children, variant, ...props }: CardProps) => {
  return (
    <div className={card({ variant })} {...props}>
      {children}
    </div>
  );
};

export default Card;
