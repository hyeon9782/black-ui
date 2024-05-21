import { useState, useRef, useEffect, PropsWithChildren } from "react";
import { scrollArea } from "./ScrollArea.css";

const ScrollArea = ({ children }: PropsWithChildren) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollTop);
        setIsScrolling(true);
      }
    };

    const handleScrollEnd = () => {
      setIsScrolling(false);
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
      scrollContainerRef.current.addEventListener("scrollend", handleScrollEnd);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
        scrollContainerRef.current.removeEventListener(
          "scrollend",
          handleScrollEnd,
        );
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className={scrollArea({})}
      style={{
        height: "200px",
        overflow: "auto",
        backgroundColor: isScrolling ? "lightgray" : "white",
      }}
    >
      <span>{scrollPosition}</span>
      <div style={{ height: "400px" }}>{children}</div>
    </div>
  );
};

export default ScrollArea;
