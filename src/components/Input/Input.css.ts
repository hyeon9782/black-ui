import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "../../css/vars.css";

export const input = recipe({
  base: {
    backgroundColor: vars.colors.white,
    border: "none",
    outline: "none",
  },
  variants: {
    size: {
      xs: {
        fontSize: "small",
      },
      sm: { fontSize: "medium" },
      md: { fontSize: "large" },
      lg: { fontSize: "x-large" },
    },
    variant: {
      outline: {},
      filled: {},
      flushed: {},
      unstyled: {},
    },
    readOnly: {
      true: {
        backgroundColor: vars.colors.gray,
      },
      false: {},
    },
  },
  compoundVariants: [],
});

export type InputVariants = RecipeVariants<typeof input>;
