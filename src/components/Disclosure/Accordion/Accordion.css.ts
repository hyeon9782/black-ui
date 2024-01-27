import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const accordion = recipe({
  base: {
    width: "100%",
  },
  variants: {},
  compoundVariants: [],
});

export const button = style({
  width: "100%",
  padding: "10px 15px",
  selectors: {
    "&:hover": {
      backgroundColor: "lightgray",
    },
  },
});

export const panel = style({
  padding: "10px 15px",
});

export type AccordionVariants = RecipeVariants<typeof accordion>;
