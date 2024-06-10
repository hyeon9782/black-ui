import { HTMLAttributes, PropsWithChildren } from "react";
import { CardVariants, card } from "./Card.css";

type CardProps = HTMLAttributes<HTMLDivElement> & CardVariants;

const Card = ({
  children,
  variant = "outline",
  size = "md",
  align,
  justify,
  direction,
  ...props
}: PropsWithChildren<CardProps>) => {
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
