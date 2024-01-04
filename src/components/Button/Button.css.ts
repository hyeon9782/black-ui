import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../css/sprinkles.css";
import { vars } from "../../css/vars.css";

export const button = recipe({
  base: {
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
  variants: {
    size: {
      sm: sprinkles({ paddingX: "4px", paddingY: "8px" }),
      md: sprinkles({ paddingX: "6px", paddingY: "12px" }),
      lg: sprinkles({ paddingX: "8px", paddingY: "16px" }),
    },
    variant: {
      solid: {},
      outline: {
        borderColor: vars.colors.white,
      },
    },
    color: {
      black: {},
      red: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: "solid", color: "black" },
      style: sprinkles({}),
    },
    {
      variants: { variant: "solid", color: "red" },
      style: sprinkles({}),
    },
    {
      variants: { variant: "outline", color: "black" },
      style: sprinkles({}),
    },
    {
      variants: { variant: "outline", color: "red" },
      style: sprinkles({}),
    },
  ],
});

export type ButtonVariants = RecipeVariants<typeof button>;
