import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const list = recipe({
  base: sprinkles({ display: "flex", margin: "0", padding: "0" }),
  variants: {
    space: {
      xs: sprinkles({
        gap: "px",
      }),
      sm: sprinkles({
        gap: "0.5",
      }),
      md: sprinkles({
        gap: "0.75",
      }),
      lg: sprinkles({
        gap: "1",
      }),
      xl: sprinkles({
        gap: "1.5",
      }),
      "2xl": sprinkles({
        gap: "2",
      }),
    },
    direction: {
      row: sprinkles({ flexDirection: "row" }),
      column: sprinkles({ flexDirection: "column" }),
    },
  },
  defaultVariants: {
    space: "md",
    direction: "column",
  },
});

export const item = sprinkles({
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "flex",
  alignItems: "center",
  gap: "2",
});

export const icon = recipe({
  base: sprinkles({ display: "flex", alignItems: "center" }),
  variants: {
    color: {
      gray: sprinkles({
        color: "gray400",
      }),
      red: sprinkles({
        color: "redPrimary",
      }),
      green: sprinkles({
        color: "greenPrimary",
      }),
      blue: sprinkles({
        color: "bluePrimary",
      }),
      orange: sprinkles({
        color: "orangePrimary",
      }),
    },
  },
  defaultVariants: {
    color: "gray",
  },
});

export type ListVariants = RecipeVariants<typeof list>;

export type ListIconVariants = RecipeVariants<typeof icon>;
