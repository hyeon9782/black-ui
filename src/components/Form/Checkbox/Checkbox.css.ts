import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "@/css/sprinkles.css";

export const checkbox = recipe({
  base: sprinkles({
    display: "flex",
    alignItems: "center",
    fontSize: "0",
    gap: "1",
    opacity: {
      base: "1",
      disabled: "0.5",
    },
    color: "textSecondary",
  }),
  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed'
      },
      false: {
        cursor: 'pointer'
      }
    },
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
    isDisabled: false
  },
});

export const input = recipe({
  base: {
    margin: 0,
  },
  variants: {
    isDisabled: {
      true: {
        cursor: 'not-allowed'
      },
      false: {
        cursor: 'pointer'
      }
    },
  }
});

export type CheckboxVariants = RecipeVariants<typeof checkbox>;
