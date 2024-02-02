import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "@/css/vars.css";

export const textarea = recipe({
  base: {
    border: "1px solid #E2E8F0",
    color: "gray",
    borderRadius: vars.radii.md,
    padding: vars.space["2"],
    selectors: {
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "0.5",
      },
      "&:focus": {
        outline: "2px solid blue",
      },
    },
  },
  variants: {
    size: {
      xs: {
        fontSize: vars.fontSizes[0],
      },
      sm: {
        fontSize: vars.fontSizes[2],
      },
      md: {
        fontSize: vars.fontSizes[4],
      },
      lg: {
        fontSize: vars.fontSizes[6],
      },
    },
  },
});

export type TextareaVariants = RecipeVariants<typeof textarea>;
