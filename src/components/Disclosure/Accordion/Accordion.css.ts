import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const accordion = recipe({
  base: {},
  variants: {},
  compoundVariants: [],
});

export type AccordionVariants = RecipeVariants<typeof accordion>;
