import { sprinkles } from "@/css/sprinkles.css";
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
      xs: sprinkles({
        fontSize: "0",
      }),
      sm: sprinkles({
        fontSize: "2",
      }),
      md: sprinkles({
        fontSize: "6",
      }),
      lg: sprinkles({
        fontSize: "8",
      }),
      xl: sprinkles({
        fontSize: "10",
      }),
      "2xl": sprinkles({
        fontSize: "11",
      }),
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

export type SpinVariants = RecipeVariants<typeof spin>;
