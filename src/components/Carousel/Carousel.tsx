import { PropsWithChildren, createContext, useState } from "react";
import { root } from "./Carousel.css";

const CarouselContext = createContext({});

const Carousel = ({ slides, children }: PropsWithChildren<{ slides: [] }>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const value = {
    currentIndex,
    handlePrevClick,
    handleNextClick,
  };
  return (
    <div className={root({})}>
      <CarouselContext.Provider value={value}>
        {children}
      </CarouselContext.Provider>
    </div>
  );
};

export default Carousel;
