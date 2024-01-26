import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const accordion = recipe({
  base: {},
  variants: {},
  compoundVariants: [],
});

export const button = style({
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
