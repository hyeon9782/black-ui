import { PropsWithChildren } from "react";
import { content } from "./Carousel.css";

const CarouselContent = ({ children }: PropsWithChildren) => {
  return <div className={content({})}>{children}</div>;
};

export default CarouselContent;
