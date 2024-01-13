import { vars } from "@/css/vars.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const card = recipe({
  base: {
    boxShadow: vars.shadows["xs"],
  },
  variants: {
    color: {
      black: {},
      red: {},
    },
    aligin: {},
    direction: {},
    justify: {},
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
    },
    variant: {
      elevated: {},
      outline: {},
      filled: {},
      unstyled: {},
    },
  },
});

export type CardVariants = RecipeVariants<typeof card>;
