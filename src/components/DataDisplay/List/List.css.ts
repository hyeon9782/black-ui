import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const list = recipe({
  base: {
    display: "flex",
    margin: 0,
    padding: 0,
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
    direction: "column",
  },
});

export const item = recipe({
  base: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  variants: {},
});

export const icon = recipe({
  base: {
    display: "flex",
    alignItems: "center",
  },
  variants: {
    color: {
      green: { color: "green" },
      red: { color: "red" },
    },
  },
});

export type ListVariants = RecipeVariants<typeof list>;

export type ListIconVariants = RecipeVariants<typeof icon>;
