import { sprinkles } from "@/css/sprinkles.css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const text = recipe({
  base: {},
  variants: {
    fontSize: {
      "6xl": sprinkles({ fontSize: "11" }),
      "5xl": sprinkles({ fontSize: "10" }),
      "4xl": sprinkles({ fontSize: "9" }),
      "3xl": sprinkles({ fontSize: "8" }),
      "2xl": sprinkles({ fontSize: "7" }),
      xl: sprinkles({ fontSize: "6" }),
      lg: sprinkles({ fontSize: "5" }),
      md: sprinkles({ fontSize: "4" }),
      sm: sprinkles({ fontSize: "3" }),
      xs: sprinkles({ fontSize: "2" }),
    },
  },
  defaultVariants: {
    fontSize: "md",
  },
});

export type TextVariants = RecipeVariants<typeof text>;
