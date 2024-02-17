import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const slider = recipe({
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
  defaultVariants: {
    size: "md",
    color: "red",
  },
});

export type SliderVariants = RecipeVariants<typeof slider>;
