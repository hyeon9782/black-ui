import { vars } from "@/css/vars.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const slider = recipe({
  base: {},
  variants: {
    color: {
      red: {
        accentColor: vars.colors.red,
      },
      black: {
        accentColor: vars.colors.black,
      },
    },
  },
});

export type SliderVariants = RecipeVariants<typeof slider>;
