import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "@/css/vars.css";

export const checkbox = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    fontSize: "11px",
    gap: vars.space["1"],
    selectors: {
      "&:disabled": {
        cursor: "not-allowed",
        opacity: "0.5",
      },
    },
  },
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
      black: {
        accentColor: vars.colors.black,
      },
      red: {
        accentColor: vars.colors.red,
      },
    },
  },
});

export const input = recipe({
  base: {
    margin: 0,
  },
});

export type CheckboxVariants = RecipeVariants<typeof checkbox>;
