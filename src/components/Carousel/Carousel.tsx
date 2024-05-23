import { PropsWithChildren } from "react";
import { root } from "./Carousel.css";

const Carousel = ({ children }: PropsWithChildren) => {
  return <div className={root({})}>{children}</div>;
};

export default Carousel;
