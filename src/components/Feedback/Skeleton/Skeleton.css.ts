import { backgroundPosition } from "@/css/animation.css";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const skeletonWidth = createVar();

export const skeletonHeight = createVar();

export const skeletonBackground = createVar();

export const skeletonRadius = createVar();

export const skeletonPlaceholder = style({
  boxSizing: "border-box",
  width: skeletonWidth,
  height: skeletonHeight,
  borderRadius: skeletonRadius,
  background: `linear-gradient(90deg,
    ${skeletonBackground || "#f0f0f0"} 25%,
    #e0e0e0 50%,
    ${skeletonBackground || "#f0f0f0"} 75%
  )`,
  backgroundSize: "200% 100%",
  animationName: backgroundPosition,
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
});
