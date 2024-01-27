import { style, keyframes } from "@vanilla-extract/css";
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
        fontSize: "1rem",
      },
      sm: {
        fontSize: "2rem",
      },
      md: {
        fontSize: "3rem",
      },
      lg: {
        fontSize: "4rem",
      },
      xl: {
        fontSize: "5rem",
      },
      "2xl": {
        fontSize: "6rem",
      },
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export type SpinVariants = RecipeVariants<typeof spin>;
