import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";

export const radio = recipe({
  base: sprinkles({
    display: "flex",
    alignItems: "center",
    fontSize: "0",
    cursor: {
      base: "auto",
      disabled: "not-allowed",
    },
    opacity: {
      base: "1",
      disabled: "0.5",
    },
  }),
  variants: {
    size: {
      xs: sprinkles({
        zoom: 1,
      }),
      sm: sprinkles({
        zoom: 1.5,
      }),
      md: sprinkles({
        zoom: 2,
      }),
      lg: sprinkles({
        zoom: 3,
      }),
    },
    direction: {
      row: sprinkles({
        display: "flex",
        flexDirection: "row",
      }),
      colunm: {
        display: "flex",
        flexDirection: "column",
      },
    },
    color: {
      red: sprinkles({
        accentColor: "redSecondary",
      }),
      black: sprinkles({
        accentColor: "black",
      }),
      gray: sprinkles({
        accentColor: "gray",
      }),
      orange: sprinkles({
        accentColor: "orangeSecondary",
      }),
      green: sprinkles({
        accentColor: "greenSecondary",
      }),
      blue: sprinkles({
        accentColor: "blueSecondary",
      }),
    },
  },
});

export type RadioVariants = RecipeVariants<typeof radio>;
