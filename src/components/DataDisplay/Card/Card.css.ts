import { vars } from "@/css/vars.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const card = recipe({
  base: {
    padding: 10,
    borderRadius: vars.radii.md,
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
      elevated: {
        boxShadow: vars.shadows["xs"],
      },
      outline: {
        border: "1px solid lightgray",
      },
      filled: {
        backgroundColor: "lightgray",
      },
      unstyled: {},
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});

export type CardVariants = RecipeVariants<typeof card>;
