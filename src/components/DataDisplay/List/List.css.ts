import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const list = recipe({
  base: {
    display: "flex",
  },
  variants: {
    space: {
      xs: {
        gap: 5,
      },
      sm: { gap: 10 },
      md: { gap: 15 },
      lg: { gap: 20 },
      xl: { gap: 25 },
      "2xl": { gap: 30 },
    },
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    space: "sm",
    direction: "row",
  },
});

export type ListVariants = RecipeVariants<typeof list>;
