import { spinnerRotation } from "@/css/animation.css";
import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const spin = recipe({
  base: {
    animationName: spinnerRotation,
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
