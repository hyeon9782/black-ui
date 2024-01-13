import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const iconButton = recipe({
  base: {},
  variants: {
    color: {
      black: sprinkles({ color: "black" }),
      red: sprinkles({ color: "red" }),
    },
  },
});

export type IconButtonVariants = RecipeVariants<typeof iconButton>;
