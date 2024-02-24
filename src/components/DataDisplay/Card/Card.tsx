import { PropsWithChildren } from "react";
import { CardVariants, card } from "./Card.css";

const Card = ({
  children,
  variant,
  size,
  align,
  justify,
  direction,
  ...props
}: PropsWithChildren<CardVariants>) => {
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
