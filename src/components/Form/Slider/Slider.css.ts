import { vars } from "@/css/vars.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const slider = recipe({
  base: {},
  variants: {
    size: {
      xs: {
        zoom: 1,
      },
      sm: {
        zoom: 1.5,
      },
      md: {
        zoom: 2,
      },
      lg: {
        zoom: 3,
      },
    },
    color: {
      red: {
        accentColor: vars.colors.red,
      },
      black: {
        accentColor: vars.colors.black,
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "red",
  },
});

export type SliderVariants = RecipeVariants<typeof slider>;
