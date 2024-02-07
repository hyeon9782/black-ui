import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const close = recipe({
  base: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    border: "none",
    padding: 0,
  },
  variants: {
    size: {
      xs: {
        fontSize: "0.5rem",
      },
      sm: {
        fontSize: "1rem",
      },
      md: {
        fontSize: "1.5rem",
      },
      lg: {
        fontSize: "2rem",
      },
      xl: {
        fontSize: "2.5rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CloseButtonVariants = RecipeVariants<typeof close>;
