import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const progress = style({
  position: "relative",
  width: "100%",
  backgroundColor: "#EDF2F7",
});

export const inner = recipe({
  base: {},
  variants: {
    color: {
      blue: {
        backgroundColor: "blue",
      },
      green: {
        backgroundColor: "green",
      },
      red: {
        backgroundColor: "red",
      },
    },
    size: {
      sm: {
        height: "0.5rem",
      },
      md: {
        height: "0.75rem",
      },
      lg: {
        height: "1rem",
      },
    },
  },
  defaultVariants: {
    color: "blue",
    size: "md",
  },
});

export type InnerVariants = RecipeVariants<typeof inner>;
