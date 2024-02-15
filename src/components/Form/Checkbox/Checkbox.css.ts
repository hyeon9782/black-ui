import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { vars } from "@/css/vars.css";
import { sprinkles } from "@/css/sprinkles.css";

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
    color: vars.colors.textSecondary,
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
      gray: sprinkles({ accentColor: "gray600" }),
      red: sprinkles({ accentColor: "redSecondary" }),
      green: sprinkles({ accentColor: "greenSecondary" }),
      blue: sprinkles({ accentColor: "blueSecondary" }),
      orange: sprinkles({ accentColor: "orangeSecondary" }),
    },
  },
  defaultVariants: {
    size: "md",
    color: "gray",
  },
});

export const input = recipe({
  base: {
    margin: 0,
  },
});

export type CheckboxVariants = RecipeVariants<typeof checkbox>;
