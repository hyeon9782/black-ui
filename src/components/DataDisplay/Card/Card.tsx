import { ReactNode } from "react";
import { CardVariants, card } from "./Card.css";
type CardProps = CardVariants & {
  children: ReactNode;
};
const Card = ({
  children,
  variant,
  size,
  align,
  justify,
  direction,
  ...props
}: CardProps) => {
  return (
    <article
      className={card({ variant, size, align, justify, direction })}
      {...props}
    >
      {children}
    </article>
  );
};

export default Card;
