import { PropsWithChildren } from "react";
import { item } from "./Carousel.css";

const CarouselItem = ({ children }: PropsWithChildren) => {
  return <div className={item({})}>{children}</div>;
};

export default CarouselItem;
