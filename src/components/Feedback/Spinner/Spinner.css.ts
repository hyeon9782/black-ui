import { keyframes } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spin = recipe({
  base: {
    animationName: rotate,
    animationDuration: "1s",
    animationIterationCount: "infinite",
  },
  variants: {
    size: {
      xs: {
        fontSize: "0.5rem",
      },
      sm: {
        fontSize: "1rem",
      },
      md: {
        fontSize: "1.5rem",
      },
      lg: {
        fontSize: "2rem",
      },
      xl: {
        fontSize: "2.5rem",
      },
      "2xl": {
        fontSize: "3rem",
      },
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export type SpinVariants = RecipeVariants<typeof spin>;
