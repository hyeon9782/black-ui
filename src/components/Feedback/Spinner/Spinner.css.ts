import { style, keyframes } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spin = style({
  animationName: rotate,
  animationDuration: "1s",
  animationIterationCount: "infinite",
});
