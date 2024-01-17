import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const drawer = recipe({
  base: {},
  variants: {
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
      full: {},
    },
    placement: {
      top: {},
      right: {},
      bottom: {},
      left: {},
    },
    isOpen: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

export type DrawerVariants = RecipeVariants<typeof drawer>;
